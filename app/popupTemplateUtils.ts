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
    return new PopupTemplate({
        title: "Total Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/total}</b> total jobs."
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Total Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["total_2009","total_2010","total_2011","total_2012","total_2013","total_2014","total_2015","total_2016", "total_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/total",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "total_2017",
                label: "2017",
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

            var data = {
                datasets: [
                    {
                        data: [event.graphic.attributes.naics_s01_2009, event.graphic.attributes.naics_s01_2010, event.graphic.attributes.naics_s01_2011],
                        backgroundColor: ["#d73347"],
                        borderColor: "#d73347",
                        fill: false,
                        pointBackgroundColor: "#d73347"
                    }
                ],
                labels: ["2009", "2010", "2011"]
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
                                    labelString: "Total Jobs"
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
            },{
                fieldName: "naics_s01_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s01_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Mining, Quarrying, and Oil and Gas Extraction Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector2}</b> Mining, Quarrying, and Oil and Gas Extraction jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s02_2009","naics_s02_2010","naics_s02_2011","naics_s02_2012","naics_s02_2013","naics_s02_2014","naics_s02_2015","naics_s02_2016", "naics_s02_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector2",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2010",
                label: "2010",
                format: {
                    places:0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s02_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Utilities Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector3}</b> Utilities jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s03_2009","naics_s03_2010","naics_s03_2011","naics_s03_2012","naics_s03_2013","naics_s03_2014","naics_s03_2015","naics_s03_2016", "naics_s03_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector3",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s03_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Construction Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector4}</b> Construction jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s04_2009","naics_s04_2010","naics_s04_2011","naics_s04_2012","naics_s04_2013","naics_s04_2014","naics_s04_2015","naics_s04_2016", "naics_s04_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector4",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s04_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Manufacturing Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector5}</b> Manufacturing jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s05_2009","naics_s05_2010","naics_s05_2011","naics_s05_2012","naics_s05_2013","naics_s05_2014","naics_s05_2015","naics_s05_2016", "naics_s05_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector5",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s05_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Wholesale Trade Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector6}</b> Wholesale Trade jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s06_2009","naics_s06_2010","naics_s06_2011","naics_s06_2012","naics_s06_2013","naics_s06_2014","naics_s06_2015","naics_s06_2016", "naics_s06_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector6",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s06_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Retail Trade Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector7}</b> Retail Trade jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s07_2009","naics_s07_2010","naics_s07_2011","naics_s07_2012","naics_s07_2013","naics_s07_2014","naics_s07_2015","naics_s07_2016", "naics_s07_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector7",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s07_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Transportation and Warehousing Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector8}</b> Transportation and Warehousing jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s08_2009","naics_s08_2010","naics_s08_2011","naics_s08_2012","naics_s08_2013","naics_s08_2014","naics_s08_2015","naics_s08_2016", "naics_s08_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector8",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s08_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Information Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector9}</b> Information jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s09_2009","naics_s09_2010","naics_s09_2011","naics_s09_2012","naics_s09_2013","naics_s09_2014","naics_s09_2015","naics_s09_2016", "naics_s09_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector9",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s09_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Finance and Insurance Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector10}</b> Finance and Insurance jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s10_2009","naics_s10_2010","naics_s10_2011","naics_s10_2012","naics_s10_2013","naics_s10_2014","naics_s10_2015","naics_s10_2016", "naics_s10_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector10",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s10_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Real Estate and Rental and Leasing Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector11}</b> Real Estate and Rental and Leasing jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s11_2009","naics_s11_2010","naics_s11_2011","naics_s11_2012","naics_s11_2013","naics_s11_2014","naics_s11_2015","naics_s11_2016", "naics_s11_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector11",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s11_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Professional, Scientific, and Technical Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector12}</b> Professional, Scientific, and Technical Services jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s12_2009","naics_s12_2010","naics_s12_2011","naics_s12_2012","naics_s12_2013","naics_s12_2014","naics_s12_2015","naics_s12_2016", "naics_s12_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector12",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s12_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Management of Companies and Enterprises Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector13}</b> Management of Companies and Enterprises jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s13_2009","naics_s13_2010","naics_s13_2011","naics_s13_2012","naics_s13_2013","naics_s13_2014","naics_s13_2015","naics_s13_2016", "naics_s13_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector13",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s13_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Administration & Support, Waste Management and Remediation Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector14}</b> Administration & Support, Waste Management and Remediation jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s14_2009","naics_s14_2010","naics_s14_2011","naics_s14_2012","naics_s14_2013","naics_s14_2014","naics_s14_2015","naics_s14_2016", "naics_s14_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector14",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s14_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Educational Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector15}</b> Educational Services jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s15_2009","naics_s15_2010","naics_s15_2011","naics_s15_2012","naics_s15_2013","naics_s15_2014","naics_s15_2015","naics_s15_2016", "naics_s15_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector15",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2016",
                label: " 2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s15_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Health Care and Social Assistance Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector16}</b> Health Care and Social Assistance jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s16_2009","naics_s16_2010","naics_s16_2011","naics_s16_2012","naics_s16_2013","naics_s16_2014","naics_s16_2015","naics_s16_2016", "naics_s16_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector16",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s16_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Arts, Entertainment, and Recreation Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector17}</b> Arts, Entertainment, and Recreation jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s17_2009","naics_s17_2010","naics_s17_2011","naics_s17_2012","naics_s17_2013","naics_s17_2014","naics_s17_2015","naics_s17_2016", "naics_s17_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector17",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s17_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Accommodation and Food Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector18}</b> Accommodation and Food Services jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s18_2009","naics_s18_2010","naics_s18_2011","naics_s18_2012","naics_s18_2013","naics_s18_2014","naics_s18_2015","naics_s18_2016", "naics_s18_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector18",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s18_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Other Services Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector19}</b> Other Services jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s19_2009","naics_s19_2010","naics_s19_2011","naics_s19_2012","naics_s19_2013","naics_s19_2014","naics_s19_2015","naics_s19_2016", "naics_s19_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector19",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s19_2017",
                label: "2017",
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
    return new PopupTemplate({
        title: "Public Administration Jobs",
        outFields: ["*"],
        content: [
            new TextContent({
                text: "<b>{expression/sector20}</b> Public Administration jobs"
            }),
            new MediaContent({
                mediaInfos: [{
                    title: "Historical Jobs Amount",
                    type: "line-chart",
                    value: {
                        fields: ["naics_s20_2009","naics_s20_2010","naics_s20_2011","naics_s20_2012","naics_s20_2013","naics_s20_2014","naics_s20_2015","naics_s20_2016", "naics_s20_2017"],
                        normalizeField: null
                    }
                }]
            })
        ],
        fieldInfos: [
            {
                fieldName: "expression/sector20",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2009",
                label: "2009",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2010",
                label: "2010",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2011",
                label: "2011",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2012",
                label: "2012",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2013",
                label: "2013",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2014",
                label: "2014",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2015",
                label: "2015",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2016",
                label: "2016",
                format: {
                    places: 0,
                    digitSeparator: true
                }
            },{
                fieldName: "naics_s20_2017",
                label: "2017",
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