const hourEl = document.getElementById("hour");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");
console.log(ampmEl);

function updateClock() {
  let timer = new Date();
  let h = timer.getHours();
  let m = timer.getMinutes();
  let s = timer.getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
    ampmEl.style.backgroundColor = "var(--pm-color)";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  ampmEl.innerText = ampm;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
