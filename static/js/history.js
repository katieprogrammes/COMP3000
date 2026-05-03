document.addEventListener('DOMContentLoaded', function () {
    const painCtx = document.getElementById('painChart');
    
    if (painCtx) {
        new Chart(painCtx, {
            type: 'line',
            data: {
                labels: painData.map(log => log.date),
                datasets: [
                    {
                        label: 'Overall Pain',
                        data: painData.map(log => log.overall),
                        borderColor: '#ab0d02',
                        borderWidth: 6,
                        tension: 0.3
                    },
                    {
                        label: 'Neck',
                        data: painData.map(log => log.neck),
                        borderColor: '#0502bd',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Upper Back',
                        data: painData.map(log => log.upperback),
                        borderColor: '#02bd08',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Lower Back',
                        data: painData.map(log => log.lowerback),
                        borderColor: '#8b5cf6',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Chest',
                        data: painData.map(log => log.chest),
                        borderColor: '#3d2116',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Hips',
                        data: painData.map(log => log.hips),
                        borderColor: '#9402bd',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Arms',
                        data: painData.map(log => log.arms),
                        borderColor: '#7d7b01',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Elbows',
                        data: painData.map(log => log.elbows),
                        borderColor: '#bd6f02',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Legs',
                        data: painData.map(log => log.legs),
                        borderColor: '#666666',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Knees',
                        data: painData.map(log => log.knees),
                        borderColor: '#bd027e',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 18,
                                weight: 700,
                                family: "Lexend"
                            },
                            color: '#000000',
                            boxWidth: 20,
                            padding: 20,

                            generateLabels: function(chart) {
                                const labels =
                                    Chart.defaults.plugins.legend.labels.generateLabels(chart);

                                labels.forEach(label => {
                                    label.fillStyle = label.strokeStyle;
                                });

                                return labels;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date',
                            color: '#000',
                            font: {
                                size: 20,
                                weight: '700'
                            }
                        },
                        ticks: {
                            color: '#242424',
                            font: {
                                size: 14,
                                weight: 600
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Pain Severity',
                            color: '#000',
                            font: {
                                size: 20,
                                weight: '700'
                            }
                        },
                        ticks: {
                            color: '#242424',
                            font: {
                                size: 14,
                                weight: '600'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.2)'
                        },
                        min: 0,
                        max: 10
                    }
                }
            }
            
        });
    }
    const symptomCtx = document.getElementById('symptomChart');

    if (symptomCtx) {
        new Chart(symptomCtx, {
            type: 'line',
            data: {
                labels: symptomData.map(log => log.date),
                datasets: [
                    {
                        label: 'Fatigue',
                        data: symptomData.map(log => log.fatigue),
                        borderColor: '#f59e0b',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Stiffness',
                        data: symptomData.map(log => log.stiffness),
                        borderColor: '#3b82f6',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Sleep Quality',
                        data: symptomData.map(log => log.sleepquality),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Fibro Fog',
                        data: symptomData.map(log => log.fibrofog),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Headache',
                        data: symptomData.map(log => log.headache),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'IBS',
                        data: symptomData.map(log => log.ibs),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Dizziness',
                        data: symptomData.map(log => log.dizziness),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Body Temp',
                        data: symptomData.map(log => log.bodytemp),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Paraesthesia',
                        data: symptomData.map(log => log.paraesthesia),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Allodynia',
                        data: symptomData.map(log => log.allodynia),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Lightsens',
                        data: symptomData.map(log => log.lightsens),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Depression',
                        data: symptomData.map(log => log.depression),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    },
                    {
                        label: 'Anxiety',
                        data: symptomData.map(log => log.anxiety),
                        borderColor: '#030538',
                        borderWidth: 4,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 18,
                                weight: 700,
                                family: "Lexend"
                            },
                            color: '#000000',
                            boxWidth: 20,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date',
                            color: '#000',
                            font: {
                                size: 20,
                                weight: '700'
                            }
                        },
                        ticks: {
                            color: '#242424',
                            font: {
                                size: 14,
                                weight: 600
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Severity',
                            color: '#000',
                            font: {
                                size: 20,
                                weight: '700'
                            }
                        },
                        ticks: {
                            color: '#242424',
                            font: {
                                size: 14,
                                weight: 600
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.2)'
                        },
                        min: 0,
                        max: 10
                    }
                }
            }
        });
    }

});
