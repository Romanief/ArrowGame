// Core
export const canvas: HTMLCanvasElement | null =
  document.querySelector("#canvas")
export const ctx = canvas?.getContext("2d")

// Game mechanics
export const limit: number = 20

// Canvas hot points
export const centerX: number = canvas!.clientWidth / 2
export const centerY: number = canvas!.clientHeight / 2

// Arrows  constants
export const arrowW: number = 13
export const arrowH: number = 20
