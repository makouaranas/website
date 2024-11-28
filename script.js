// Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    // Add animation to button
    document.querySelector('button').classList.add('animate');
    // Remove animation after 2 seconds
    setTimeout(() => {
      document.querySelector('button').classList.remove('animate');
    }, 2000);
  });