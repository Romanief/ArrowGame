import { updateHealth, updateScore } from "./scoreControl"
import { arrow } from "./arrow"
import { canvas, centerX, centerY } from "./consts"

export let arrows: arrow[] = [{ id: 1, x: 10, y: centerY, speed: 1 }]

export function moveArrow(arrow: arrow) {
  arrow.x += arrow.speed
}

export function checkIfHit(
  arrow: arrow,
  limit: number,
  shieldDirection: string
) {
  if (arrow.x + 13 >= canvas!.clientWidth / 2 - limit) {
    if (shieldDirection == "left") updateScore()
    else updateHealth()
    arrow.x = 10
  }
}
