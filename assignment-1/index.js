function runcounter(number) {
  if (number == 1000000) {
    return false;
  } else {
    setTimeout(() => {
      number++;
      console.log(number);
      runcounter(number);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  runcounter(0);
});
