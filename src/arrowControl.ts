import { updateHealth, updateScore } from "./scoreControl"
import { centerX, centerY } from "./consts"
import { arrowType } from "./arrowObject"
import { updateArrowObject } from "./arrowObject"

export function moveArrow(arrow: arrowType, direction: string) {
  switch (direction) {
    case "up":
      arrow.y -= arrow.speed
      break
    case "down":
      arrow.y += arrow.speed
      break
    case "right":
      arrow.x += arrow.speed
      break
    case "left":
      arrow.x -= arrow.speed
      break
  }
}

// Check if arrow hit the player or the shield
export function checkIfHit(
  arrow: arrowType,
  limit: number,
  shieldDirection: string
) {
  // Check arrow direction, then if hit limit checks shiel direction
  updateArrowObject()
  switch (arrow.direction) {
    case "up":
      if (arrow.y - arrow.h <= centerY + limit) {
        // If shield is covering score += 1
        if (shieldDirection == "down") updateScore()
        // If shield not covering health -= 1
        else updateHealth()

        arrow.hidden = true
      }
      break
    case "down":
      if (arrow.y + arrow.h >= centerY - limit) {
        // If shield is covering score += 1
        if (shieldDirection == "up") updateScore()
        // If shield not covering health -= 1
        else updateHealth()

        arrow.hidden = true
      }
      break
    case "left":
      if (arrow.x - arrow.w <= centerX + limit) {
        // If shield is covering score += 1
        if (shieldDirection == "rigth") updateScore()
        // If shield not covering health -= 1
        else updateHealth()

        arrow.hidden = true
      }

      break

    case "right":
      if (arrow.x + arrow.w >= centerX - limit) {
        // If shield is covering score += 1
        if (shieldDirection == "left") updateScore()
        // If shield not covering health -= 1
        else updateHealth()

        arrow.hidden = true
        break
      }
  }
}
