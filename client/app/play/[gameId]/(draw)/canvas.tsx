import { useState, useRef } from "react"
import useDraw, {Draw} from "./useDraw"

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const {onMouseDown, clear, undo} = useDraw(draw, canvasRef)

  function draw({ctx, curPoint, prevPoint}: Draw){
    const {x: curX, y: curY} = curPoint
    
    const lineColor = "#000"
    const lineWidth = 5

    let startPoint = prevPoint ?? curPoint

    const path = new Path2D()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor
    path.moveTo(startPoint.x, startPoint.y)
    path.lineTo(curX, curY)
    ctx.stroke(path)

    ctx.fillStyle = lineColor
    ctx.beginPath()
    path.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
    path.quadraticCurveTo(startPoint.x, startPoint.y, curX, curY)
    ctx.fill(path)
    path.closePath()
  }
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center"> 
      <button onClick={undo} className=" border-2 border-black rounded-md  p-2">Undo</button>
      <button onClick={clear} className=" border-2 border-black rounded-md  p-2">Clear Canvas</button>
      <canvas onMouseDown={onMouseDown} ref={canvasRef} width={750} height={750} className="border-2 border-black rounded-md"/>
    </div>
  )
}
