const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")
const centerX = canvas!.clientWidth / 2
const centerY = canvas!.clientHeight / 2
const ctx = canvas?.getContext("2d")

export function shield(direction: string) {
  if (!ctx || !canvas) return console.log("no context or canvas detected")

  ctx.strokeStyle = "#333"
  ctx.strokeRect(centerX - 20, centerY - 20, 40, 40)

  ctx.fillStyle = "green"
  switch (direction) {
    case "up":
      ctx.fillRect(centerX - 20, centerY - 20, 40, 2)
      break
    case "down":
      ctx.fillRect(centerX - 20, centerY + 20, 40, 2)
      break
    case "left":
      ctx.fillRect(centerX - 20, centerY - 20, 2, 40)
      break
    case "right":
      ctx.fillRect(centerX + 20, centerY - 20, 2, 40)
      break
    default:
      return
  }
}
