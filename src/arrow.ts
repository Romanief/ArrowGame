import { ctx } from "./consts"

// Draw a simple arrow
export function blueArrow(
  x: number,
  y: number,
  w: number,
  h: number,
  direction: "up" | "down" | "left" | "right"
) {
  if (!ctx) return console.log("no context")

  ctx.beginPath()

  switch (direction) {
    case "right":
      ctx.moveTo(x, y - h / 2)
      ctx.lineTo(x + w, y)
      ctx.lineTo(x, y + h / 2)
      break
    case "left":
      ctx.moveTo(x + w, y - h / 2)
      ctx.lineTo(x, y)
      ctx.lineTo(x + w, y + h / 2)
      break
    case "down":
      ctx.moveTo(x, y)
      ctx.lineTo(x + w, y)
      ctx.lineTo(x + w / 2, y + h)
      break
    case "up":
      ctx.moveTo(x, y + h)
      ctx.lineTo(x + w, y + h)
      ctx.lineTo(x + w / 2, y)
      break
  }

  ctx.closePath()

  ctx.fillStyle = "blue"
  ctx.fill()
  ctx.stroke()
}
