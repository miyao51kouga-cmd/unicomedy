const DATA = [
  {
    "year": 2026,
    "type": "noroshi",
    "event": "NOROSHI 2026",
    "winner": "チーム絵本作家",
    "school": "筑波大学お笑い集団DONPAPA",
    "runnerUp": "チーム湯島",
    "runnerSchool": "日本大学経商法落語研究会",
    "third": "チームjazz",
    "thirdSchool": "慶應義塾大学お笑い道場O-keis",
    "judge": "チームツキナミ食堂",
    "judgeSchool": "法政大学お笑いサークルHOS"
  },
  {
    "year": 2025,
    "type": "individual",
    "event": "大学芸会 個人戦2025",
    "winner": "ぶび",
    "school": "明治大学お笑いサークル木曜会Z",
    "runnerUp": "サレルロブロ",
    "runnerSchool": "近畿大学お笑いサークルこども帝国",
    "third": "カナダ",
    "thirdSchool": "日本大学経商法落語研究会",
    "judge": "クジラ会館",
    "judgeSchool": "近畿大学お笑いサークルこども帝国"
  },
  {
    "year": 2025,
    "type": "noroshi",
    "event": "NOROSHI 2025",
    "winner": "チーム消防車",
    "school": "日本大学経商法落語研究会",
    "runnerUp": "チームコネチカット",
    "runnerSchool": "早稲田大学お笑い工房LUDO",
    "third": "チームデブ",
    "thirdSchool": "慶應義塾大学お笑い道場O-keis",
    "judge": "チーム軽屋カミュ",
    "judgeSchool": "一橋大学お笑いサークルIOK"
  },
  {
    "year": 2024,
    "type": "individual",
    "event": "大学芸会 個人戦2024",
    "winner": "ストロングブルジュニア",
    "school": "早稲田大学お笑い工房LUDO",
    "runnerUp": "ギュインギュイン",
    "runnerSchool": "早稲田大学お笑い工房LUDO",
    "third": "マボロシ",
    "thirdSchool": "専修大学落語研究会お笑い企画STRIPGUNCLUB",
    "judge": "漫才集団サンパチペーハー",
    "judgeSchool": "東京大学落語研究会"
  },
  {
    "year": 2024,
    "type": "noroshi",
    "event": "NOROSHI 2024",
    "winner": "チームメリーランド",
    "school": "早稲田大学お笑い工房LUDO",
    "runnerUp": "—",
    "runnerSchool": "公開情報を追加確認中",
    "third": "—",
    "thirdSchool": "公開情報を追加確認中",
    "judge": "—",
    "judgeSchool": "公開情報を追加確認中"
  },
  {
    "year": 2023,
    "type": "individual",
    "event": "大学芸会 個人戦2023",
    "winner": "伝書鳩",
    "school": "大学芸会 個人戦",
    "runnerUp": "—",
    "runnerSchool": "公開情報を追加確認中",
    "third": "—",
    "thirdSchool": "公開情報を追加確認中",
    "judge": "—",
    "judgeSchool": "公開情報を追加確認中"
  },
  {
    "year": 2023,
    "type": "noroshi",
    "event": "NOROSHI 2023",
    "winner": "チーム空島",
    "school": "慶應義塾大学お笑い道場O-keis",
    "runnerUp": "チーム水彩フォーマルハウト",
    "runnerSchool": "一橋大学お笑いサークルIOK",
    "third": "—",
    "thirdSchool": "公開情報を追加確認中",
    "judge": "チーム兄貴感謝",
    "judgeSchool": "法政大学お笑いサークルHOS"
  },
  {
    "year": 2022,
    "type": "individual",
    "event": "大学芸会 個人戦2022",
    "winner": "もぐら大戦争",
    "school": "青山学院大学ナショグルお笑い愛好会",
    "runnerUp": "錦登山下山",
    "runnerSchool": "同志社大学喜劇研究会",
    "third": "クラリネ",
    "thirdSchool": "一橋大学お笑いサークルIOK",
    "judge": "福来る",
    "judgeSchool": "法政大学お笑いサークルHOS"
  },
  {
    "year": 2022,
    "type": "noroshi",
    "event": "NOROSHI 2022",
    "winner": "チームザリガニ＆とうもろこし",
    "school": "法政大学お笑いサークルHOS",
    "runnerUp": "チームケベック",
    "runnerSchool": "早稲田大学お笑い工房LUDO",
    "third": "—",
    "thirdSchool": "—",
    "judge": "チーム台北",
    "judgeSchool": "日本大学文理学部落語研究会"
  },
  {
    "year": 2014,
    "type": "old-team",
    "event": "大学芸会 団体戦2014",
    "winner": "データ整備中",
    "school": "旧・大学芸会団体戦",
    "runnerUp": "—",
    "runnerSchool": "—",
    "third": "—",
    "thirdSchool": "—",
    "judge": "—",
    "judgeSchool": "—"
  },
  {
    "year": 2013,
    "type": "old-team",
    "event": "大学芸会 団体戦2013",
    "winner": "データ整備中",
    "school": "旧・大学芸会団体戦",
    "runnerUp": "—",
    "runnerSchool": "—",
    "third": "—",
    "thirdSchool": "—",
    "judge": "—",
    "judgeSchool": "—"
  }
];

const typeName = t => t==="individual" ? "大学芸会 個人戦" : t==="noroshi" ? "NOROSHI" : "旧・大学芸会 団体戦";
const search = document.querySelector("#search");
const typeFilter = document.querySelector("#typeFilter");
const yearFilter = document.querySelector("#yearFilter");

[...new Set(DATA.map(d=>d.year))].sort((a,b)=>b-a).forEach(y=>{
  const o=document.createElement("option"); o.value=y; o.textContent=`${y}年`; yearFilter.appendChild(o);
});

function card(d, featured=false){
 return `<article class="latest-card ${featured?'featured':''}">
  <span class="badge">${d.year} / ${typeName(d.type)}</span>
  <h3>${d.winner}</h3><p class="school">${d.school}</p>
  <div class="placements">
   <span><b>準優勝</b>${d.runnerUp}</span>
   <span><b>第3位</b>${d.third}</span>
   <span><b>審査員賞</b>${d.judge}</span>
  </div></article>`;
}

const latest = [DATA.find(d=>d.year===2026&&d.type==="noroshi"), DATA.find(d=>d.year===2025&&d.type==="individual"), DATA.find(d=>d.year===2025&&d.type==="noroshi")].filter(Boolean);
document.querySelector("#latestCards").innerHTML = latest.map((d,i)=>card(d,i===0)).join("");

function render(){
 const q=search.value.trim().toLowerCase();
 const t=typeFilter.value, y=yearFilter.value;
 const filtered=DATA.filter(d=>{
   const blob=Object.values(d).join(" ").toLowerCase();
   return (!q||blob.includes(q)) && (t==="all"||d.type===t) && (y==="all"||String(d.year)===y);
 });
 document.querySelector("#resultList").innerHTML=filtered.map(d=>`<article class="result-row">
   <div class="year">${d.year}</div><div class="type">${typeName(d.type)}</div>
   <div class="winner"><b>${d.winner}</b><small>${d.school}</small></div>
   <div class="awards">準優勝：${d.runnerUp}<br>3位：${d.third}<br>審査員賞：${d.judge}</div>
 </article>`).join("");
 document.querySelector("#empty").hidden=filtered.length!==0;
}
[search,typeFilter,yearFilter].forEach(el=>el.addEventListener("input",render)); render();

function timeline(type){
 return DATA.filter(d=>d.type===type && d.winner!=="データ整備中").sort((a,b)=>b.year-a.year).map(d=>`
 <div class="timeline-item"><span class="y">${d.year}</span><span><b>${d.winner}</b><small>${d.school}</small></span></div>`).join("");
}
document.querySelector("#individualChampions").innerHTML=timeline("individual");
document.querySelector("#noroshiChampions").innerHTML=timeline("noroshi");

document.querySelector("#eventCount").textContent=DATA.filter(d=>d.winner!=="データ整備中").length;
document.querySelector("#yearCount").textContent=new Set(DATA.filter(d=>d.winner!=="データ整備中").map(d=>d.year)).size;
const schools=new Set();
DATA.forEach(d=>["school","runnerSchool","thirdSchool","judgeSchool"].forEach(k=>{
 const v=d[k]; if(v && !v.includes("公開情報") && v!=="—" && !v.includes("個人戦") && !v.includes("団体戦")) schools.add(v);
}));
document.querySelector("#schoolCount").textContent=schools.size;
console.log("UniComedy loaded");
