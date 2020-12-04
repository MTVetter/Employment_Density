import PopupTemplate = require("esri/PopupTemplate");
import TextContent = require("esri/popup/content/TextContent");
import MediaContent = require("esri/popup/content/MediaContent");
import CustomContent = require("esri/popup/content/CustomContent");

import FeatureLayer = require("esri/layers/FeatureLayer");

declare var Chart: any;

interface PopupTemplateUpdateParams {
    layer: FeatureLayer,
    rendererType: "total" | "sector 1" | "sector 2" | "sector 3" | "sector 4" | "sector 5" |
    "sector 6" | "sector 7" | "sector 8" | "sector 9" | "sector 10" | "sector 11" |
    "sector 12" | "sector 13" | "sector 14" | "sector 15" | "sector 16" | "sector 17" |
    "sector 18" | "sector 19" | "sector 20"
}

export function updatePopupTemplate(params: PopupTemplateUpdateParams){
    const { layer, rendererType } = params;
    let popupTemplate: PopupTemplate;

    switch (rendererType){
        case "total":
            popupTemplate = createTotalPopupTemplate();
            break;
        case "sector 1":
            popupTemplate = createSector1PopupTemplate();
            break;
        case "sector 2":
            popupTemplate = createSector2PopupTemplate();
            break;
        case "sector 3":
            popupTemplate = createSector3PopupTemplate();
            break;
        case "sector 4":
            popupTemplate = createSector4PopupTemplate();
            break;
        case "sector 5":
            popupTemplate = createSector5PopupTemplate();
            break;
        case "sector 6":
            popupTemplate = createSector6PopupTemplate();
            break;
        case "sector 7":
            popupTemplate = createSector7PopupTemplate();
            break;
        case "sector 8":
            popupTemplate = createSector8PopupTemplate();
            break;
        case "sector 9":
            popupTemplate = createSector9PopupTemplate();
            break;
        case "sector 10":
            popupTemplate = createSector10PopupTemplate();
            break;
        case "sector 11":
            popupTemplate = createSector11PopupTemplate();
            break;
        case "sector 12":
            popupTemplate = createSector12PopupTemplate();
            break;
        case "sector 13":
            popupTemplate = createSector13PopupTemplate();
            break;
        case "sector 14":
            popupTemplate = createSector14PopupTemplate();
            break;
        case "sector 15":
            popupTemplate = createSector15PopupTemplate();
            break;
        case "sector 16":
            popupTemplate = createSector16PopupTemplate();
            break;
        case "sector 17":
            popupTemplate = createSector17PopupTemplate();
            break;
        case "sector 18":
            popupTemplate = createSector18PopupTemplate();
            break;
        case "sector 19":
            popupTemplate = createSector19PopupTemplate();
            break;
        case "sector 20":
            popupTemplate = createSector20PopupTemplate();
            break;
    }

    layer.popupTemplate = popupTemplate;
}

function createTotalPopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let total2009 = event.graphic.attributes.total_2009 === null ? 0 : event.graphic.attributes.total_2009;
            let total2010 = event.graphic.attributes.total_2010 === null ? 0 : event.graphic.attributes.total_2010;
            let total2011 = event.graphic.attributes.total_2011 === null ? 0 : event.graphic.attributes.total_2011;
            let total2012 = event.graphic.attributes.total_2012 === null ? 0 : event.graphic.attributes.total_2012;
            let total2013 = event.graphic.attributes.total_2013 === null ? 0 : event.graphic.attributes.total_2013;
            let total2014 = event.graphic.attributes.total_2014 === null ? 0 : event.graphic.attributes.total_2014;
            let total2015 = event.graphic.attributes.total_2015 === null ? 0 : event.graphic.attributes.total_2015;
            let total2016 = event.graphic.attributes.total_2016 === null ? 0 : event.graphic.attributes.total_2016;
            let total2017 = event.graphic.attributes.total_2017 === null ? 0 : event.graphic.attributes.total_2017;

            var data = {
                datasets: [
                    {
                        data: [total2009, total2010, total2011, total2012, total2013, total2014, total2015, total2016, total2017],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Total Employment"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    })
    return new PopupTemplate({
        title: "Total Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/total}</b> total jobs."
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/total",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['total_2017']), 0, $feature['total_2017'])",
                name: "total",
                title: "Total Jobs"
            }
        ]
    });
}

function createSector1PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let sector2009 = event.graphic.attributes.naics_s01_2009 === null ? 0 : event.graphic.attributes.naics_s01_2009;
            let sector2010 = event.graphic.attributes.naics_s01_2010 === null ? 0 : event.graphic.attributes.naics_s01_2010;
            let sector2011 = event.graphic.attributes.naics_s01_2011 === null ? 0 : event.graphic.attributes.naics_s01_2011;
            let sector2012 = event.graphic.attributes.naics_s01_2012 === null ? 0 : event.graphic.attributes.naics_s01_2012;
            let sector2013 = event.graphic.attributes.naics_s01_2013 === null ? 0 : event.graphic.attributes.naics_s01_2013;
            let sector2014 = event.graphic.attributes.naics_s01_2014 === null ? 0 : event.graphic.attributes.naics_s01_2014;
            let sector2015 = event.graphic.attributes.naics_s01_2015 === null ? 0 : event.graphic.attributes.naics_s01_2015;
            let sector2016 = event.graphic.attributes.naics_s01_2016 === null ? 0 : event.graphic.attributes.naics_s01_2016;
            let sector2017 = event.graphic.attributes.naics_s01_2017 === null ? 0 : event.graphic.attributes.naics_s01_2017;

            var data = {
                datasets: [
                    {
                        data: [sector2009, sector2010, sector2011, sector2012, sector2013, sector2014, sector2015, sector2016, sector2017],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Agriculture, Forestry, Fishing and Hunting jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Agriculture, Forestry, Fishing and Hunting Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector1}</b> Agriculture, Forestry, Fishing and Hunting jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector1",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s01_2017']), 0, $feature['naics_s01_2017'])",
                name: "sector1",
                title: "Sector 1 Jobs"
            }
        ]
    });
}

function createSector2PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let oil2009 = event.graphic.attributes.naics_s02_2009 === null ? 0 : event.graphic.attributes.naics_s02_2009;
            let oil2010 = event.graphic.attributes.naics_s02_2010 === null ? 0 : event.graphic.attributes.naics_s02_2010;
            let oil2011 = event.graphic.attributes.naics_s02_2011 === null ? 0 : event.graphic.attributes.naics_s02_2011;
            let oil2012 = event.graphic.attributes.naics_s02_2012 === null ? 0 : event.graphic.attributes.naics_s02_2012;
            let oil2013 = event.graphic.attributes.naics_s02_2013 === null ? 0 : event.graphic.attributes.naics_s02_2013;
            let oil2014 = event.graphic.attributes.naics_s02_2014 === null ? 0 : event.graphic.attributes.naics_s02_2014;
            let oil2015 = event.graphic.attributes.naics_s02_2015 === null ? 0 : event.graphic.attributes.naics_s02_2015;
            let oil2016 = event.graphic.attributes.naics_s02_2016 === null ? 0 : event.graphic.attributes.naics_s02_2016;
            let oil2017 = event.graphic.attributes.naics_s02_2017 === null ? 0 : event.graphic.attributes.naics_s02_2017;

            var data = {
                datasets: [
                    {
                        data: [oil2009, oil2010, oil2011, oil2012, oil2013, oil2014, oil2015, oil2016, oil2017],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Mining, Quarrying, and Oil and Gas Extraction jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    })
    return new PopupTemplate({
        title: "Mining, Quarrying, and Oil and Gas Extraction Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector2}</b> Mining, Quarrying, and Oil and Gas Extraction jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector2",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s02_2017']), 0, $feature['naics_s02_2017'])",
                name: "sector2",
                title: "Mining, Quarrying, and Oil and Gas Extraction Jobs"
            }
        ]
    });
}

function createSector3PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let utilities2009 = event.graphic.attributes.naics_s03_2009 === null ? 0 : event.graphic.attributes.naics_s03_2009;
            let utilities2010 = event.graphic.attributes.naics_s03_2010 === null ? 0 : event.graphic.attributes.naics_s03_2010;
            let utilities2011 = event.graphic.attributes.naics_s03_2011 === null ? 0 : event.graphic.attributes.naics_s03_2011;
            let utilities2012 = event.graphic.attributes.naics_s03_2012 === null ? 0 : event.graphic.attributes.naics_s03_2012;
            let utilities2013 = event.graphic.attributes.naics_s03_2013 === null ? 0 : event.graphic.attributes.naics_s03_2013;
            let utilities2014 = event.graphic.attributes.naics_s03_2014 === null ? 0 : event.graphic.attributes.naics_s03_2014;
            let utilities2015 = event.graphic.attributes.naics_s03_2015 === null ? 0 : event.graphic.attributes.naics_s03_2015;
            let utilities2016 = event.graphic.attributes.naics_s03_2016 === null ? 0 : event.graphic.attributes.naics_s03_2016;
            let utilities2017 = event.graphic.attributes.naics_s03_2017 === null ? 0 : event.graphic.attributes.naics_s03_2017;

            var data = {
                datasets: [
                    {
                        data: [utilities2009, utilities2010, utilities2011, utilities2012, utilities2013, utilities2014, utilities2015, utilities2016, utilities2017],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73447",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Utilities jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Utilities Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector3}</b> Utilities jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector3",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s03_2017']), 0, $feature['naics_s03_2017'])",
                name: "sector3",
                title: "Utilities Jobs"
            }
        ]
    });
}

function createSector4PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let construction2009 = event.graphic.attributes.naics_s04_2009 === null ? 0 : event.graphic.attributes.naics_s04_2009;
            let construction2010 = event.graphic.attributes.naics_s04_2010 === null ? 0 : event.graphic.attributes.naics_s04_2010;
            let construction2011 = event.graphic.attributes.naics_s04_2011 === null ? 0 : event.graphic.attributes.naics_s04_2011;
            let construction2012 = event.graphic.attributes.naics_s04_2012 === null ? 0 : event.graphic.attributes.naics_s04_2012;
            let construction2013 = event.graphic.attributes.naics_s04_2013 === null ? 0 : event.graphic.attributes.naics_s04_2013;
            let construction2014 = event.graphic.attributes.naics_s04_2014 === null ? 0 : event.graphic.attributes.naics_s04_2014;
            let construction2015 = event.graphic.attributes.naics_s04_2015 === null ? 0 : event.graphic.attributes.naics_s04_2015;
            let construction2016 = event.graphic.attributes.naics_s04_2016 === null ? 0 : event.graphic.attributes.naics_s04_2016;
            let construction2017 = event.graphic.attributes.naics_s04_2017 === null ? 0 : event.graphic.attributes.naics_s04_2017;

            var data = {
                datasets: [
                    {
                        data: [construction2009, construction2010, construction2011, construction2012, construction2013, construction2014, construction2015, construction2016, construction2017],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Construction jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    })
    return new PopupTemplate({
        title: "Construction Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector4}</b> Construction jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector4",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s04_2017']), 0, $feature['naics_s04_2017'])",
                name: "sector4",
                title: "Construction Jobs"
            }
        ]
    });
}

function createSector5PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let manufacturing2009 = event.graphic.attributes.naics_s05_2009 === null ? 0 : event.graphic.attributes.naics_s05_2009;
            let manufacturing2010 = event.graphic.attributes.naics_s05_2010 === null ? 0 : event.graphic.attributes.naics_s05_2010;
            let manufacturing2011 = event.graphic.attributes.naics_s05_2011 === null ? 0 : event.graphic.attributes.naics_s05_2011;
            let manufacturing2012 = event.graphic.attributes.naics_s05_2012 === null ? 0 : event.graphic.attributes.naics_s05_2012;
            let manufacturing2013 = event.graphic.attributes.naics_s05_2013 === null ? 0 : event.graphic.attributes.naics_s05_2013;
            let manufacturing2014 = event.graphic.attributes.naics_s05_2014 === null ? 0 : event.graphic.attributes.naics_s05_2014;
            let manufacturing2015 = event.graphic.attributes.naics_s05_2015 === null ? 0 : event.graphic.attributes.naics_s05_2015;
            let manufacturing2016 = event.graphic.attributes.naics_s05_2016 === null ? 0 : event.graphic.attributes.naics_s05_2016;
            let manufacturing2017 = event.graphic.attributes.naics_s05_2017 === null ? 0 : event.graphic.attributes.naics_s05_2017;

            var data = {
                datasets: [
                    {
                        data: [manufacturing2009, manufacturing2010, manufacturing2011, manufacturing2012, manufacturing2013, manufacturing2014, manufacturing2015, manufacturing2016, manufacturing2017],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Manufacturing jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Manufacturing Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector5}</b> Manufacturing jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector5",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s05_2017']), 0, $feature['naics_s05_2017'])",
                name: "sector5",
                title: "Manufacturing Jobs"
            }
        ]
    });
}

function createSector6PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let wholesale2009 = event.graphic.attributes.naics_s06_2009 === null ? 0 : event.graphic.attributes.naics_s06_2009;
            let wholesale2010 = event.graphic.attributes.naics_s06_2010 === null ? 0 : event.graphic.attributes.naics_s06_2010;
            let wholesale2011 = event.graphic.attributes.naics_s06_2011 === null ? 0 : event.graphic.attributes.naics_s06_2011;
            let wholesale2012 = event.graphic.attributes.naics_s06_2012 === null ? 0 : event.graphic.attributes.naics_s06_2012;
            let wholesale2013 = event.graphic.attributes.naics_s06_2013 === null ? 0 : event.graphic.attributes.naics_s06_2013;
            let wholesale2014 = event.graphic.attributes.naics_s06_2014 === null ? 0 : event.graphic.attributes.naics_s06_2014;
            let wholesale2015 = event.graphic.attributes.naics_s06_2015 === null ? 0 : event.graphic.attributes.naics_s06_2015;
            let wholesale2016 = event.graphic.attributes.naics_s06_2016 === null ? 0 : event.graphic.attributes.naics_s06_2016;
            let wholesale2017 = event.graphic.attributes.naics_s06_2017 === null ? 0 : event.graphic.attributes.naics_s06_2017;

            var data = {
                datasets: [
                    {
                        data: [wholesale2009, wholesale2010, wholesale2011, wholesale2012, wholesale2013, wholesale2014, wholesale2015, wholesale2016, wholesale2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Wholesale Trade jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Wholesale Trade Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector6}</b> Wholesale Trade jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector6",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s06_2017']), 0, $feature['naics_s06_2017'])",
                name: "sector6",
                title: "Wholesale Trade Jobs"
            }
        ]
    });
}

function createSector7PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let retail2009 = event.graphic.attributes.naics_s07_2009 === null ? 0 : event.graphic.attributes.naics_s07_2009;
            let retail2010 = event.graphic.attributes.naics_s07_2010 === null ? 0 : event.graphic.attributes.naics_s07_2010;
            let retail2011 = event.graphic.attributes.naics_s07_2011 === null ? 0 : event.graphic.attributes.naics_s07_2011;
            let retail2012 = event.graphic.attributes.naics_s07_2012 === null ? 0 : event.graphic.attributes.naics_s07_2012;
            let retail2013 = event.graphic.attributes.naics_s07_2013 === null ? 0 : event.graphic.attributes.naics_s07_2013;
            let retail2014 = event.graphic.attributes.naics_s07_2014 === null ? 0 : event.graphic.attributes.naics_s07_2014;
            let retail2015 = event.graphic.attributes.naics_s07_2015 === null ? 0 : event.graphic.attributes.naics_s07_2015;
            let retail2016 = event.graphic.attributes.naics_s07_2016 === null ? 0 : event.graphic.attributes.naics_s07_2016;
            let retail2017 = event.graphic.attributes.naics_s07_2017 === null ? 0 : event.graphic.attributes.naics_s07_2017;

            var data = {
                datasets: [
                    {
                        data: [retail2009, retail2010, retail2011, retail2012, retail2013, retail2014, retail2015, retail2016, retail2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Retail Trade jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Retail Trade Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector7}</b> Retail Trade jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector7",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s07_2017']), 0, $feature['naics_s07_2017'])",
                name: "sector7",
                title: "Retail Trade Jobs"
            }
        ]
    });
}

function createSector8PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let trans2009 = event.graphic.attributes.naics_s08_2009 === null ? 0 : event.graphic.attributes.naics_s08_2009;
            let trans2010 = event.graphic.attributes.naics_s08_2010 === null ? 0 : event.graphic.attributes.naics_s08_2010;
            let trans2011 = event.graphic.attributes.naics_s08_2011 === null ? 0 : event.graphic.attributes.naics_s08_2011;
            let trans2012 = event.graphic.attributes.naics_s08_2012 === null ? 0 : event.graphic.attributes.naics_s08_2012;
            let trans2013 = event.graphic.attributes.naics_s08_2013 === null ? 0 : event.graphic.attributes.naics_s08_2013;
            let trans2014 = event.graphic.attributes.naics_s08_2014 === null ? 0 : event.graphic.attributes.naics_s08_2014;
            let trans2015 = event.graphic.attributes.naics_s08_2015 === null ? 0 : event.graphic.attributes.naics_s08_2015;
            let trans2016 = event.graphic.attributes.naics_s08_2016 === null ? 0 : event.graphic.attributes.naics_s08_2016;
            let trans2017 = event.graphic.attributes.naics_s08_2017 === null ? 0 : event.graphic.attributes.naics_s08_2017;

            var data = {
                datasets: [
                    {
                        data: [trans2009, trans2010, trans2011, trans2012, trans2013, trans2014, trans2015, trans2016, trans2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Transportation and Warehousing jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Transportation and Warehousing Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector8}</b> Transportation and Warehousing jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector8",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s08_2017']), 0, $feature['naics_s08_2017'])",
                name: "sector8",
                title: "Transportation and Warehousing Jobs"
            }
        ]
    });
}

function createSector9PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let info2009 = event.graphic.attributes.naics_s09_2009 === null ? 0 : event.graphic.attributes.naics_s09_2009;
            let info2010 = event.graphic.attributes.naics_s09_2010 === null ? 0 : event.graphic.attributes.naics_s09_2010;
            let info2011 = event.graphic.attributes.naics_s09_2011 === null ? 0 : event.graphic.attributes.naics_s09_2011;
            let info2012 = event.graphic.attributes.naics_s09_2012 === null ? 0 : event.graphic.attributes.naics_s09_2012;
            let info2013 = event.graphic.attributes.naics_s09_2013 === null ? 0 : event.graphic.attributes.naics_s09_2013;
            let info2014 = event.graphic.attributes.naics_s09_2014 === null ? 0 : event.graphic.attributes.naics_s09_2014;
            let info2015 = event.graphic.attributes.naics_s09_2015 === null ? 0 : event.graphic.attributes.naics_s09_2015;
            let info2016 = event.graphic.attributes.naics_s09_2016 === null ? 0 : event.graphic.attributes.naics_s09_2016;
            let info2017 = event.graphic.attributes.naics_s09_2017 === null ? 0 : event.graphic.attributes.naics_s09_2017;

            var data = {
                datasets: [
                    {
                        data: [info2009, info2010, info2011, info2012, info2013, info2014, info2015, info2016, info2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Information jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Information Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector9}</b> Information jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector9",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s09_2017']), 0, $feature['naics_s09_2017'])",
                name: "sector9",
                title: "Information Jobs"
            }
        ]
    });
}

function createSector10PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let finance2009 = event.graphic.attributes.naics_s10_2009 === null ? 0 : event.graphic.attributes.naics_s10_2009;
            let finance2010 = event.graphic.attributes.naics_s10_2010 === null ? 0 : event.graphic.attributes.naics_s10_2010;
            let finance2011 = event.graphic.attributes.naics_s10_2011 === null ? 0 : event.graphic.attributes.naics_s10_2011;
            let finance2012 = event.graphic.attributes.naics_s10_2012 === null ? 0 : event.graphic.attributes.naics_s10_2012;
            let finance2013 = event.graphic.attributes.naics_s10_2013 === null ? 0 : event.graphic.attributes.naics_s10_2013;
            let finance2014 = event.graphic.attributes.naics_s10_2014 === null ? 0 : event.graphic.attributes.naics_s10_2014;
            let finance2015 = event.graphic.attributes.naics_s10_2015 === null ? 0 : event.graphic.attributes.naics_s10_2015;
            let finance2016 = event.graphic.attributes.naics_s10_2016 === null ? 0 : event.graphic.attributes.naics_s10_2016;
            let finance2017 = event.graphic.attributes.naics_s10_2017 === null ? 0 : event.graphic.attributes.naics_s10_2017;

            var data = {
                datasets: [
                    {
                        data: [finance2009, finance2010, finance2011, finance2012, finance2013, finance2014, finance2015, finance2016, finance2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Finance and Insurance jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Finance and Insurance Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector10}</b> Finance and Insurance jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector10",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s10_2017']), 0, $feature['naics_s10_2017'])",
                name: "sector10",
                title: "Finance and Insurance Jobs"
            }
        ]
    });
}

function createSector11PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let rental2009 = event.graphic.attributes.naics_s11_2009 === null ? 0 : event.graphic.attributes.naics_s11_2009;
            let rental2010 = event.graphic.attributes.naics_s11_2010 === null ? 0 : event.graphic.attributes.naics_s11_2010;
            let rental2011 = event.graphic.attributes.naics_s11_2011 === null ? 0 : event.graphic.attributes.naics_s11_2011;
            let rental2012 = event.graphic.attributes.naics_s11_2012 === null ? 0 : event.graphic.attributes.naics_s11_2012;
            let rental2013 = event.graphic.attributes.naics_s11_2013 === null ? 0 : event.graphic.attributes.naics_s11_2013;
            let rental2014 = event.graphic.attributes.naics_s11_2014 === null ? 0 : event.graphic.attributes.naics_s11_2014;
            let rental2015 = event.graphic.attributes.naics_s11_2015 === null ? 0 : event.graphic.attributes.naics_s11_2015;
            let rental2016 = event.graphic.attributes.naics_s11_2016 === null ? 0 : event.graphic.attributes.naics_s11_2016;
            let rental2017 = event.graphic.attributes.naics_s11_2017 === null ? 0 : event.graphic.attributes.naics_s11_2017;

            var data = {
                datasets: [
                    {
                        data: [rental2009, rental2010, rental2011, rental2012, rental2013, rental2014, rental2015, rental2016, rental2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Real Estate and Rental and Leasing jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Real Estate and Rental and Leasing Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector11}</b> Real Estate and Rental and Leasing jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector11",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s11_2017']), 0, $feature['naics_s11_2017'])",
                name: "sector11",
                title: "Real Estate and Rental and Leasing Jobs"
            }
        ]
    });
}

function createSector12PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let pro2009 = event.graphic.attributes.naics_s12_2009 === null ? 0 : event.graphic.attributes.naics_s12_2009;
            let pro2010 = event.graphic.attributes.naics_s12_2010 === null ? 0 : event.graphic.attributes.naics_s12_2010;
            let pro2011 = event.graphic.attributes.naics_s12_2011 === null ? 0 : event.graphic.attributes.naics_s12_2011;
            let pro2012 = event.graphic.attributes.naics_s12_2012 === null ? 0 : event.graphic.attributes.naics_s12_2012;
            let pro2013 = event.graphic.attributes.naics_s12_2013 === null ? 0 : event.graphic.attributes.naics_s12_2013;
            let pro2014 = event.graphic.attributes.naics_s12_2014 === null ? 0 : event.graphic.attributes.naics_s12_2014;
            let pro2015 = event.graphic.attributes.naics_s12_2015 === null ? 0 : event.graphic.attributes.naics_s12_2015;
            let pro2016 = event.graphic.attributes.naics_s12_2016 === null ? 0 : event.graphic.attributes.naics_s12_2016;
            let pro2017 = event.graphic.attributes.naics_s12_2017 === null ? 0 : event.graphic.attributes.naics_s12_2017;

            var data = {
                datasets: [
                    {
                        data: [pro2009, pro2010, pro2011, pro2012, pro2013, pro2014, pro2015, pro2016, pro2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Professional, Scientific, and Technical Services jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Professional, Scientific, and Technical Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector12}</b> Professional, Scientific, and Technical Services jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector12",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s12_2017']), 0, $feature['naics_s12_2017'])",
                name: "sector12",
                title: "Professional, Scientific, and Technical Services Jobs"
            }
        ]
    });
}

function createSector13PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let manage2009 = event.graphic.attributes.naics_s13_2009 === null ? 0 : event.graphic.attributes.naics_s13_2009;
            let manage2010 = event.graphic.attributes.naics_s13_2010 === null ? 0 : event.graphic.attributes.naics_s13_2010;
            let manage2011 = event.graphic.attributes.naics_s13_2011 === null ? 0 : event.graphic.attributes.naics_s13_2011;
            let manage2012 = event.graphic.attributes.naics_s13_2012 === null ? 0 : event.graphic.attributes.naics_s13_2012;
            let manage2013 = event.graphic.attributes.naics_s13_2013 === null ? 0 : event.graphic.attributes.naics_s13_2013;
            let manage2014 = event.graphic.attributes.naics_s13_2014 === null ? 0 : event.graphic.attributes.naics_s13_2014;
            let manage2015 = event.graphic.attributes.naics_s13_2015 === null ? 0 : event.graphic.attributes.naics_s13_2015;
            let manage2016 = event.graphic.attributes.naics_s13_2016 === null ? 0 : event.graphic.attributes.naics_s13_2016;
            let manage2017 = event.graphic.attributes.naics_s13_2017 === null ? 0 : event.graphic.attributes.naics_s13_2017;

            var data = {
                datasets: [
                    {
                        data: [manage2009, manage2010, manage2011, manage2012, manage2013, manage2014, manage2015, manage2016, manage2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Management of Companies and Enterprises jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Management of Companies and Enterprises Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector13}</b> Management of Companies and Enterprises jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector13",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s13_2017']), 0, $feature['naics_s13_2017'])",
                name: "sector13",
                title: "Management of Companies and Enterprises Jobs"
            }
        ]
    });
}

function createSector14PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let waste2009 = event.graphic.attributes.naics_s14_2009 === null ? 0 : event.graphic.attributes.naics_s14_2009;
            let waste2010 = event.graphic.attributes.naics_s14_2010 === null ? 0 : event.graphic.attributes.naics_s14_2010;
            let waste2011 = event.graphic.attributes.naics_s14_2011 === null ? 0 : event.graphic.attributes.naics_s14_2011;
            let waste2012 = event.graphic.attributes.naics_s14_2012 === null ? 0 : event.graphic.attributes.naics_s14_2012;
            let waste2013 = event.graphic.attributes.naics_s14_2013 === null ? 0 : event.graphic.attributes.naics_s14_2013;
            let waste2014 = event.graphic.attributes.naics_s14_2014 === null ? 0 : event.graphic.attributes.naics_s14_2014;
            let waste2015 = event.graphic.attributes.naics_s14_2015 === null ? 0 : event.graphic.attributes.naics_s14_2015;
            let waste2016 = event.graphic.attributes.naics_s14_2016 === null ? 0 : event.graphic.attributes.naics_s14_2016;
            let waste2017 = event.graphic.attributes.naics_s14_2017 === null ? 0 : event.graphic.attributes.naics_s14_2017;

            var data = {
                datasets: [
                    {
                        data: [waste2009, waste2010, waste2011, waste2012, waste2013, waste2014, waste2015, waste2016, waste2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Administration & Support, Waste Management and Remediation jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Administration & Support, Waste Management and Remediation Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector14}</b> Administration & Support, Waste Management and Remediation jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector14",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s14_2017']), 0, $feature['naics_s14_2017'])",
                name: "sector14",
                title: "Administration & Support, Waste Management and Remediation Jobs"
            }
        ]
    });
}

function createSector15PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let education2009 = event.graphic.attributes.naics_s15_2009 === null ? 0 : event.graphic.attributes.naics_s15_2009;
            let education2010 = event.graphic.attributes.naics_s15_2010 === null ? 0 : event.graphic.attributes.naics_s15_2010;
            let education2011 = event.graphic.attributes.naics_s15_2011 === null ? 0 : event.graphic.attributes.naics_s15_2011;
            let education2012 = event.graphic.attributes.naics_s15_2012 === null ? 0 : event.graphic.attributes.naics_s15_2012;
            let education2013 = event.graphic.attributes.naics_s15_2013 === null ? 0 : event.graphic.attributes.naics_s15_2013;
            let education2014 = event.graphic.attributes.naics_s15_2014 === null ? 0 : event.graphic.attributes.naics_s15_2014;
            let education2015 = event.graphic.attributes.naics_s15_2015 === null ? 0 : event.graphic.attributes.naics_s15_2015;
            let education2016 = event.graphic.attributes.naics_s15_2016 === null ? 0 : event.graphic.attributes.naics_s15_2016;
            let education2017 = event.graphic.attributes.naics_s15_2017 === null ? 0 : event.graphic.attributes.naics_s15_2017;

            var data = {
                datasets: [
                    {
                        data: [education2009, education2010, education2011, education2012, education2013, education2014, education2015, education2016, education2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Educational Services jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Educational Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector15}</b> Educational Services jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector15",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s15_2017']), 0, $feature['naics_s15_2017'])",
                name: "sector15",
                title: "Educational Services Jobs"
            }
        ]
    });
}

function createSector16PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let health2009 = event.graphic.attributes.naics_s15_2009 === null ? 0 : event.graphic.attributes.naics_s15_2009;
            let health2010 = event.graphic.attributes.naics_s15_2010 === null ? 0 : event.graphic.attributes.naics_s15_2010;
            let health2011 = event.graphic.attributes.naics_s15_2011 === null ? 0 : event.graphic.attributes.naics_s15_2011;
            let health2012 = event.graphic.attributes.naics_s15_2012 === null ? 0 : event.graphic.attributes.naics_s15_2012;
            let health2013 = event.graphic.attributes.naics_s15_2013 === null ? 0 : event.graphic.attributes.naics_s15_2013;
            let health2014 = event.graphic.attributes.naics_s15_2014 === null ? 0 : event.graphic.attributes.naics_s15_2014;
            let health2015 = event.graphic.attributes.naics_s15_2015 === null ? 0 : event.graphic.attributes.naics_s15_2015;
            let health2016 = event.graphic.attributes.naics_s15_2016 === null ? 0 : event.graphic.attributes.naics_s15_2016;
            let health2017 = event.graphic.attributes.naics_s15_2017 === null ? 0 : event.graphic.attributes.naics_s15_2017;

            var data = {
                datasets: [
                    {
                        data: [health2009,  health2010, health2011, health2012, health2013, health2014, health2015, health2016, health2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Health Care and Social Assistance jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Health Care and Social Assistance Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector16}</b> Health Care and Social Assistance jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector16",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s16_2017']), 0, $feature['naics_s16_2017'])",
                name: "sector16",
                title: "Health Care and Social Assistance Jobs"
            }
        ]
    });
}

function createSector17PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let art2009 = event.graphic.attributes.naics_s17_2009 === null ? 0 : event.graphic.attributes.naics_s17_2009;
            let art2010 = event.graphic.attributes.naics_s17_2010 === null ? 0 : event.graphic.attributes.naics_s17_2010;
            let art2011 = event.graphic.attributes.naics_s17_2011 === null ? 0 : event.graphic.attributes.naics_s17_2011;
            let art2012 = event.graphic.attributes.naics_s17_2012 === null ? 0 : event.graphic.attributes.naics_s17_2012;
            let art2013 = event.graphic.attributes.naics_s17_2013 === null ? 0 : event.graphic.attributes.naics_s17_2013;
            let art2014 = event.graphic.attributes.naics_s17_2014 === null ? 0 : event.graphic.attributes.naics_s17_2014;
            let art2015 = event.graphic.attributes.naics_s17_2015 === null ? 0 : event.graphic.attributes.naics_s17_2015;
            let art2016 = event.graphic.attributes.naics_s17_2016 === null ? 0 : event.graphic.attributes.naics_s17_2016;
            let art2017 = event.graphic.attributes.naics_s17_2017 === null ? 0 : event.graphic.attributes.naics_s17_2017;

            var data = {
                datasets: [
                    {
                        data: [art2009, art2010, art2011, art2012, art2013, art2014, art2015, art2016, art2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Arts, Entertainment, and Recreation jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Arts, Entertainment, and Recreation Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector17}</b> Arts, Entertainment, and Recreation jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector17",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s17_2017']), 0, $feature['naics_s17_2017'])",
                name: "sector17",
                title: "Arts, Entertainment, and Recreation Jobs"
            }
        ]
    });
}

function createSector18PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let food2009 = event.graphic.attributes.naics_s18_2009 === null ? 0 : event.graphic.attributes.naics_s18_2009;
            let food2010 = event.graphic.attributes.naics_s18_2010 === null ? 0 : event.graphic.attributes.naics_s18_2010;
            let food2011 = event.graphic.attributes.naics_s18_2011 === null ? 0 : event.graphic.attributes.naics_s18_2011;
            let food2012 = event.graphic.attributes.naics_s18_2012 === null ? 0 : event.graphic.attributes.naics_s18_2012;
            let food2013 = event.graphic.attributes.naics_s18_2013 === null ? 0 : event.graphic.attributes.naics_s18_2013;
            let food2014 = event.graphic.attributes.naics_s18_2014 === null ? 0 : event.graphic.attributes.naics_s18_2014;
            let food2015 = event.graphic.attributes.naics_s18_2015 === null ? 0 : event.graphic.attributes.naics_s18_2015;
            let food2016 = event.graphic.attributes.naics_s18_2016 === null ? 0 : event.graphic.attributes.naics_s18_2016;
            let food2017 = event.graphic.attributes.naics_s18_2017 === null ? 0 : event.graphic.attributes.naics_s18_2017;

            var data = {
                datasets: [
                    {
                        data: [food2009, food2010, food2011, food2012, food2013, food2014, food2015, food2016, food2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Accommodation and Food Services jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Accommodation and Food Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector18}</b> Accommodation and Food Services jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector18",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s18_2017']), 0, $feature['naics_s18_2017'])",
                name: "sector18",
                title: "Accommodation and Food Services Jobs"
            }
        ]
    });
}

function createSector19PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let other2009 = event.graphic.attributes.naics_s19_2009 === null ? 0 : event.graphic.attributes.naics_s19_2009;
            let other2010 = event.graphic.attributes.naics_s19_2010 === null ? 0 : event.graphic.attributes.naics_s19_2010;
            let other2011 = event.graphic.attributes.naics_s19_2011 === null ? 0 : event.graphic.attributes.naics_s19_2011;
            let other2012 = event.graphic.attributes.naics_s19_2012 === null ? 0 : event.graphic.attributes.naics_s19_2012;
            let other2013 = event.graphic.attributes.naics_s19_2013 === null ? 0 : event.graphic.attributes.naics_s19_2013;
            let other2014 = event.graphic.attributes.naics_s19_2014 === null ? 0 : event.graphic.attributes.naics_s19_2014;
            let other2015 = event.graphic.attributes.naics_s19_2015 === null ? 0 : event.graphic.attributes.naics_s19_2015;
            let other2016 = event.graphic.attributes.naics_s19_2016 === null ? 0 : event.graphic.attributes.naics_s19_2016;
            let other2017 = event.graphic.attributes.naics_s19_2017 === null ? 0 : event.graphic.attributes.naics_s19_2017;

            var data = {
                datasets: [
                    {
                        data: [other2009, other2010, other2011, other2012, other2013, other2014, other2015, other2016, other2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Other Services jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Other Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector19}</b> Other Services jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector19",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s19_2017']), 0, $feature['naics_s19_2017'])",
                name: "sector19",
                title: "Other Services Jobs"
            }
        ]
    });
}

function createSector20PopupTemplate(){
    const charts = new CustomContent({
        outFields: ["*"],
        creator: (event) => {
            var canvasDiv = document.createElement("div");
            var canvas = document.createElement("canvas");
            canvasDiv.appendChild(canvas);

            let public2009 = event.graphic.attributes.naics_s20_2009 === null ? 0 : event.graphic.attributes.naics_s20_2009;
            let public2010 = event.graphic.attributes.naics_s20_2010 === null ? 0 : event.graphic.attributes.naics_s20_2010;
            let public2011 = event.graphic.attributes.naics_s20_2011 === null ? 0 : event.graphic.attributes.naics_s20_2011;
            let public2012 = event.graphic.attributes.naics_s20_2012 === null ? 0 : event.graphic.attributes.naics_s20_2012;
            let public2013 = event.graphic.attributes.naics_s20_2013 === null ? 0 : event.graphic.attributes.naics_s20_2013;
            let public2014 = event.graphic.attributes.naics_s20_2014 === null ? 0 : event.graphic.attributes.naics_s20_2014;
            let public2015 = event.graphic.attributes.naics_s20_2015 === null ? 0 : event.graphic.attributes.naics_s20_2015;
            let public2016 = event.graphic.attributes.naics_s20_2016 === null ? 0 : event.graphic.attributes.naics_s20_2016;
            let public2017 = event.graphic.attributes.naics_s20_2017 === null ? 0 : event.graphic.attributes.naics_s20_2017;

            var data = {
                datasets: [
                    {
                        data: [public2009, public2010, public2011, public2012, public2013, public2014, public2015, public2016, public2017],
                        backgroundColor: ["#d73447"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73447"
                    }
                ],
                labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            };

            var myChart = new Chart(canvas,{
                type: "line",
                data,
                options: {
                    tooltips: {
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (tooltipItem, data) => {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Historic Trends of Public Administration jobs"
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Year"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Jobs"
                                },
                                ticks: {
                                    callback: (value) => {
                                        return parseFloat(value).toLocaleString();
                                    }
                                }
                            }
                        ]
                    }
                }
            });

            return canvasDiv
        }
    });

    return new PopupTemplate({
        title: "Public Administration Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector20}</b> Public Administration jobs"
            }),
            charts
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector20",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            }
        ],
        expressionInfos: [
            {
                expression: "IIf(IsEmpty($feature['naics_s20_2017']), 0, $feature['naics_s20_2017'])",
                name: "sector20",
                title: "Public Administration Jobs"
            }
        ]
    });
}