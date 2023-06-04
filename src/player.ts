import { ctx, centerX, centerY } from "./consts"

export const player = (w: number, h: number) => {
  if (!ctx) return console.log("no context")

  ctx.fillStyle = "coral"
  ctx.strokeStyle = "black"
  ctx.fillRect(centerX - w / 2, centerY - h / 2, w, h)
  ctx.strokeRect(centerX - w / 2, centerY - h / 2, w, h)
}
