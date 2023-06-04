import { player } from "./player"
import { blueArrow, arrow as arrowType } from "./arrow"
import { moveArrow, checkIfHit } from "./arrowControl"
import { shield } from "./shield"

const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")
const ctx = canvas?.getContext("2d")
const centerX: number = canvas!.clientWidth / 2
const centerY: number = canvas!.clientHeight / 2
const limit: number = 20

let shieldDirection: string = "up"

const arrows: arrowType[] = [{ id: 1, x: centerX, y: centerY, speed: 1 }]

function update() {
  if (!ctx || !canvas) return console.log("No context or canvas identified")
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

  player(20, 20)
  shield(shieldDirection)

  for (let arrow of arrows) {
    blueArrow(arrow.x, arrow.y)
    moveArrow(arrow)
    checkIfHit(arrow, limit)
  }

  requestAnimationFrame(update)
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      shieldDirection = "up"
      break
    case "ArrowDown":
      shieldDirection = "down"
      break
    case "ArrowRight":
      shieldDirection = "right"
      break
    case "ArrowLeft":
      shieldDirection = "left"
      break

    default:
      return
  }
})

update()

export { shieldDirection }
