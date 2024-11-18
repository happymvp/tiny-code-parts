//Dijkstra's Algorithm

const moveAllPossibleDirections = (grid: number[][], path: string[], finishPointX: number, finishPointY: number): string[][] => {
    const currentTime = path.length
    let solutions: string[][] = []

    const currentPointX = +path[path.length - 1][0]
    const currentPointY = +path[path.length - 1][1]

    const moveBottom = () => {
        if (currentPointY < finishPointY) {
            const newPointY = currentPointY + 1

            if (currentTime >= grid[newPointY][currentPointX]) {
                solutions.push([...path, `${currentPointX}${newPointY}`])
            }
        }
    }

    const moveRight = () => {
        if (currentPointX < finishPointX) {
            const newPointX = currentPointX + 1

            if (currentTime >= grid[currentPointY][newPointX]) {
                solutions.push([...path, `${newPointX}${currentPointY}`])
            }
        }
    }

    const moveTop = () => {
        const newPointY = currentPointY - 1

        if (newPointY >= 0 && currentTime >= grid[newPointY][currentPointX]) {
            solutions.push([...path, `${currentPointX}${newPointY}`])
        }
    }

    const moveLeft = () => {
        const newPointX = currentPointX - 1

        if (newPointX >= 0 && currentTime >= grid[currentPointY][newPointX]) {
            solutions.push([...path, `${newPointX}${currentPointY}`])
        }
    }

    moveBottom()
    moveRight()
    moveTop()
    moveLeft()


    return solutions
}

function minimumTime(grid: number[][]): number {
    const finishPointX = grid[0].length - 1
    const finishPointY = grid.length - 1
    let paths: string[][] = [["00"]] //XY
    let result: number = -1

    while (paths.length) {

        let newPaths: string[][] = []

        for (let i = 0; i < paths.length; i++) {
            const path = paths[i]
            newPaths = newPaths.concat(moveAllPossibleDirections(grid, path, finishPointX, finishPointY))
        }

        if (newPaths.length === 0) {
            break;
        }

        paths = newPaths

        newPaths.forEach(item => {
            if (item[item.length - 1] === `${finishPointX}${finishPointY}`) {
                result = item.length - 1
                paths = []
            }
        })
    }

    return result
};
