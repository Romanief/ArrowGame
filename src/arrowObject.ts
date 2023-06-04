import { centerX, centerY } from "./consts"

let counter: number = 0
let canCreateArrow: boolean = true

export type arrowType = {
  id: number
  x: number
  y: number
  w: number
  h: number
  speed: number
  direction: "up" | "down" | "left" | "right"
  hidden: boolean
}

export let arrows: arrowType[] = []

export function updateArrowObject() {
  let newArrows = [...arrows].filter((x) => !x?.hidden).filter(Boolean)
  console.log(arrows, newArrows)
  arrows = newArrows
}

export function createArrow() {
  if (!canCreateArrow) return

  const x = Math.floor(Math.random() * 3)

  switch (x) {
    case 1:
      arrows[counter] = {
        id: counter,
        x: centerX - 10,
        y: 590,
        w: 20,
        h: 13,
        speed: 5,
        direction: "up",
        hidden: false,
      }
      break
    case 2:
      arrows[counter] = {
        id: counter,
        x: centerX - 10,
        y: 10,
        w: 20,
        h: 13,
        speed: 5,
        direction: "down",
        hidden: false,
      }
      break
    case 0:
      arrows[counter] = {
        id: counter,
        x: 590,
        y: centerY,
        w: 13,
        h: 20,
        speed: 5,
        direction: "left",
        hidden: false,
      }
      break
    case 3:
      arrows[counter] = {
        id: counter,
        x: 10,
        y: centerY,
        w: 13,
        h: 20,
        speed: 5,
        direction: "right",
        hidden: false,
      }
      break
  }

  counter++

  canCreateArrow = false
  setTimeout(() => {
    canCreateArrow = true
  }, 1000)
}
