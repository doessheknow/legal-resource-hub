/* General Styles */
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  position: relative;
    overflow: hidden;
    background: #C6FFDD;
    background: linear-gradient(200deg, #bf93c2, #FBD786, #C6FFDD);
    height: 100vh;
}

/* Button Styles */
button {
  background: none;
  border: 2px solid;
  color: var(--color);
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  transition: 0.25s;
}

button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;
}

/* Hover and Focus Effects - Box-shadow */
.fill:hover,
.fill:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}

.pulse:hover, 
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em transparent;
}

@keyframes pulse {
  0% { 
    box-shadow: 0 0 0 0 var(--hover); 
  }
}

.close:hover,
.close:focus {
  box-shadow: 
    inset -3.5em 0 0 0 var(--hover),
    inset 3.5em 0 0 0 var(--hover);  
}

.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

.up:hover,
.up:focus {
  box-shadow: inset 0 -3.25em 0 0 var(--hover);
}

.slide:hover,
.slide:focus {
  box-shadow: inset 6.5em 0 0 0 var(--hover);
}

.offset {  
  box-shadow: 
    0.3em 0.3em 0 0 var(--color),
    inset 0.3em 0.3em 0 0 var(--color);
  
  &:hover,
  &:focus {
    box-shadow: 
      0 0 0 0 var(--hover),
      inset 6em 3.5em 0 0 var(--hover);
  }
}

/* Set button colors using CSS custom properties */
$colors: (
  fill: #a972cb,
  pulse: #ef6eae, 
  close: #ff7f82, 
  raise: #ffa260, 
  up: #e4cb58, 
  slide: #8fc866, 
  offset: #19bc8b
);

@each $button, $color in $colors {
  .#{$button} {
    --color: #{$color};
    --hover: #{adjust-hue($color, 45deg)};
  }
}

/*=== Pen styling (ignore this part)===*/
button {  
  color: var(--color);
  transition: 0.25s;
  
  &:hover,
  &:focus { 
    border-color: var(--hover);
    color: #fff;
  }
}

/* Particle Sparkle and Hover Effects */
button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(200deg, #bf93c2, #FBD786, #C6FFDD); /* Gradient applied to background */
  color: green; /* Text color */
  border: none; /* No border */
  padding: 1em 2em; /* Padding around the button */
  border-radius: 12px; /* Rounded corners */
  font-size: 1.5em; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
}

button:hover {
  background: linear-gradient(200deg, #FBD786, #C6FFDD, #bf93c2); /* Invert the gradient on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
}

button:active {
  transform: scale(0.98); /* Slightly shrink the button on click */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4); /* Intensify shadow on active */
}

button:before {
  content: "";
  position: absolute;
  inset: -0.25em;
  z-index: -1;
  border: 0.25em solid hsl(260 97% 50% / 0.5);
  border-radius: 100px;
  opacity: var(--active, 0);
  transition: opacity 0.25s ease-in-out;
}

button:active:before {
  opacity: 1; /* Show sparkle effect when button is pressed */
}

.spark {
  position: absolute;
  inset: 0;
  border-radius: 100px;
  overflow: hidden;
  mask: linear-gradient(white, transparent 50%);
  animation: flip 1.8s infinite steps(2, end);
  pointer-events: none; /* Prevent interaction with particles */
}

@keyframes flip {
  to {
    transform: rotate(360deg);
  }
}

.text {
  translate: 2% -6%;
  letter-spacing: 0.01ch;
  background: linear-gradient(90deg, hsl(0 0% calc((var(--active) * 100%) + 65%)), hsl(0 0% calc((var(--active) * 100%) + 26%)));
  -webkit-background-clip: text;
  color: transparent;
  transition: background 0.25s ease;
}

button:is(:hover, :focus-visible) {
  --active: 1; /* Trigger active state */
}

.particle-pen {
  position: absolute;
  width: 200%;
  aspect-ratio: 1;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  -webkit-mask: radial-gradient(white, transparent 65%);
  z-index: -1;
  opacity: var(--active, 0);
  transition: opacity 0.25s ease-in-out;
}

.particle {
  fill: white;
  width: calc(var(--size, 0.25) * 1rem);
  aspect-ratio: 1;
  position: absolute;
  top: calc(var(--y) * 1%);
  left: calc(var(--x) * 1%);
  opacity: var(--alpha, 1);
  animation: float-out 1s calc(var(--delay) * -1s) infinite linear;
  transform-origin: var(--origin-x, 1000%) var(--origin-y, 1000%);
  z-index: -1;
}

@keyframes float-out {
  to {
    transform: rotate(360deg);
  }
}
