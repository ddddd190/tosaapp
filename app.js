document.addEventListener("DOMContentLoaded", () => {

  const moods = [
    { emoji: "😴", label: "全体的に眠い" },
    { emoji: "😐", label: "特に何も起きていない" },
    { emoji: "🙂", label: "ちょっとだけ余裕がある" },
    { emoji: "😵‍💫", label: "情報が多すぎる" },
    { emoji: "😌", label: "まあまあ平和" },
    { emoji: "😤", label: "理由は不明だがピリついている" }
  ];

  const moodEl = document.getElementById("mood");
  const labelEl = document.getElementById("label");

 
  let moodIndex = 0;

  function updateMood() {
    const mood = moods[moodIndex];
    moodEl.textContent = mood.emoji;
    labelEl.textContent = mood.label;
    moodIndex = (moodIndex + 1) % moods.length;
  }

  updateMood();
  setInterval(updateMood, 5000);
  
  let t = 0;

  function animate() {
    t += 0.05;
    const y = Math.sin(t) * 8; // 揺れ幅
    moodEl.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});


