let interval;

function runcounter(number) {
  if (number === 1000000) {
    clearInterval(interval);
  } else {
    clearInterval(interval);
    interval = setTimeout(() => {
      number++;
      console.log(number);
      runcounter(number);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  runcounter(0);
});
