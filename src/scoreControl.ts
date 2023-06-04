import { scoreDiv, healthDiv } from "./consts"
import { gameOver } from "./gameControl"

export let score: number = 0
export let health: number = 3

export function reset() {
  score = 0
  health = 3
}

export function updateScore() {
  score += 1
}

export function updateHealth() {
  health -= 1
}

export function checkGameOver() {
  if (health <= 0) return gameOver()
}

export function showScores() {
  if (scoreDiv) scoreDiv.textContent = `Score: ${score}`
  if (healthDiv) healthDiv.textContent = `Health: ${health}`
}
