async function carbongrafik() {
    const response = await fetch('https://global-warming.org/api/co2-api');
    const result = await response.json();
    const Data = result.co2; // JSON içindeki 'co2' listesi
   
    const labels = Data.map(item => `${item.year}-${item.month}`); // X ekseni: Yıl-Ay
    const dataPoints = Data.map(item => item.cycle); // Y ekseni: Karbon miktarı (ppm)

    const canva = document.getElementById('cocanvas').getContext('2d');
    new Chart(canva, {
        type: 'line', 
        data: {
            labels: labels,
            datasets: [{
                label: 'CO2 ppm',
                data: dataPoints,
                borderColor: '#1A1A2E',
                backgroundColor: 'rgba(244, 241, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
            ticks: {
                color: 'black', 
                font: {
                    size: 12,      
                }
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
    new Chart(canva ,{
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'ısı',
                data: values, 
                borderColor: 'rgba(0,0,0,1)',
                backgroundColor: 'white',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales:{
                x:{
                    ticks:{
                        color: 'black',
                        font: {
                            size: 12,
                        }
                    }
                },
                y:{
                    ticks:{
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