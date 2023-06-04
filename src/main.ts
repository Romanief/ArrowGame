import { player } from "./player"
import { blueArrow } from "./arrow"
import { moveArrow, checkIfHit, arrows } from "./arrowControl"
import { shield } from "./shield"
import { showScores } from "./scoreControl"
import { canvas, ctx, limit } from "./consts"
import { shieldDirection, updateDirection } from "./shieldControl"

let isPlaying: boolean = false

function update() {
  // Make sure canvas and context exists
  if (!ctx || !canvas) return console.log("No context or canvas identified")

  // Clear whole canvas
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

  // Updates scores, draw player and shield
  showScores()
  player(20, 20)
  shield(shieldDirection)

  // Iterates through the arrows and draw each one of them
  for (let arrow of arrows) {
    blueArrow(arrow.x, arrow.y)
    moveArrow(arrow)
    checkIfHit(arrow, limit, shieldDirection)
  }

  // Recall self if game is not paused
  if (isPlaying) return requestAnimationFrame(update)
}

// Gloval event for keyDown
document.addEventListener("keydown", (e) => {
  // If arrow is pressed redirect to shield controls
  if (
    e.key == "ArrowUp" ||
    e.key == "ArrowLeft" ||
    e.key == "ArrowDown" ||
    e.key == "ArrowRight"
  )
    return updateDirection(e.key)

  // Game controls
  switch (e.key) {
    // Spacebar: Pause or start the game
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
