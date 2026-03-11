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
let myChart = null;
/*dönüşüm grafik bitiş*/
/*analiz başlangıç*/
let ulkeVerisi = {};//global
async function grafikGuncelle(metrik, etiket) {

    const response = await fetch('filtered_data.json');
    const data = await response.json();

    const ulkeVerisi = data["TUR"];

    const yillar = Object.keys(ulkeVerisi);
    const degerler = yillar.map(yil => ulkeVerisi[yil][metrik]);

    const ctx = document.getElementById("iklimAnalizGrafik").getContext("2d");

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: yillar,
            datasets: [{
                label: etiket,
                data: degerler,
                backgroundColor: "#DAA520",
                borderColor: "#DAA520",
                borderWidth: 2,
                tension: .3, 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    grid: { color: 'rgba(0,0,0,0.1)' }
                }
            }
        },
        
        
    });
}

const ulkeInputDOM = document.getElementById("ulke-arama");
const ulkeDivDOM = document.getElementById("ulke-listesi");
const ulkelerDOM = document.querySelectorAll(".li");
const seçilenlerDivDOM = document.getElementById("secilen-ulkeler");

// Ulke arama listesi açma/kapatma
ulkeInputDOM.addEventListener("click", () => {
  ulkeDivDOM.classList.toggle("activelist");
});

// Arama ile öne getirme
ulkeInputDOM.addEventListener("input", () => {
  const value = ulkeInputDOM.value.toLowerCase();
  const lis = Array.from(ulkeDivDOM.querySelectorAll(".li"));

  lis.forEach(li => {
    if (li.textContent.toLowerCase().startsWith(value)) {
      ulkeDivDOM.prepend(li); // baş harf eşleşen öne gelir
    }
  });
});

let seçilenulke = [];
let sayac = 1;

// Ülke tıklama işlemleri
for (let i = 0; i < ulkelerDOM.length; i++) {
  ulkelerDOM[i].addEventListener("click", function () {
    const ulke = this.innerText;

    if (seçilenulke.includes(ulke)) return; // zaten seçilmişse
    if (seçilenulke.length >= 3) return; // 3 seçim sınırı
    
    ulkeInputDOM.placeholder = "";

    this.id = sayac;
    sayac++;
    seçilenulke.push(ulke);

    let seçilen = `ID: ${this.id}  İsim: ${ulke}`;
    console.log(seçilen);

    // Tıklama sonrası divleri ekle
    seçilenlerEkleme();
  });
}

// Seçilen ülkeleri div olarak ekleme
function seçilenlerEkleme() {
  let result = ""; // her seferinde sıfırla
  seçilenulke.forEach((item) => {
    result += `
      <div class="ulkeler" style="display: flex; flex-direction: row; background-color: #B0B0B0; padding: 2px; border-radius: 5px; justify-content: center; align-items: center; margin: 2px 0;">
        <img class="closeli" style="height: 1.4rem; width: auto; cursor: pointer;" src="gorsel/close.svg" alt="">
        <p class="ulke" style="font-size: 1.3rem; color: white; padding: 0 2px 2.5px 0; border-radius: 5px; cursor: default;">${item}</p>
      </div>
    `;
  });

  seçilenlerDivDOM.innerHTML = result;

  // Close ikonlarına tıklama ile silme özelliği ekleme
  const closeler = seçilenlerDivDOM.querySelectorAll(".closeli");
  closeler.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Seçilen ülkeden çıkar
      if (seçilenulke.length === 1) return;

      seçilenulke.splice(index, 1);
      // Divleri tekrar oluştur
      seçilenlerEkleme();
    });
  });
}
const buttons = document.querySelectorAll("button");
let seçilenbutton = "co2_per_capita";
 
buttons.forEach(button => {
  button.addEventListener("click", function() {

    // Önce hepsinden class kaldır
    buttons.forEach(btn => btn.classList.remove("active"));

    // Tıklanan butona ekle
    button.classList.add("active");

    
    seçilenbutton = button.id
    console.log(seçilenbutton);
      // seçilen buton id'sini güncelle
    seçilenbutton = this.id;
    console.log("Seçilen metrik:", seçilenbutton);

    // tıklayınca grafiği güncelle
    grafikGuncelle(seçilenbutton, "Türkiye");
  });
});
window.onload = () => grafikGuncelle(seçilenbutton, "Türkiye");
console.log(grafikGuncelle(seçilenbutton, "Türkiye"));

/*analiz bitiş*/