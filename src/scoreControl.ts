import { scoreDiv, healthDiv } from "./consts"

export let score: number = 0
export let health: number = 3

export function updateScore() {
  score += 1
}

export function updateHealth() {
  health -= 1
}

export function showScores() {
  if (scoreDiv) scoreDiv.textContent = `Score: ${score}`
  if (healthDiv) healthDiv.textContent = `Health: ${health}`
}
