document.addEventListener('DOMContentLoaded', function () {
    const orderedPainData = [...painData].reverse();
    const orderedSymptomData = [...symptomData].reverse();
    const orderedActivityData = [...activityData].reverse();
    const orderedFlareData = [...flareData].reverse();

    const painCtx = document.getElementById('painChart');
    
    if (painCtx) {
        new Chart(painCtx, {
            type: 'line',
            data: {
                labels: orderedPainData.map(log => log.date),
                datasets: [
                    {
                        label: 'Overall Pain',
                        data: orderedPainData.map(log => log.overall),
                        borderColor: '#ab0d02',
                        borderWidth: 6,
                        tension: 0.3
                    },
                    {
                        label: 'Stress',
                        data: orderedPainData.map(log => log.stress),
                        borderColor: '#c7bc75',
                        borderWidth: 6,
                        tension: 0.3
                    },
                    {
                        label: 'Neck',
                        data: orderedPainData.map(log => log.neck),
                        borderColor: '#0502bd',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Upper Back',
                        data: orderedPainData.map(log => log.upperback),
                        borderColor: '#02bd08',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Lower Back',
                        data: orderedPainData.map(log => log.lowerback),
                        borderColor: '#8b5cf6',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Chest',
                        data: orderedPainData.map(log => log.chest),
                        borderColor: '#3d2116',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Hips',
                        data: orderedPainData.map(log => log.hips),
                        borderColor: '#9402bd',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Arms',
                        data: orderedPainData.map(log => log.arms),
                        borderColor: '#7d7b01',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Elbows',
                        data: orderedPainData.map(log => log.elbows),
                        borderColor: '#bd6f02',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Legs',
                        data: orderedPainData.map(log => log.legs),
                        borderColor: '#666666',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Knees',
                        data: orderedPainData.map(log => log.knees),
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
                labels: orderedSymptomData.map(log => log.date),
                datasets: [
                    {
                        label: 'Fatigue',
                        data: orderedSymptomData.map(log => log.fatigue === 0 ? null : log.fatigue),
                        borderColor: '#8b5cf6',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Stiffness',
                        data: orderedSymptomData.map(log => log.stiffness === 0 ? null : log.stiffness),
                        borderColor: '#02bd08',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Poor Sleep Quality',
                        data: orderedSymptomData.map(log => log.sleepquality === 0 ? null : log.sleepquality),
                        borderColor: '#0502bd',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Fibro Fog',
                        data: orderedSymptomData.map(log => log.fibrofog === 0 ? null : log.fibrofog),
                        borderColor: '#3d2116',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Headaches/Migraines',
                        data: orderedSymptomData.map(log => log.headache === 0 ? null : log.headache),
                        borderColor: '#9402bd',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'IBS',
                        data: orderedSymptomData.map(log => log.ibs === 0 ? null : log.ibs),
                        borderColor: '#7d7b01',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Dizziness',
                        data: orderedSymptomData.map(log => log.dizziness === 0 ? null : log.dizziness),
                        borderColor: '#bd6f02',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Bad Body Temperature Regulation',
                        data: orderedSymptomData.map(log => log.bodytemp === 0 ? null : log.bodytemp),
                        borderColor: '#666666',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Touch Sensitivity',
                        data: orderedSymptomData.map(log => log.paraesthesia === 0 ? null : log.paraesthesia),
                        borderColor: '#bd027e',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Pain from Touch',
                        data: orderedSymptomData.map(log => log.allodynia === 0 ? null : log.allodynia),
                        borderColor: '#ad0516',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Light Sensitivity',
                        data: orderedSymptomData.map(log => log.lightsens === 0 ? null : log.lightsens),
                        borderColor: '#918151',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Depression',
                        data: orderedSymptomData.map(log => log.depression === 0 ? null : log.depression),
                        borderColor: '#030538',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Anxiety',
                        data: orderedSymptomData.map(log => log.anxiety === 0 ? null : log.anxiety),
                        borderColor: '#035416',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
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

    const activityCtx = document.getElementById('activityChart');

    if (activityCtx) {
        new Chart(activityCtx, {
            type: 'line',
            data: {
                labels: orderedActivityData.map(log => log.date),
                datasets: [
                    {
                        label: 'Shower',
                        data: orderedActivityData.map(log => log.shower === 0 ? null : log.shower),
                        borderColor: '#8b5cf6',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Cooking',
                        data: orderedActivityData.map(log => log.cooking === 0 ? null : log.cooking),
                        borderColor: '#02bd08',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Laundry',
                        data: orderedActivityData.map(log => log.laundry === 0 ? null : log.laundry),
                        borderColor: '#0502bd',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Vacuuming',
                        data: orderedActivityData.map(log => log.vacuuming === 0 ? null : log.vacuuming),
                        borderColor: '#3d2116',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Cleaning',
                        data: orderedActivityData.map(log => log.cleaning === 0 ? null : log.cleaning),
                        borderColor: '#9402bd',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Groceries',
                        data: orderedActivityData.map(log => log.groceries === 0 ? null : log.groceries),
                        borderColor: '#7d7b01',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Walking',
                        data: orderedActivityData.map(log => log.walking === 0 ? null : log.walking),
                        borderColor: '#bd6f02',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Driving',
                        data: orderedActivityData.map(log => log.driving === 0 ? null : log.driving),
                        borderColor: '#666666',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Exercise',
                        data: orderedActivityData.map(log => log.exercise === 0 ? null : log.exercise),
                        borderColor: '#bd027e',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Studying',
                        data: orderedActivityData.map(log => log.studying === 0 ? null : log.studying),
                        borderColor: '#ad0516',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Socialising',
                        data: orderedActivityData.map(log => log.socialising === 0 ? null : log.socialising),
                        borderColor: '#918151',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
                    },
                    {
                        label: 'Outing',
                        data: orderedActivityData.map(log => log.outing === 0 ? null : log.outing),
                        borderColor: '#030538',
                        hidden: true,
                        borderWidth: 4,
                        tension: 0.3,
                        spanGaps: true
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
                            text: 'Difficulty',
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

    const flareCtx = document.getElementById('flareChart');

    if (flareCtx) {
        new Chart(flareCtx, {
            type: 'line',
            data: {
                labels: orderedFlareData.map(log => log.date),
                datasets: [
                    {
                        label: 'Overall Pain',
                        data: orderedFlareData.map(log => log.overall),
                        borderColor: '#ab0d02',
                        borderWidth: 6,
                        tension: 0.3
                    },
                    {
                        label: 'Neck',
                        data: orderedFlareData.map(log => log.neck),
                        borderColor: '#0502bd',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Back',
                        data: orderedFlareData.map(log => log.back),
                        borderColor: '#02bd08',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Hips',
                        data: orderedFlareData.map(log => log.hips),
                        borderColor: '#9402bd',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Legs',
                        data: orderedFlareData.map(log => log.legs),
                        borderColor: '#666666',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Fatigue',
                        data: orderedFlareData.map(log => log.fatigue),
                        borderColor: '#7d7b01',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Stiffness',
                        data: orderedFlareData.map(log => log.stiffness),
                        borderColor: '#bd6f02',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Fibro Fog',
                        data: orderedFlareData.map(log => log.fibrofog),
                        borderColor: '#bd027e',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Dizziness',
                        data: orderedFlareData.map(log => log.dizziness),
                        borderColor: '#8b5cf6',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Touch Sensivity',
                        data: orderedFlareData.map(log => log.paraesthesia),
                        borderColor: '#3d2116',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Pain from Touch',
                        data: orderedFlareData.map(log => log.allodynia),
                        borderColor: '#035416',
                        borderWidth: 4,
                        hidden: true,
                        tension: 0.3
                    },
                    {
                        label: 'Light Sensitivity',
                        data: orderedFlareData.map(log => log.lightsens),
                        borderColor: '#918151',
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

