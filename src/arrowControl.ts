import { updateHealth, updateScore } from "./scoreControl"
import { arrow } from "./arrow"
import { canvas, centerX, centerY } from "./consts"

// Arrows object
export let arrows: arrow[] = [{ id: 1, x: 10, y: centerY, speed: 1 }]

export function moveArrow(arrow: arrow) {
  arrow.x += arrow.speed
}

// Check if arrow hit the player or the shield
export function checkIfHit(
  arrow: arrow,
  limit: number,
  shieldDirection: string
) {
  if (arrow.x + 13 >= canvas!.clientWidth / 2 - limit) {
    // If shield is covering score += 1
    if (shieldDirection == "left") updateScore()
    // If shield not covering health -= 1
    else updateHealth()

    // Move arrow
    arrow.x = 10
  }
}
