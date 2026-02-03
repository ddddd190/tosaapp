
const moods = ["🙂", "😴", "😐", "😵‍💫", "😌"];

let i = 0;
setInterval(() => {
  document.getElementById("mood").textContent = moods[i];
  i = (i + 1) % moods.length;
}, 5000);

let t = 0;
function anim() {
  t += 0.1;
  document.getElementById("mood").style.transform =
    `translateY(${Math.sin(t) * 10}px)`;
  requestAnimationFrame(anim);
}
anim();
