## Mars Rover

Write a program which takes in commands and moves one or more robots around Mars.

• The world should be modelled as a grid with size m x n
• Your program should read the input, update the robots, and print out the final states of the robots
• Each robot has a position (x, y), and an orientation (N, E, S, W)
• Each robot can move forward one space (F), rotate left by 90 degrees (L), or rotate right by 90 degrees (R)
• If a robot moves off the grid, it is marked as ‘lost’ and its last valid grid position and orientation is recorded
• Going from x -> x + 1 is in the easterly direction, and y -> y + 1 is in the northerly direction.
i.e. (0, 0) represents the south-west corner of the grid

## What I would implement further

1. At the moment the code does not validate the user inputs to ensure that they are within the bounds of the grid or that they are valid commands.

- transform the value of cardinalDirections and commands into uppercase letters and check the user inputs only letters and not other characters like ! ? .

2. Refactor the code -> use switch statement inside the marsRover fn

3. show the initial and last position of the robot on the grid by changing 0 to X

4. do some testing to see if the code works as expected in each scenario
