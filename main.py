turtle.set_position_cartesian(0, 0)
turtle.show_turtle()
turtle.pen(TurtlePenMode.UP)
turtle.turn_turtle_direction_by_degrees(TurtleTurnDirection.LEFT, 90)
turtle.move_turtle_direction(TurtleDirection.BACKWARD, 25)
turtle.turn_turtle_direction_by_degrees(TurtleTurnDirection.RIGHT, 50)
turtle.pen(TurtlePenMode.DOWN)
side = 0
for index in range(60):
    side = side + 2.5
    for index2 in range(10):
        turtle.move_turtle_direction(TurtleDirection.FORWARD, side)
        turtle.set_pen_color(1)
        turtle.turn_turtle_direction_by_degrees(TurtleTurnDirection.RIGHT, 100)
    turtle.turn_turtle_direction_by_degrees(TurtleTurnDirection.RIGHT, 100)