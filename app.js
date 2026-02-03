const moods = [
  { emoji: "😴", label: "全体的に眠い" },
  { emoji: "😐", label: "特に何も起きていない" },
  { emoji: "🙂", label: "ちょっとだけ余裕がある" },
  { emoji: "😵‍💫", label: "情報が多すぎる" },
  { emoji: "😌", label: "まあまあ平和" },
  { emoji: "😤", label: "理由は不明だがピリついている" }
];

const now = new Date();

// 時間 × 分で擬似乱数（リロードしてもそれっぽく安定）
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

[
  { "day": "1日前", "emoji": "😟", "label": "不安な話題がやや多め" },
  { "day": "2日前", "emoji": "😐", "label": "大きな動きは少ない" },
  { "day": "3日前", "emoji": "😐", "label": "落ち着いたが情報量は多め" },
  { "day": "4日前", "emoji": "🙂", "label": "前向きな話題が少し目立つ" },
  { "day": "5日前", "emoji": "😟", "label": "重たいニュースが中心" },
  { "day": "6日前", "emoji": "😐", "label": "様子見の空気" },
  { "day": "7日前", "emoji": "😐", "label": "全体的に静か" }
]


