import { useRef, useEffect } from "react"

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(()=>{
    const mouseMoveHandler = (e: MouseEvent) =>{
      const curCoords = getCanvasPoints(e)

      const ctx = canvasRef.current?.getContext('2d')

      if(!ctx || !curCoords) return



    }
    canvasRef?.current?.addEventListener("mousemove", mouseMoveHandler)

    const getCanvasPoints = (e: MouseEvent) => {
      const canvas = canvasRef.current

      if(!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      return {x, y}

    }

    //cleanup
    return () => {
      canvasRef.current?.removeEventListener("mousemove", mouseMoveHandler)
    } 
  }, [])

  return { canvasRef }
}
