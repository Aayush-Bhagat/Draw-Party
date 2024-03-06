import { useState, useRef, MutableRefObject } from "react"
import useDraw, {Draw} from "./useDraw"
import { Button } from "@/components/ui/button"

interface Props{
  isDrawer: boolean
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

export default function GameCanvas({isDrawer, canvasRef} : Props) {
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

  if (isDrawer){
    return (
      <div>
        <canvas onMouseDown={onMouseDown} ref={canvasRef} className="bg-white w-full border-2 border-black rounded-md" width={600} height={600} />
        <Button onClick={undo} className=" border-2 border-black rounded-md  p-2">Undo</Button>
        <Button onClick={clear} className=" border-2 border-black rounded-md  p-2">Clear</Button>
      </div>
    )
  }

  return (
    <div className=" bg-white">
      <canvas  ref={canvasRef} width={600} height={600} className=" w-full border-2 border-black rounded-md"/>
    </div>
  )
}
