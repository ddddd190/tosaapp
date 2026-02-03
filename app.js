const moods = [
  { emoji: "😴", label: "全体的に眠い" },
  { emoji: "😐", label: "特に何も起きていない" },
  { emoji: "🙂", label: "ちょっとだけ余裕がある" },
  { emoji: "😵‍💫", label: "情報が多すぎる" },
  { emoji: "😌", label: "まあまあ平和" },
  { emoji: "😤", label: "理由は不明だがピリついている" }
];

const now = new Date();
const index = (now.getHours() * 60 + now.getMinutes()) % moods.length;

document.getElementById("mood").textContent = moods[index].emoji;
document.getElementById("label").textContent = moods[index].label;

fetch("world_mood_history.json")
  .then(res => res.json())
  .then(list => {
    const ul = document.getElementById("history-list");

    list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.emoji} ${item.day}：${item.label}`;
      ul.appendChild(li);
    });
  });


