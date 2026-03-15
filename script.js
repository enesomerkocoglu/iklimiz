/*dönüşüm grafik başlangıç*/
async function carbongrafik() {
    const response = await fetch('https://global-warming.org/api/co2-api');
    const result = await response.json();
    const Data = result.co2; 
    
    const labels = Data.map(item => `${item.year}-${item.month}`);
    const dataPoints = Data.map(item => item.cycle); 

    const canva = document.getElementById('cocanvas').getContext('2d');
    new Chart(canva, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: dataPoints,
                borderColor: '#1A1A2E',
                backgroundColor: 'rgba(244, 241, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { display: false } 
            },
            scales: {
                x: {
                    ticks: {
                        color: 'black', 
                        font: {
                            size: 12,   
                        }
                    },
                    grid: {
                        display: false 
                    }
                },
                y: {
                    ticks: {
                        color: 'black',
                        font: {
                            size: 12,
                        }
                    }
                }
            }
        }
    });
}
carbongrafik();
async function ısınmaendeksi() {
    const response = await fetch('https://global-warming.org/api/temperature-api');
    const result = await response.json();
    const data = result.result;

    const labels = data.map(item => item.time);
    const values = data.map(item => parseFloat(item.station));

    const canva = document.getElementById('sıcakcanvas').getContext('2d');
    new Chart(canva, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                borderColor: 'rgba(0,0,0,1)',
                backgroundColor: 'white',
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { display: false } 
            },
            scales: {
                x: {
                    ticks: {
                        color: 'black', 
                        font: {
                            size: 12,   
                        }
                    },
                    grid: {
                        display: false 
                    }
                },
                y: {
                    ticks: {
                        color: 'black',
                        font: {
                            size: 12,
                        }
                    }
                }
            }
        }
    })
}
ısınmaendeksi();
async function denizSeviyesiGrafik() {
    //apı url hatasından dolyı grafiklerden verileri alıp manuel olarak işledim
    const labels = [1993, 1997, 2000, 2004, 2008, 2012, 2016, 2020, 2024 ,2025];
    const dataPoints = [0, 12, 21, 35, 48, 62, 78, 92, 101, 105];

    const canva = document.getElementById('denizcanvas').getContext('2d');
    new Chart(canva, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: dataPoints,
                borderColor: 'rgba(244, 241, 235, 1)', 
                backgroundColor: '#1A1A2E', 
                fill: true, 
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { color: 'black' }, 
                    grid: { display: false }
                },
                y: {
                    ticks: { color: 'black' },
                    grid: { color: 'rgba(0,0,0,0.1)' }
                }
            }
        }
    });
}
denizSeviyesiGrafik();
/*dönüşüm grafik bitiş*/
/*analiz başlangıç*/
const ulkeInputDOM = document.getElementById("ulke-arama");
const ulkeDivDOM = document.getElementById("ulke-listesi");
const ulkelerDOM = document.querySelectorAll(".li");
const seçilenlerDivDOM = document.getElementById("secilen-ulkeler");
const buttons = document.querySelectorAll("button");

let seçilenbutton = "co2_per_capita";
let myChart = null;

const renkler = ["#DAA520", "#0D4C3C", "#1A1A2E"];

// Seçilen ülkeler: her biri {ad: "Türkiye", kod: "TUR"} şeklinde
let seçilenulke = [];

let tumData = null;
fetch("filtered_data.json")
  .then(res => res.json())
  .then(data => {
    tumData = data;
    seçilenulke.push({ad: "Türkiye", kod: "TUR"});
    grafikGuncelle();
    seçilenlerEkleme();
  });
//ulke div açılma
ulkeInputDOM.addEventListener("click", () => {
  ulkeDivDOM.classList.toggle("activelist");
});
//ulke arama filtre
ulkeInputDOM.addEventListener("input", () => {
  const value = ulkeInputDOM.value.toLowerCase();
  ulkeDivDOM.querySelectorAll(".li").forEach(li => {
    if(li.textContent.toLowerCase().startsWith(value)) {
      ulkeDivDOM.prepend(li);
    }
  });
});
// Ülke seçme
ulkelerDOM.forEach(li => {
  li.addEventListener("click", function() {
    const ulkeAdi = this.innerText;
    const ulkeKodu = this.dataset.value;

    if(seçilenulke.find(u => u.ad === ulkeAdi)) return;
    if(seçilenulke.length >= 3) return;

    seçilenulke.push({ad: ulkeAdi, kod: ulkeKodu});
    seçilenlerEkleme();
    grafikGuncelle();
  });
});
// Seçilen ülkele gösterme ve sil
function seçilenlerEkleme() {
  seçilenlerDivDOM.innerHTML = "";
  seçilenulke.forEach((ulke, index) => {
    const div = document.createElement("div");
    div.className = "ulkeler";
    div.style = "display:flex; flex-direction:row; background:#B0B0B0; padding:2px; border-radius:5px; margin:2px 0; align-items:center;";
    const img = document.createElement("img");
    img.src = "gorsel/close.svg";
    img.style = "height:1.4rem; cursor:pointer;";
    img.addEventListener("click", () => {
    if(seçilenulke.length > 1){
      seçilenulke.splice(index , 1);
      seçilenlerEkleme();
      grafikGuncelle();
    }
});
    const p = document.createElement("p");
    p.textContent = ulke.ad;
    p.style = "font-size:1.3rem; color:white; padding:0 2px;";
    div.appendChild(img);
    div.appendChild(p);
    seçilenlerDivDOM.appendChild(div);
  });
}
//metrik değiş
buttons.forEach(button => {
  button.addEventListener("click", function() {
    buttons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    seçilenbutton = this.id;
    grafikGuncelle();
  });
});
// Grafik çizme
function grafikGuncelle() {
  if(!tumData || seçilenulke.length === 0) return;

  const ctx = document.getElementById("iklimAnalizGrafik").getContext("2d");

  const datasets = seçilenulke.map((ulke, index) => {
    const ulkeVerisi = tumData[ulke.kod];
    const yillar = Object.keys(ulkeVerisi);
    const degerler = yillar.map(yil => ulkeVerisi[yil][seçilenbutton]);
    const renk = renkler[index % renkler.length];

    return {
      label: ulke.ad,
      data: degerler,
      borderColor: renk,
      backgroundColor: renk,
      borderWidth: 2,
      tension: 0.3
    };
  });

  const yillar = Object.keys(tumData[seçilenulke[0].kod]);

  if(myChart) myChart.destroy();

  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: yillar,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: "rgba(0,0,0,0.1)" } }
      }
    }
  });
}
