import { player } from "./player"
import { blueArrow } from "./arrow"
import { moveArrow, checkIfHit, arrows } from "./arrowControl"
import { shield } from "./shield"
import { showScores } from "./scoreControl"
import { canvas, centerX, centerY, ctx, limit } from "./consts"
import { shieldDirection, updateDirection } from "./shieldControl"
import {
  isPlaying,
  gameStarted,
  startGame,
  gameOver,
  startAndPause,
} from "./gameControl"

export function update() {
  // Make sure canvas and context exists
  if (!ctx || !canvas) return console.log("No context or canvas identified")

  // If game is not started draw a texts that tells the player how to start the game

  if (!gameStarted) {
    ctx.font = "30px Arial"
    return ctx?.fillText("Press any key to start", centerX - 140, centerY)
  }

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
  // If game is not started, any key down will start the game
  if (!gameStarted) return startGame()

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
      startAndPause
      if (isPlaying) update()
      break

    default:
      console.log(e.key)
      return
  }
})
