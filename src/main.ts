import { player } from "./player"
import { blueArrow } from "./arrow"
import { moveArrow, checkIfHit, arrows } from "./arrowControl"
import { shield } from "./shield"
import { showScores } from "./scoreControl"
import { canvas, ctx, limit } from "./consts"
import { shieldDirection, updateDirection } from "./shieldControl"

let isPlaying: boolean = false

function update() {
  if (!ctx || !canvas) return console.log("No context or canvas identified")
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

  console.log(shieldDirection)
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
  if (
    e.key == "ArrowUp" ||
    e.key == "ArrowLeft" ||
    e.key == "ArrowDown" ||
    e.key == "ArrowRight"
  )
    return updateDirection(e.key)

  switch (e.key) {
    case " ":
      isPlaying = !isPlaying
      if (isPlaying) update()
      break

    default:
      console.log(e.key)
      return
  }
})

update()
