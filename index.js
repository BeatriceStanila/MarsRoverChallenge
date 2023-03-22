// make the user input how many rows and columns Mars should have
let gridRows = prompt("How many rows do you want ?");
let gridColumns = prompt("How many columns do you want ?");

// ask user for the initial position and convert the input to number
let xPosition = parseInt(prompt("Where X should be?"));
let yPosition = parseInt(prompt("Where Y should be?"));

// make user to input the orientation and direction of the robot
let cardinalDirections = prompt("What's the orientation: N, E, S or W?");
let command = prompt("Give me the directions: F, R, L");

/**
 * a fn that creates Mars grid -> STARTING FROM 0
 * @param {*} rows
 * @param {*} columns
 * @returns the grid of required rows and columns -> MARS
 */
function createGrid(rows, columns) {
  // initialise an empty array for the grid
  let grid = [];

  // iterate through the rows
  for (let i = 0; i < rows; i++) {
    // initialise and empty array for rows
    let row = [];

    // iterate through the columns, want the columns to start form 1
    for (let j = 0; j < columns; j++) {
      // push a value 0 the rows variable
      row.push(0);
    }
    // add the row to the grid
    grid.push(row);
  }

  return grid;
}

/**
 *
 * @param {*} grid
 * @param {*} x
 * @param {*} y
 * @param {*} orientation
 * @param {*} directions
 * @returns position x, y and orientation
 */

function marsRover(grid, x, y, orientation, directions) {
  // find the robot's position on the grid
  let currentPosition = [x, y];
  console.log(`The current robot's position is ${currentPosition}.`);

  // create an empty array to save the last position of the robot
  let lastPosition = [];

  // loop though string of commands and update the robot's position
  for (let i = 0; i < directions.length; i++) {
    let direction = directions[i];

    // move forward depending on the orientation and update the last position
    if (direction === "F" && orientation === "N") {
      currentPosition[0] += 1; // update x coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "F" && orientation === "E") {
      currentPosition[1] += 1; // update y coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "F" && orientation === "S") {
      currentPosition[0] -= 1; // update x coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "F" && orientation === "W") {
      currentPosition[1] -= 1; // update y coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    }

    // move left depending on the orientation and update the last position
    if (direction === "L" && orientation === "N") {
      currentPosition[1] -= 1; // update y coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "L" && orientation === "E") {
      currentPosition[0] += 1; // update x coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "L" && orientation === "S") {
      currentPosition[1] += 1; // update y coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "L" && orientation === "W") {
      currentPosition[0] -= 1; // update x coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    }

    // move right depending on the orientation and update the last position
    if (direction === "R" && orientation === "N") {
      currentPosition[1] += 1; // update y coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "R" && orientation === "E") {
      currentPosition[0] -= 1; // update x coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "R" && orientation === "S") {
      currentPosition[1] -= 1; // update y coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    } else if (direction === "R" && orientation === "W") {
      currentPosition[0] += 1; // update x coordinate
      lastPosition.push(currentPosition.slice()); // push a copy of currentPosition
    }

    // update the orientation if the robot turns left or right
    if (direction === "L") {
      if (orientation === "N") {
        orientation = "W";
      } else if (orientation === "E") {
        orientation = "N";
      } else if (orientation === "S") {
        orientation = "E";
      } else if (orientation === "W") {
        orientation = "S";
      }
    } else if (direction === "R") {
      if (orientation === "N") {
        orientation = "E";
      } else if (orientation === "E") {
        orientation = "S";
      } else if (orientation === "S") {
        orientation = "W";
      } else if (orientation === "W") {
        orientation = "N";
      }
    }

    // check if the robot is off the grid
    if (
      currentPosition[0] < 0 ||
      currentPosition[0] >= grid.length ||
      currentPosition[1] < 0 ||
      currentPosition[1] >= grid[0].length
    ) {
      // return it's last position and orientation
      return `${lastPosition[0]} ${lastPosition[1]} ${orientation} LOST`;
    }
  }
  // return the final position and orientation of the robot
  return `${lastPosition[0]} ${lastPosition[1]} ${orientation}`;
}

// first call the createGrid fn and save it into a variable
let grid = createGrid(gridRows, gridColumns);

// second call the marsRover fn
let position = marsRover(
  grid,
  xPosition,
  yPosition,
  cardinalDirections,
  command
);

// console the result of the marsRover fn
console.log(position);
