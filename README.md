# Tailwind CSS Gradient Rendering Issue

This repository demonstrates a subtle bug in Tailwind CSS where gradients may not render correctly on small elements. The gradient appears compressed or invisible if the parent element's dimensions are too small for the gradient's defined transition.

## Bug Reproduction

The `bug.js` file contains a simple example showing the issue. The gradient is applied to a small div, resulting in the gradient being visually distorted or entirely absent.

## Solution

The `bugSolution.js` file provides a workaround. This involves adding `min-w-[value]` and `min-h-[value]` to the div element which forces a minimum width and height for the element, ensuring the gradient has enough space to render correctly.