const datum = new Date();

datum.setDate(1);

const kalender = () => {
  const dagenMaand = document.querySelector('.dag');
const aantalDagen = new Date(datum.getFullYear(),datum.getMonth() + 1,0).getDate();
const eersteDag = datum.getDay()
const vorigemaandlastday = new Date(datum.getFullYear(),datum.getMonth() ,0).getDate();
const WelkedagLaatstedag = new Date(datum.getFullYear(),datum.getMonth() + 1, 0).getDay();
const volgendedagen = 7 - WelkedagLaatstedag - 1;

const maanden = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];

document.querySelector('.date h1').innerHTML = maanden[datum.getMonth()]

document.querySelector('.date p').innerHTML = new Date().toDateString();

let days = ""

for(let x = eersteDag; x > 0; x--){
  days += `<div class="vorigeDate">${vorigemaandlastday - x + 1}</div>`;
}

for(let i = 1; i <= aantalDagen; i++){
  if(i === new Date().getDate() && datum.getMonth() === new Date().getMonth()){
    days += `<div class="vdg">${i}</div>`;
  }else{
    days += `<div>${i}</div>`;
  }
}

for (let j = 1; j <= volgendedagen; j++){
  days += `<div class="volgendeDate">${j}</div>`;
  
}
dagenMaand.innerHTML = days;
}



document.querySelector(".prev").addEventListener("click", () => {
  datum.setMonth(datum.getMonth() - 1);
  kalender()
});

document.querySelector(".next").addEventListener("click", () => {
  datum.setMonth(datum.getMonth() + 1);
  kalender()
});

kalender()