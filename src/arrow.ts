const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")
const ctx = canvas?.getContext("2d")

const w: number = 13
const h: number = 20

export type arrow = {
  id: number
  x: number
  y: number
  speed: number
}

export function blueArrow(x: number, y: number) {
  if (!ctx) return console.log("no context")

  ctx.beginPath()

  ctx.moveTo(x, y - h / 2)
  ctx.lineTo(x + w, y)
  ctx.lineTo(x, y + h / 2)
  ctx.closePath()

  ctx.fillStyle = "blue"
  ctx.fill()
  ctx.stroke()
}
