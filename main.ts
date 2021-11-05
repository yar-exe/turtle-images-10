namespace Fractals {
    //% blockId=fractalsweb
    //% block="Web"
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
    
    //% blockId=fractalshole
    //% block="Hole"
    export function Hole() {
        turtle.setPositionCartesian(0, 0)
        turtle.showTurtle()
        turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Left, 90)
        for (let index = 0; index < 80; index++) {
            turtle.setPenColor(2)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(9)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(7)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(4)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(1)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(10)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(5)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
            turtle.setPenColor(8)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 1)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 60)
            turtle.pen(TurtlePenMode.Up)
            turtle.moveTurtleDirection(TurtleDirection.Backward, 60)
            turtle.pen(TurtlePenMode.Down)
        }

    }
}