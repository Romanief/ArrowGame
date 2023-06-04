const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")

type arrow = {
  id: number
  x: number
  y: number
  speed: number
}
export function moveArrow(arrow: arrow) {
  arrow.x += arrow.speed
}

export function checkIfHit(arrow: arrow, limit: number) {
  if (arrow.x + 13 >= canvas!.clientWidth / 2 - limit) return (arrow.x = 10)
}
