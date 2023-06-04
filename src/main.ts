import { player } from "./player"
import { blueArrow } from "./arrow"
import { moveArrow, checkIfHit, arrows } from "./arrowControl"
import { shield } from "./shield"
import { showScores } from "./scoreControl"
import { canvas, ctx, limit } from "./consts"

let isPlaying: boolean = false
let shieldDirection: string = "up"

function update() {
  if (!ctx || !canvas) return console.log("No context or canvas identified")
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

  showScores()
  player(20, 20)
  shield(shieldDirection)

  for (let arrow of arrows) {
    blueArrow(arrow.x, arrow.y)
    moveArrow(arrow)
    checkIfHit(arrow, limit, shieldDirection)
  }

  if (isPlaying) return requestAnimationFrame(update)
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
    case " ":
      isPlaying = isPlaying ? false : true
      if (isPlaying) update()
      break

    default:
      console.log(e.key)
      return
  }
})

update()

export { shieldDirection }
