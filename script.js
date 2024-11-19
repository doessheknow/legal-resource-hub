// Get the current pathname
const currentPath = window.location.pathname;

// Check if we're on the repository's root (e.g., "/repository-name/" or "/") and the file is "index.html"
if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html')) {
  // Confirm that we are specifically on the root page with "index.html"
  const background = document.getElementById('background');
  if (background) {
    // Your logic for modifying the background goes here
    // For example:
    background.style.backgroundColor = 'lightblue'; // example background change


  // Track mouse movements
  document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Map mouse position to colors
    const hue = (clientX / width) * 360; // Horizontal movement changes hue
    const lightness = 50 + (clientY / height) * 25; // Vertical movement changes lightness

    // Update background gradient
    background.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, 
      hsl(${hue}, 100%, ${lightness}%) 0%, 
      rgba(255, 255, 255, 0.1) 80%)`;
  });
}
