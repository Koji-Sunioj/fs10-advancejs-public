function runcounter(number) {
  if (number == 1000000) {
    return false;
  } else {
    const nextInterval = setTimeout(() => {
      number++;
      console.log(number);
      clearInterval(nextInterval);
      runcounter(number);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  runcounter(0);
});
