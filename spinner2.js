// Define an array of spinning animation frames.
const frames = ['|', '/', '-', '\\', '|', '/', '-'];

// Initialize the index of the current frame to zero.
let index = 0;

// Define a function that displays the spinning animation and sets a timer to call itself again.
const spin = () => {
  // Display the current frame using the process.stdout.write() method.
  // The \r character moves the cursor to the beginning of the line.
  // The template literal `${}` inserts the current frame into the string.
  process.stdout.write(`\r${frames[index++]}   `);

  // Update the index of the current frame, wrapping around to the beginning of the array if necessary.
  index %= frames.length;

  // Set a timer to call the spin() function again in 100 milliseconds.
  setTimeout(spin, 100);

  return; // break out of the loop?
};

// Call the spin() function to start the animation.
spin();

