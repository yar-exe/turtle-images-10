namespace Fractals {
    export function Web() {
        turtle.setPositionCartesian(0, 0)
        turtle.showTurtle()
        turtle.pen(TurtlePenMode.Up)
        turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Left, 90)
        turtle.moveTurtleDirection(TurtleDirection.Backward, 25)
        turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 50)
        turtle.pen(TurtlePenMode.Down)
        let side = 0
        for (let index = 0; index < 60; index++) {
            side = side + 2.5
            for (let index2 = 0; index2 < 10; index2++) {
                turtle.moveTurtleDirection(TurtleDirection.Forward, side)
                turtle.setPenColor(1)
                turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 100)
            }
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 100)
        }

    }
}
