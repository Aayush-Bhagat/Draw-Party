import { useRef, useEffect, useState } from "react"

export interface Draw{
  ctx: CanvasRenderingContext2D
  curPoint: Point
  prevPoint: Point | null
}

type Point = {
  x: number,
  y: number
}

export default function useDraw(onDraw: ({ctx, curPoint, prevPoint}: Draw) => void){
  const [isMouseDown, setIsMouseDown] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
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
    ctx.restore()
  }

  useEffect(()=>{
    const mouseMoveHandler = (e: MouseEvent) =>{
      if (!isMouseDown) return;

      const curCoords = getCanvasPoints(e)

      const ctx = canvasRef.current?.getContext('2d')

      if(!ctx || !curCoords) return

      onDraw({ctx, curPoint: curCoords, prevPoint: prevPoint.current})
      ctx.save()
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
      setIsMouseDown(false)
      prevPoint.current = null
    }

    window.addEventListener("mouseup", mouseUpHandler)

    //cleanup
    return () => {
      canvasRef.current?.removeEventListener("mousemove", mouseMoveHandler)
      window.removeEventListener("mouseup", mouseUpHandler)
    } 
  }, [onDraw, isMouseDown])

  return { canvasRef, onMouseDown, clear, undo }
}
