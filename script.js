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
