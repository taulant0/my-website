document.addEventListener('DOMContentLoaded', () => {
    const interactiveCircle = document.querySelector('.interactive');
    
    window.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Move the circle to follow the mouse
      interactiveCircle.style.transform = `translate(${mouseX - 100}px, ${mouseY - 100}px)`;
    });
  });
  