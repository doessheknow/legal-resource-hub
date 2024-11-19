// Check if the current page is "index.html"
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
  const background = document.getElementById('background');

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
