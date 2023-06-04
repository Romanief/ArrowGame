// Core
const canvas: HTMLCanvasElement | null = document.querySelector("#canvas")
const ctx = canvas?.getContext("2d")

// Game mechanics
const limit: number = 20

// Canvas hot points
const centerX: number = canvas!.clientWidth / 2
const centerY: number = canvas!.clientHeight / 2

// Arrows constants
const arrowW: number = 13
const arrowH: number = 20

export { canvas, ctx, limit, centerX, centerY, arrowH, arrowW }
