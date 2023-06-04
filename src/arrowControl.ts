import { updateHealth, updateScore } from "./scoreControl"
import { arrow } from "./arrow"

const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")

const centerX: number = canvas!.clientWidth / 2
const centerY: number = canvas!.clientHeight / 2
export const arrows: arrow[] = [{ id: 1, x: 10, y: centerY, speed: 1 }]

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
