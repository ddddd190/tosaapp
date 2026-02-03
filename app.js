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

  // ---- 気分決定 ----
  const now = new Date();
  const index = (now.getHours() * 60 + now.getMinutes()) % moods.length;

  moodEl.textContent = moods[index].emoji;
  labelEl.textContent = moods[index].label;

  // ---- 絵文字を揺らす（PC確実対応）----
  let start = null;

  function floatEmoji(time) {
    if (!start) start = time;
    const t = time - start;

    const y = Math.sin(t / 700) * 6; // 揺れ幅
    moodEl.style.transform = `translateY(${y}px)`;

    requestAnimationFrame(floatEmoji);
  }

  requestAnimationFrame(floatEmoji);

  // ---- 履歴読み込み ----
  fetch("world_mood_history.json")
    .then(res => res.json())
    .then(list => {
      const ul = document.getElementById("history-list");
      if (!ul) return;

      list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.emoji} ${item.day}：${item.label}`;
        ul.appendChild(li);
      });
    });

});


