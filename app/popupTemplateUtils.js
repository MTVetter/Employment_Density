define(["require", "exports", "esri/PopupTemplate", "esri/popup/content/TextContent", "esri/popup/content/CustomContent"], function (require, exports, PopupTemplate, TextContent, CustomContent) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function updatePopupTemplate(params) {
        var layer = params.layer, rendererType = params.rendererType;
        var popupTemplate;
        switch (rendererType) {
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
    exports.updatePopupTemplate = updatePopupTemplate;
    function createTotalPopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var total2009 = event.graphic.attributes.total_2009 === null ? 0 : event.graphic.attributes.total_2009;
                var total2010 = event.graphic.attributes.total_2010 === null ? 0 : event.graphic.attributes.total_2010;
                var total2011 = event.graphic.attributes.total_2011 === null ? 0 : event.graphic.attributes.total_2011;
                var total2012 = event.graphic.attributes.total_2012 === null ? 0 : event.graphic.attributes.total_2012;
                var total2013 = event.graphic.attributes.total_2013 === null ? 0 : event.graphic.attributes.total_2013;
                var total2014 = event.graphic.attributes.total_2014 === null ? 0 : event.graphic.attributes.total_2014;
                var total2015 = event.graphic.attributes.total_2015 === null ? 0 : event.graphic.attributes.total_2015;
                var total2016 = event.graphic.attributes.total_2016 === null ? 0 : event.graphic.attributes.total_2016;
                var total2017 = event.graphic.attributes.total_2017 === null ? 0 : event.graphic.attributes.total_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
            }
        });
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
    function createSector1PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var sector2009 = event.graphic.attributes.naics_s01_2009 === null ? 0 : event.graphic.attributes.naics_s01_2009;
                var sector2010 = event.graphic.attributes.naics_s01_2010 === null ? 0 : event.graphic.attributes.naics_s01_2010;
                var sector2011 = event.graphic.attributes.naics_s01_2011 === null ? 0 : event.graphic.attributes.naics_s01_2011;
                var sector2012 = event.graphic.attributes.naics_s01_2012 === null ? 0 : event.graphic.attributes.naics_s01_2012;
                var sector2013 = event.graphic.attributes.naics_s01_2013 === null ? 0 : event.graphic.attributes.naics_s01_2013;
                var sector2014 = event.graphic.attributes.naics_s01_2014 === null ? 0 : event.graphic.attributes.naics_s01_2014;
                var sector2015 = event.graphic.attributes.naics_s01_2015 === null ? 0 : event.graphic.attributes.naics_s01_2015;
                var sector2016 = event.graphic.attributes.naics_s01_2016 === null ? 0 : event.graphic.attributes.naics_s01_2016;
                var sector2017 = event.graphic.attributes.naics_s01_2017 === null ? 0 : event.graphic.attributes.naics_s01_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector2PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var oil2009 = event.graphic.attributes.naics_s02_2009 === null ? 0 : event.graphic.attributes.naics_s02_2009;
                var oil2010 = event.graphic.attributes.naics_s02_2010 === null ? 0 : event.graphic.attributes.naics_s02_2010;
                var oil2011 = event.graphic.attributes.naics_s02_2011 === null ? 0 : event.graphic.attributes.naics_s02_2011;
                var oil2012 = event.graphic.attributes.naics_s02_2012 === null ? 0 : event.graphic.attributes.naics_s02_2012;
                var oil2013 = event.graphic.attributes.naics_s02_2013 === null ? 0 : event.graphic.attributes.naics_s02_2013;
                var oil2014 = event.graphic.attributes.naics_s02_2014 === null ? 0 : event.graphic.attributes.naics_s02_2014;
                var oil2015 = event.graphic.attributes.naics_s02_2015 === null ? 0 : event.graphic.attributes.naics_s02_2015;
                var oil2016 = event.graphic.attributes.naics_s02_2016 === null ? 0 : event.graphic.attributes.naics_s02_2016;
                var oil2017 = event.graphic.attributes.naics_s02_2017 === null ? 0 : event.graphic.attributes.naics_s02_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
            }
        });
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
    function createSector3PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var utilities2009 = event.graphic.attributes.naics_s03_2009 === null ? 0 : event.graphic.attributes.naics_s03_2009;
                var utilities2010 = event.graphic.attributes.naics_s03_2010 === null ? 0 : event.graphic.attributes.naics_s03_2010;
                var utilities2011 = event.graphic.attributes.naics_s03_2011 === null ? 0 : event.graphic.attributes.naics_s03_2011;
                var utilities2012 = event.graphic.attributes.naics_s03_2012 === null ? 0 : event.graphic.attributes.naics_s03_2012;
                var utilities2013 = event.graphic.attributes.naics_s03_2013 === null ? 0 : event.graphic.attributes.naics_s03_2013;
                var utilities2014 = event.graphic.attributes.naics_s03_2014 === null ? 0 : event.graphic.attributes.naics_s03_2014;
                var utilities2015 = event.graphic.attributes.naics_s03_2015 === null ? 0 : event.graphic.attributes.naics_s03_2015;
                var utilities2016 = event.graphic.attributes.naics_s03_2016 === null ? 0 : event.graphic.attributes.naics_s03_2016;
                var utilities2017 = event.graphic.attributes.naics_s03_2017 === null ? 0 : event.graphic.attributes.naics_s03_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector4PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var construction2009 = event.graphic.attributes.naics_s04_2009 === null ? 0 : event.graphic.attributes.naics_s04_2009;
                var construction2010 = event.graphic.attributes.naics_s04_2010 === null ? 0 : event.graphic.attributes.naics_s04_2010;
                var construction2011 = event.graphic.attributes.naics_s04_2011 === null ? 0 : event.graphic.attributes.naics_s04_2011;
                var construction2012 = event.graphic.attributes.naics_s04_2012 === null ? 0 : event.graphic.attributes.naics_s04_2012;
                var construction2013 = event.graphic.attributes.naics_s04_2013 === null ? 0 : event.graphic.attributes.naics_s04_2013;
                var construction2014 = event.graphic.attributes.naics_s04_2014 === null ? 0 : event.graphic.attributes.naics_s04_2014;
                var construction2015 = event.graphic.attributes.naics_s04_2015 === null ? 0 : event.graphic.attributes.naics_s04_2015;
                var construction2016 = event.graphic.attributes.naics_s04_2016 === null ? 0 : event.graphic.attributes.naics_s04_2016;
                var construction2017 = event.graphic.attributes.naics_s04_2017 === null ? 0 : event.graphic.attributes.naics_s04_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
            }
        });
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
    function createSector5PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var manufacturing2009 = event.graphic.attributes.naics_s05_2009 === null ? 0 : event.graphic.attributes.naics_s05_2009;
                var manufacturing2010 = event.graphic.attributes.naics_s05_2010 === null ? 0 : event.graphic.attributes.naics_s05_2010;
                var manufacturing2011 = event.graphic.attributes.naics_s05_2011 === null ? 0 : event.graphic.attributes.naics_s05_2011;
                var manufacturing2012 = event.graphic.attributes.naics_s05_2012 === null ? 0 : event.graphic.attributes.naics_s05_2012;
                var manufacturing2013 = event.graphic.attributes.naics_s05_2013 === null ? 0 : event.graphic.attributes.naics_s05_2013;
                var manufacturing2014 = event.graphic.attributes.naics_s05_2014 === null ? 0 : event.graphic.attributes.naics_s05_2014;
                var manufacturing2015 = event.graphic.attributes.naics_s05_2015 === null ? 0 : event.graphic.attributes.naics_s05_2015;
                var manufacturing2016 = event.graphic.attributes.naics_s05_2016 === null ? 0 : event.graphic.attributes.naics_s05_2016;
                var manufacturing2017 = event.graphic.attributes.naics_s05_2017 === null ? 0 : event.graphic.attributes.naics_s05_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector6PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var wholesale2009 = event.graphic.attributes.naics_s06_2009 === null ? 0 : event.graphic.attributes.naics_s06_2009;
                var wholesale2010 = event.graphic.attributes.naics_s06_2010 === null ? 0 : event.graphic.attributes.naics_s06_2010;
                var wholesale2011 = event.graphic.attributes.naics_s06_2011 === null ? 0 : event.graphic.attributes.naics_s06_2011;
                var wholesale2012 = event.graphic.attributes.naics_s06_2012 === null ? 0 : event.graphic.attributes.naics_s06_2012;
                var wholesale2013 = event.graphic.attributes.naics_s06_2013 === null ? 0 : event.graphic.attributes.naics_s06_2013;
                var wholesale2014 = event.graphic.attributes.naics_s06_2014 === null ? 0 : event.graphic.attributes.naics_s06_2014;
                var wholesale2015 = event.graphic.attributes.naics_s06_2015 === null ? 0 : event.graphic.attributes.naics_s06_2015;
                var wholesale2016 = event.graphic.attributes.naics_s06_2016 === null ? 0 : event.graphic.attributes.naics_s06_2016;
                var wholesale2017 = event.graphic.attributes.naics_s06_2017 === null ? 0 : event.graphic.attributes.naics_s06_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector7PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var retail2009 = event.graphic.attributes.naics_s07_2009 === null ? 0 : event.graphic.attributes.naics_s07_2009;
                var retail2010 = event.graphic.attributes.naics_s07_2010 === null ? 0 : event.graphic.attributes.naics_s07_2010;
                var retail2011 = event.graphic.attributes.naics_s07_2011 === null ? 0 : event.graphic.attributes.naics_s07_2011;
                var retail2012 = event.graphic.attributes.naics_s07_2012 === null ? 0 : event.graphic.attributes.naics_s07_2012;
                var retail2013 = event.graphic.attributes.naics_s07_2013 === null ? 0 : event.graphic.attributes.naics_s07_2013;
                var retail2014 = event.graphic.attributes.naics_s07_2014 === null ? 0 : event.graphic.attributes.naics_s07_2014;
                var retail2015 = event.graphic.attributes.naics_s07_2015 === null ? 0 : event.graphic.attributes.naics_s07_2015;
                var retail2016 = event.graphic.attributes.naics_s07_2016 === null ? 0 : event.graphic.attributes.naics_s07_2016;
                var retail2017 = event.graphic.attributes.naics_s07_2017 === null ? 0 : event.graphic.attributes.naics_s07_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector8PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var trans2009 = event.graphic.attributes.naics_s08_2009 === null ? 0 : event.graphic.attributes.naics_s08_2009;
                var trans2010 = event.graphic.attributes.naics_s08_2010 === null ? 0 : event.graphic.attributes.naics_s08_2010;
                var trans2011 = event.graphic.attributes.naics_s08_2011 === null ? 0 : event.graphic.attributes.naics_s08_2011;
                var trans2012 = event.graphic.attributes.naics_s08_2012 === null ? 0 : event.graphic.attributes.naics_s08_2012;
                var trans2013 = event.graphic.attributes.naics_s08_2013 === null ? 0 : event.graphic.attributes.naics_s08_2013;
                var trans2014 = event.graphic.attributes.naics_s08_2014 === null ? 0 : event.graphic.attributes.naics_s08_2014;
                var trans2015 = event.graphic.attributes.naics_s08_2015 === null ? 0 : event.graphic.attributes.naics_s08_2015;
                var trans2016 = event.graphic.attributes.naics_s08_2016 === null ? 0 : event.graphic.attributes.naics_s08_2016;
                var trans2017 = event.graphic.attributes.naics_s08_2017 === null ? 0 : event.graphic.attributes.naics_s08_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector9PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var info2009 = event.graphic.attributes.naics_s09_2009 === null ? 0 : event.graphic.attributes.naics_s09_2009;
                var info2010 = event.graphic.attributes.naics_s09_2010 === null ? 0 : event.graphic.attributes.naics_s09_2010;
                var info2011 = event.graphic.attributes.naics_s09_2011 === null ? 0 : event.graphic.attributes.naics_s09_2011;
                var info2012 = event.graphic.attributes.naics_s09_2012 === null ? 0 : event.graphic.attributes.naics_s09_2012;
                var info2013 = event.graphic.attributes.naics_s09_2013 === null ? 0 : event.graphic.attributes.naics_s09_2013;
                var info2014 = event.graphic.attributes.naics_s09_2014 === null ? 0 : event.graphic.attributes.naics_s09_2014;
                var info2015 = event.graphic.attributes.naics_s09_2015 === null ? 0 : event.graphic.attributes.naics_s09_2015;
                var info2016 = event.graphic.attributes.naics_s09_2016 === null ? 0 : event.graphic.attributes.naics_s09_2016;
                var info2017 = event.graphic.attributes.naics_s09_2017 === null ? 0 : event.graphic.attributes.naics_s09_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector10PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var finance2009 = event.graphic.attributes.naics_s10_2009 === null ? 0 : event.graphic.attributes.naics_s10_2009;
                var finance2010 = event.graphic.attributes.naics_s10_2010 === null ? 0 : event.graphic.attributes.naics_s10_2010;
                var finance2011 = event.graphic.attributes.naics_s10_2011 === null ? 0 : event.graphic.attributes.naics_s10_2011;
                var finance2012 = event.graphic.attributes.naics_s10_2012 === null ? 0 : event.graphic.attributes.naics_s10_2012;
                var finance2013 = event.graphic.attributes.naics_s10_2013 === null ? 0 : event.graphic.attributes.naics_s10_2013;
                var finance2014 = event.graphic.attributes.naics_s10_2014 === null ? 0 : event.graphic.attributes.naics_s10_2014;
                var finance2015 = event.graphic.attributes.naics_s10_2015 === null ? 0 : event.graphic.attributes.naics_s10_2015;
                var finance2016 = event.graphic.attributes.naics_s10_2016 === null ? 0 : event.graphic.attributes.naics_s10_2016;
                var finance2017 = event.graphic.attributes.naics_s10_2017 === null ? 0 : event.graphic.attributes.naics_s10_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector11PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var rental2009 = event.graphic.attributes.naics_s11_2009 === null ? 0 : event.graphic.attributes.naics_s11_2009;
                var rental2010 = event.graphic.attributes.naics_s11_2010 === null ? 0 : event.graphic.attributes.naics_s11_2010;
                var rental2011 = event.graphic.attributes.naics_s11_2011 === null ? 0 : event.graphic.attributes.naics_s11_2011;
                var rental2012 = event.graphic.attributes.naics_s11_2012 === null ? 0 : event.graphic.attributes.naics_s11_2012;
                var rental2013 = event.graphic.attributes.naics_s11_2013 === null ? 0 : event.graphic.attributes.naics_s11_2013;
                var rental2014 = event.graphic.attributes.naics_s11_2014 === null ? 0 : event.graphic.attributes.naics_s11_2014;
                var rental2015 = event.graphic.attributes.naics_s11_2015 === null ? 0 : event.graphic.attributes.naics_s11_2015;
                var rental2016 = event.graphic.attributes.naics_s11_2016 === null ? 0 : event.graphic.attributes.naics_s11_2016;
                var rental2017 = event.graphic.attributes.naics_s11_2017 === null ? 0 : event.graphic.attributes.naics_s11_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector12PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var pro2009 = event.graphic.attributes.naics_s12_2009 === null ? 0 : event.graphic.attributes.naics_s12_2009;
                var pro2010 = event.graphic.attributes.naics_s12_2010 === null ? 0 : event.graphic.attributes.naics_s12_2010;
                var pro2011 = event.graphic.attributes.naics_s12_2011 === null ? 0 : event.graphic.attributes.naics_s12_2011;
                var pro2012 = event.graphic.attributes.naics_s12_2012 === null ? 0 : event.graphic.attributes.naics_s12_2012;
                var pro2013 = event.graphic.attributes.naics_s12_2013 === null ? 0 : event.graphic.attributes.naics_s12_2013;
                var pro2014 = event.graphic.attributes.naics_s12_2014 === null ? 0 : event.graphic.attributes.naics_s12_2014;
                var pro2015 = event.graphic.attributes.naics_s12_2015 === null ? 0 : event.graphic.attributes.naics_s12_2015;
                var pro2016 = event.graphic.attributes.naics_s12_2016 === null ? 0 : event.graphic.attributes.naics_s12_2016;
                var pro2017 = event.graphic.attributes.naics_s12_2017 === null ? 0 : event.graphic.attributes.naics_s12_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector13PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var manage2009 = event.graphic.attributes.naics_s13_2009 === null ? 0 : event.graphic.attributes.naics_s13_2009;
                var manage2010 = event.graphic.attributes.naics_s13_2010 === null ? 0 : event.graphic.attributes.naics_s13_2010;
                var manage2011 = event.graphic.attributes.naics_s13_2011 === null ? 0 : event.graphic.attributes.naics_s13_2011;
                var manage2012 = event.graphic.attributes.naics_s13_2012 === null ? 0 : event.graphic.attributes.naics_s13_2012;
                var manage2013 = event.graphic.attributes.naics_s13_2013 === null ? 0 : event.graphic.attributes.naics_s13_2013;
                var manage2014 = event.graphic.attributes.naics_s13_2014 === null ? 0 : event.graphic.attributes.naics_s13_2014;
                var manage2015 = event.graphic.attributes.naics_s13_2015 === null ? 0 : event.graphic.attributes.naics_s13_2015;
                var manage2016 = event.graphic.attributes.naics_s13_2016 === null ? 0 : event.graphic.attributes.naics_s13_2016;
                var manage2017 = event.graphic.attributes.naics_s13_2017 === null ? 0 : event.graphic.attributes.naics_s13_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector14PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var waste2009 = event.graphic.attributes.naics_s14_2009 === null ? 0 : event.graphic.attributes.naics_s14_2009;
                var waste2010 = event.graphic.attributes.naics_s14_2010 === null ? 0 : event.graphic.attributes.naics_s14_2010;
                var waste2011 = event.graphic.attributes.naics_s14_2011 === null ? 0 : event.graphic.attributes.naics_s14_2011;
                var waste2012 = event.graphic.attributes.naics_s14_2012 === null ? 0 : event.graphic.attributes.naics_s14_2012;
                var waste2013 = event.graphic.attributes.naics_s14_2013 === null ? 0 : event.graphic.attributes.naics_s14_2013;
                var waste2014 = event.graphic.attributes.naics_s14_2014 === null ? 0 : event.graphic.attributes.naics_s14_2014;
                var waste2015 = event.graphic.attributes.naics_s14_2015 === null ? 0 : event.graphic.attributes.naics_s14_2015;
                var waste2016 = event.graphic.attributes.naics_s14_2016 === null ? 0 : event.graphic.attributes.naics_s14_2016;
                var waste2017 = event.graphic.attributes.naics_s14_2017 === null ? 0 : event.graphic.attributes.naics_s14_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector15PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var education2009 = event.graphic.attributes.naics_s15_2009 === null ? 0 : event.graphic.attributes.naics_s15_2009;
                var education2010 = event.graphic.attributes.naics_s15_2010 === null ? 0 : event.graphic.attributes.naics_s15_2010;
                var education2011 = event.graphic.attributes.naics_s15_2011 === null ? 0 : event.graphic.attributes.naics_s15_2011;
                var education2012 = event.graphic.attributes.naics_s15_2012 === null ? 0 : event.graphic.attributes.naics_s15_2012;
                var education2013 = event.graphic.attributes.naics_s15_2013 === null ? 0 : event.graphic.attributes.naics_s15_2013;
                var education2014 = event.graphic.attributes.naics_s15_2014 === null ? 0 : event.graphic.attributes.naics_s15_2014;
                var education2015 = event.graphic.attributes.naics_s15_2015 === null ? 0 : event.graphic.attributes.naics_s15_2015;
                var education2016 = event.graphic.attributes.naics_s15_2016 === null ? 0 : event.graphic.attributes.naics_s15_2016;
                var education2017 = event.graphic.attributes.naics_s15_2017 === null ? 0 : event.graphic.attributes.naics_s15_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector16PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var health2009 = event.graphic.attributes.naics_s15_2009 === null ? 0 : event.graphic.attributes.naics_s15_2009;
                var health2010 = event.graphic.attributes.naics_s15_2010 === null ? 0 : event.graphic.attributes.naics_s15_2010;
                var health2011 = event.graphic.attributes.naics_s15_2011 === null ? 0 : event.graphic.attributes.naics_s15_2011;
                var health2012 = event.graphic.attributes.naics_s15_2012 === null ? 0 : event.graphic.attributes.naics_s15_2012;
                var health2013 = event.graphic.attributes.naics_s15_2013 === null ? 0 : event.graphic.attributes.naics_s15_2013;
                var health2014 = event.graphic.attributes.naics_s15_2014 === null ? 0 : event.graphic.attributes.naics_s15_2014;
                var health2015 = event.graphic.attributes.naics_s15_2015 === null ? 0 : event.graphic.attributes.naics_s15_2015;
                var health2016 = event.graphic.attributes.naics_s15_2016 === null ? 0 : event.graphic.attributes.naics_s15_2016;
                var health2017 = event.graphic.attributes.naics_s15_2017 === null ? 0 : event.graphic.attributes.naics_s15_2017;
                var data = {
                    datasets: [
                        {
                            data: [health2009, health2010, health2011, health2012, health2013, health2014, health2015, health2016, health2017],
                            backgroundColor: ["#d73447"],
                            borderColor: "#d73347",
                            fill: false,
                            pointBackgroundColor: "#d73447"
                        }
                    ],
                    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
                };
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector17PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var art2009 = event.graphic.attributes.naics_s17_2009 === null ? 0 : event.graphic.attributes.naics_s17_2009;
                var art2010 = event.graphic.attributes.naics_s17_2010 === null ? 0 : event.graphic.attributes.naics_s17_2010;
                var art2011 = event.graphic.attributes.naics_s17_2011 === null ? 0 : event.graphic.attributes.naics_s17_2011;
                var art2012 = event.graphic.attributes.naics_s17_2012 === null ? 0 : event.graphic.attributes.naics_s17_2012;
                var art2013 = event.graphic.attributes.naics_s17_2013 === null ? 0 : event.graphic.attributes.naics_s17_2013;
                var art2014 = event.graphic.attributes.naics_s17_2014 === null ? 0 : event.graphic.attributes.naics_s17_2014;
                var art2015 = event.graphic.attributes.naics_s17_2015 === null ? 0 : event.graphic.attributes.naics_s17_2015;
                var art2016 = event.graphic.attributes.naics_s17_2016 === null ? 0 : event.graphic.attributes.naics_s17_2016;
                var art2017 = event.graphic.attributes.naics_s17_2017 === null ? 0 : event.graphic.attributes.naics_s17_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector18PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var food2009 = event.graphic.attributes.naics_s18_2009 === null ? 0 : event.graphic.attributes.naics_s18_2009;
                var food2010 = event.graphic.attributes.naics_s18_2010 === null ? 0 : event.graphic.attributes.naics_s18_2010;
                var food2011 = event.graphic.attributes.naics_s18_2011 === null ? 0 : event.graphic.attributes.naics_s18_2011;
                var food2012 = event.graphic.attributes.naics_s18_2012 === null ? 0 : event.graphic.attributes.naics_s18_2012;
                var food2013 = event.graphic.attributes.naics_s18_2013 === null ? 0 : event.graphic.attributes.naics_s18_2013;
                var food2014 = event.graphic.attributes.naics_s18_2014 === null ? 0 : event.graphic.attributes.naics_s18_2014;
                var food2015 = event.graphic.attributes.naics_s18_2015 === null ? 0 : event.graphic.attributes.naics_s18_2015;
                var food2016 = event.graphic.attributes.naics_s18_2016 === null ? 0 : event.graphic.attributes.naics_s18_2016;
                var food2017 = event.graphic.attributes.naics_s18_2017 === null ? 0 : event.graphic.attributes.naics_s18_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector19PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var other2009 = event.graphic.attributes.naics_s19_2009 === null ? 0 : event.graphic.attributes.naics_s19_2009;
                var other2010 = event.graphic.attributes.naics_s19_2010 === null ? 0 : event.graphic.attributes.naics_s19_2010;
                var other2011 = event.graphic.attributes.naics_s19_2011 === null ? 0 : event.graphic.attributes.naics_s19_2011;
                var other2012 = event.graphic.attributes.naics_s19_2012 === null ? 0 : event.graphic.attributes.naics_s19_2012;
                var other2013 = event.graphic.attributes.naics_s19_2013 === null ? 0 : event.graphic.attributes.naics_s19_2013;
                var other2014 = event.graphic.attributes.naics_s19_2014 === null ? 0 : event.graphic.attributes.naics_s19_2014;
                var other2015 = event.graphic.attributes.naics_s19_2015 === null ? 0 : event.graphic.attributes.naics_s19_2015;
                var other2016 = event.graphic.attributes.naics_s19_2016 === null ? 0 : event.graphic.attributes.naics_s19_2016;
                var other2017 = event.graphic.attributes.naics_s19_2017 === null ? 0 : event.graphic.attributes.naics_s19_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
    function createSector20PopupTemplate() {
        var charts = new CustomContent({
            outFields: ["*"],
            creator: function (event) {
                var canvasDiv = document.createElement("div");
                var canvas = document.createElement("canvas");
                canvasDiv.appendChild(canvas);
                var public2009 = event.graphic.attributes.naics_s20_2009 === null ? 0 : event.graphic.attributes.naics_s20_2009;
                var public2010 = event.graphic.attributes.naics_s20_2010 === null ? 0 : event.graphic.attributes.naics_s20_2010;
                var public2011 = event.graphic.attributes.naics_s20_2011 === null ? 0 : event.graphic.attributes.naics_s20_2011;
                var public2012 = event.graphic.attributes.naics_s20_2012 === null ? 0 : event.graphic.attributes.naics_s20_2012;
                var public2013 = event.graphic.attributes.naics_s20_2013 === null ? 0 : event.graphic.attributes.naics_s20_2013;
                var public2014 = event.graphic.attributes.naics_s20_2014 === null ? 0 : event.graphic.attributes.naics_s20_2014;
                var public2015 = event.graphic.attributes.naics_s20_2015 === null ? 0 : event.graphic.attributes.naics_s20_2015;
                var public2016 = event.graphic.attributes.naics_s20_2016 === null ? 0 : event.graphic.attributes.naics_s20_2016;
                var public2017 = event.graphic.attributes.naics_s20_2017 === null ? 0 : event.graphic.attributes.naics_s20_2017;
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
                var myChart = new Chart(canvas, {
                    type: "line",
                    data: data,
                    options: {
                        tooltips: {
                            mode: "index",
                            intersect: false,
                            callbacks: {
                                label: function (tooltipItem, data) {
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
                                        callback: function (value) {
                                            return parseFloat(value).toLocaleString();
                                        }
                                    }
                                }
                            ]
                        }
                    }
                });
                return canvasDiv;
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
});
//# sourceMappingURL=popupTemplateUtils.js.map