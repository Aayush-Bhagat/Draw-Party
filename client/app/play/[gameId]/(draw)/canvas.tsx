import { useRef } from "react"
import useDraw, {Draw} from "./useDraw"

export default function Canvas() {
  const {canvasRef} = useDraw(draw)

  function draw({ctx, curPoint, prevPoint}: Draw){
    const {x: curX, y: curY} = curPoint
    
    const lineColor = "#000"
    const lineWidth = 5

    let startPoint = prevPoint ?? curPoint

    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor
    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(curX, curY)
    ctx.stroke()

    ctx.fillStyle = lineColor
    ctx.beginPath()
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
    ctx.fill()
  }
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center"> 
      <canvas ref={canvasRef} width={750} height={750} className="border-2 border-black rounded-md"/>
    </div>
  )
}
