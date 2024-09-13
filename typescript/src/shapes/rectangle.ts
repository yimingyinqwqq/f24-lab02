interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }
