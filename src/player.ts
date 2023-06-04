const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")
const ctx = canvas?.getContext("2d")

export const player = (w: number, h: number) => {
  if (!ctx) return console.log("no context")

  const centerX = canvas!.clientWidth / 2
  const centerY = canvas!.clientHeight / 2

  ctx.fillStyle = "coral"
  ctx.strokeStyle = "black"
  ctx.fillRect(centerX - w / 2, centerY - h / 2, w, h)
  ctx.strokeRect(centerX - w / 2, centerY - h / 2, w, h)
}
