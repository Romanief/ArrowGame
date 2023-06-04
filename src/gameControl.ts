import { update } from "./main"
import { reset } from "./scoreControl"

export let isPlaying: boolean = false
export let gameStarted: boolean = false

// Make game start
export function startGame() {
  gameStarted = true
  isPlaying = true
  update()
}

// Make game end
export function gameOver() {
  isPlaying = false
  gameStarted = false
  reset()
  update()
}

// Set game pause
export function startAndPause() {
  isPlaying = !isPlaying
}

update()
