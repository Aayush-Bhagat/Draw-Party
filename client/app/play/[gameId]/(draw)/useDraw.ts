import { useRef, useEffect, useState, MutableRefObject } from "react"

export interface Draw{
  ctx: CanvasRenderingContext2D
  curPoint: Point
  prevPoint: Point | null
}

type Point = {
  x: number,
  y: number
}

export default function useDraw(onDraw: ({ ctx, curPoint, prevPoint }: Draw) => void, canvasRef: MutableRefObject<HTMLCanvasElement | null> ){
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [drawHistory, setDrawHistory] = useState<ImageData[]>([])
  const prevPoint = useRef<null | Point>(null)


  const onMouseDown = () => setIsMouseDown(true)

  const clear = () => {
    const canvas = canvasRef.current
    if(!canvas) return 
    
    const ctx = canvas.getContext('2d')
    if(!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const undo = () => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }
    
    const ctx = canvas.getContext("2d")

    if (!ctx) return
    if (drawHistory.length === 0) return;
    if (drawHistory.length  === 1){
      setDrawHistory([])
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const lastState = drawHistory[drawHistory.length-2]
    setDrawHistory((history) => history.filter((_, i) => i !== history.length - 2))
    if (lastState === undefined) return
    ctx.putImageData(lastState, 0,0)
  }

  useEffect(()=>{
    console.log(drawHistory)
  }, [drawHistory])

  useEffect(()=>{
    console.log(drawHistory)
    const mouseMoveHandler = (e: MouseEvent) =>{
      if (!isMouseDown) return;

      const curCoords = getCanvasPoints(e)

      const ctx = canvasRef.current?.getContext('2d')

      if(!ctx || !curCoords) return

      onDraw({ctx, curPoint: curCoords, prevPoint: prevPoint.current})
      prevPoint.current = curCoords

    }

    const getCanvasPoints = (e: MouseEvent) => {
      const canvas = canvasRef.current

      if(!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      return {x, y}

    }

    canvasRef?.current?.addEventListener("mousemove", mouseMoveHandler)

    const mouseUpHandler = ()=>{
      if(isMouseDown === true){
        setIsMouseDown(false)
        prevPoint.current = null

        const canvas = canvasRef.current

        if (!canvas) {
          return
        }

        const ctx = canvas.getContext("2d")

        if (!ctx) return

        setDrawHistory((drawHistory)=> [...drawHistory, ctx.getImageData(0, 0, canvas.width, canvas.height)])
      }
    }

    window.addEventListener("mouseup", mouseUpHandler)

    //cleanup
    return () => {
      canvasRef.current?.removeEventListener("mousemove", mouseMoveHandler)
      window.removeEventListener("mouseup", mouseUpHandler)
    } 
  }, [onDraw, isMouseDown, canvasRef, drawHistory])

  return { onMouseDown, clear, undo }
}
