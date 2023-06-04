export let shieldDirection: string = "up"

export function updateDirection(x: string) {
  console.log(222)
  switch (x) {
    case "ArrowUp":
      shieldDirection = "up"
      break
    case "ArrowDown":
      shieldDirection = "down"
      break
    case "ArrowRight":
      shieldDirection = "right"
      break
    case "ArrowLeft":
      shieldDirection = "left"
      break
  }
}
