import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import SizeVariable = require("esri/renderers/visualVariables/SizeVariable");
import ColorVariable = require("esri/renderers/visualVariables/ColorVariable");
import { SimpleLineSymbol, SimpleMarkerSymbol, SimpleFillSymbol } from "esri/symbols";

import FeatureLayer = require("esri/layers/FeatureLayer");
import Color = require("esri/Color");
import MapView = require("esri/views/MapView");

export interface UpdateRendererParams {
    layer: FeatureLayer,
    rendererType: "total" | "sector 1" | "sector 2" | "sector 3" | "sector 4" | "sector 5" |
    "sector 6" | "sector 7" | "sector 8" | "sector 9" | "sector 10" | "sector 11" |
    "sector 12" | "sector 13" | "sector 14" | "sector 15" | "sector 16" | "sector 17" |
    "sector 18" | "sector 19" | "sector 20",
    view: MapView
}

//Function to update renderer on the points based on category and map zoom
export function updateRenderer(params: UpdateRendererParams){
    const { layer, rendererType, view } = params;

    if (view.zoom <= 9){
        switch (rendererType){
            case "total":
                var renderer = totalJobsInitial();
                break;
            case "sector 1":
                var renderer = sector1JobsInitial();
                break;
            case "sector 2":
                var renderer = sector2JobsInitial();
                break;
            case "sector 3":
                var renderer = sector3JobsInitial();
                break;
            case "sector 4":
                var renderer = sector4JobsInitial();
                break;
            case "sector 5":
                var renderer = sector5JobsInitial();
                break;
            case "sector 6":
                var renderer = sector6JobsInitial();
                break;
            case "sector 7":
                var renderer = sector7JobsInitial();
                break;
            case "sector 8":
                var renderer = sector8JobsInitial();
                break;
            case "sector 9":
                var renderer = sector9JobsInitial();
                break;
            case "sector 10":
                var renderer = sector10JobsInitial();
                break;
            case "sector 11":
                var renderer = sector11JobsInitial();
                break;
            case "sector 12":
                var renderer = sector12JobsInitial();
                break;
            case "sector 13":
                var renderer = sector13JobsInitial();
                break;
            case "sector 14":
                var renderer = sector14JobsInitial();
                break;
            case "sector 15":
                var renderer = sector15JobsInitial();
                break;
            case "sector 16":
                var renderer = sector16JobsInitial();
                break;
            case "sector 17":
                var renderer = sector17JobsInitial();
                break;
            case "sector 18":
                var renderer = sector18JobsInitial();
                break;
            case "sector 19":
                var renderer = sector19JobsInitial();
                break;
            case "sector 20":
                var renderer = sector20JobsInitial();
                break;
        }
    
        layer.renderer = renderer;
    } else {
        switch (rendererType){
            case "total":
                var renderer = createTotalRenderer();
                break;
            case "sector 1":
                var renderer = createSector1Renderer();
                break;
            case "sector 2":
                var renderer = createSector2Renderer();
                break;
            case "sector 3":
                var renderer = createSector3Renderer();
                break;
            case "sector 4":
                var renderer = createSector4Renderer();
                break;
            case "sector 5":
                var renderer = createSector5Renderer();
                break;
            case "sector 6":
                var renderer = createSector6Renderer();
                break;
            case "sector 7":
                var renderer = createSector7Renderer();
                break;
            case "sector 8":
                var renderer = createSector8Renderer();
                break;
            case "sector 9":
                var renderer = createSector9Renderer();
                break;
            case "sector 10":
                var renderer = createSector10Renderer();
                break;
            case "sector 11":
                var renderer = createSector11Renderer();
                break;
            case "sector 12":
                var renderer = createSector12Renderer();
                break;
            case "sector 13":
                var renderer = createSector13Renderer();
                break;
            case "sector 14":
                var renderer = createSector14Renderer();
                break;
            case "sector 15":
                var renderer = createSector15Renderer();
                break;
            case "sector 16":
                var renderer = createSector16Renderer();
                break;
            case "sector 17":
                var renderer = createSector17Renderer();
                break;
            case "sector 18":
                var renderer = createSector18Renderer();
                break;
            case "sector 19":
                var renderer = createSector19Renderer();
                break;
            case "sector 20":
                var renderer = createSector20Renderer();
                break;
        }
    
        layer.renderer = renderer;
    }

    
}

function createTotalRenderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['total_2017']), 0, $feature['total_2017'])",
            valueExpressionTitle: "Total Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 1000, size: 4 },
                { value: 10000, size: 8},
                { value: 20000, size: 10 },
                { value: 40000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });

}

function createSector1Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s01_2017']), 0, $feature['naics_s01_2017'])",
            valueExpressionTitle: "Total Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 25, size: 4 },
                { value: 50, size: 8},
                { value: 75, size: 10 },
                { value: 100, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector2Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s02_2017']), 0, $feature['naics_s02_2017'])",
            valueExpressionTitle: "Mining, Quarrying, and Oil and Gas Extraction Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8 },
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector3Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s03_2017']), 0, $feature['naics_s03_2017'])",
            valueExpressionTitle: "Total Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 150, size: 4 },
                { value: 300, size: 8 },
                { value: 450, size: 10 },
                { value: 600, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector4Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s04_2017']), 0, $feature['naics_s04_2017'])",
            valueExpressionTitle: "Construction Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8 },
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector5Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s05_2017']), 0, $feature['naics_s05_2017'])",
            valueExpressionTitle: "Manufactoring Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8 },
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector6Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s06_2017']), 0, $feature['naics_s06_2017'])",
            valueExpressionTitle: "Wholesale Trade Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8 },
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector7Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s07_2017']), 0, $feature['naics_s07_2017'])",
            valueExpressionTitle: "Retail Trade Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector8Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s08_2017']), 0, $feature['naics_s08_2017'])",
            valueExpressionTitle: "Transportation and Warehousing Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector9Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s09_2017']), 0, $feature['naics_s09_2017'])",
            valueExpressionTitle: "Information Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 75, size: 4 },
                { value: 100, size: 8},
                { value: 250, size: 10 },
                { value: 500, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector10Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s10_2017']), 0, $feature['naics_s10_2017'])",
            valueExpressionTitle: "Finance and Insurance Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 100, size: 4 },
                { value: 250, size: 8 },
                { value: 500, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector11Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s11_2017']), 0, $feature['naics_s11_2017'])",
            valueExpressionTitle: "Real Estate and Rental and Leasing Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 75, size: 4 },
                { value: 100, size: 8},
                { value: 250, size: 10 },
                { value: 500, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector12Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s12_2017']), 0, $feature['naics_s12_2017'])",
            valueExpressionTitle: "Professional, Scientific, and Technical Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector13Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s13_2017']), 0, $feature['naics_s13_2017'])",
            valueExpressionTitle: "Management of Companies and Enterprises Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 75, size: 4 },
                { value: 100, size: 8},
                { value: 250, size: 10 },
                { value: 500, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector14Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s14_2017']), 0, $feature['naics_s14_2017'])",
            valueExpressionTitle: "Administration & Support, Waste Management and Remediation Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 750, size: 10 },
                { value: 1000, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector15Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s15_2017']), 0, $feature['naics_s15_2017'])",
            valueExpressionTitle: "Educational Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 1000, size: 10 },
                { value: 2500, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector16Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s16_2017']), 0, $feature['naics_s16_2017'])",
            valueExpressionTitle: "Health Care and Social Assistance Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 1000, size: 10 },
                { value: 2500, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector17Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s17_2017']), 0, $feature['naics_s17_2017'])",
            valueExpressionTitle: "Arts, Entertainment, and Recreation Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 35, size: 4 },
                { value: 75, size: 8},
                { value: 125, size: 10 },
                { value: 250, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector18Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s18_2017']), 0, $feature['naics_s18_2017'])",
            valueExpressionTitle: "Accommodation and Food Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 4 },
                { value: 500, size: 8},
                { value: 750, size: 10 },
                { value: 1500, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector19Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s19_2017']), 0, $feature['naics_s19_2017'])",
            valueExpressionTitle: "Other Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 50, size: 4 },
                { value: 100, size: 8},
                { value: 200, size: 10 },
                { value: 400, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function createSector20Renderer(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s20_2017']), 0, $feature['naics_s20_2017'])",
            valueExpressionTitle: "Public Administration Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 25, size: 4 },
                { value: 75, size: 8},
                { value: 125, size: 10 },
                { value: 250, size: 14 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

//Default symbol for the points
function createDefaultSymbol(color?: Color, outline?: SimpleLineSymbol) : SimpleMarkerSymbol{
    return new SimpleMarkerSymbol({
      color: color || null,
      size: 4,
      outline: outline || {
        color: "rgba(200,200,200,0.4)",
        width: 0.5
      }
    });
}

//Function to update hotspot renderer based on category
export function updateHotspots(params: UpdateRendererParams){
    const { layer, rendererType } = params;

    switch (rendererType){
        case "total":
            var hotspotRenderer = createTotalHotspots();
            break;
        case "sector 1":
            var hotspotRenderer = createSector1Hotspots();
            break;
        case "sector 2":
            var hotspotRenderer = createSector2Hotspots();
            break;
        case "sector 3":
            var hotspotRenderer = createSector3Hotspots();
            break;
        case "sector 4":
            var hotspotRenderer = createSector4Hotspots();
            break;
        case "sector 5":
            var hotspotRenderer = createSector5Hotspots();
            break;
        case "sector 6":
            var hotspotRenderer = createSector6Hotspots();
            break;
        case "sector 7":
            var hotspotRenderer = createSector7Hotspots();
            break;
        case "sector 8":
            var hotspotRenderer = createSector8Hotspots();
            break;
        case "sector 9":
            var hotspotRenderer = createSector9Hotspots();
            break;
        case "sector 10":
            var hotspotRenderer = createSector10Hotspots();
            break;
        case "sector 11":
            var hotspotRenderer = createSector11Hotspots();
            break;
        case "sector 12":
            var hotspotRenderer = createSector12Hotspots();
            break;
        case "sector 13":
            var hotspotRenderer = createSector13Hotspots();
            break;
        case "sector 14":
            var hotspotRenderer = createSector14Hotspots();
            break;
        case "sector 15":
            var hotspotRenderer = createSector15Hotspots();
            break;
        case "sector 16":
            var hotspotRenderer = createSector16Hotspots();
            break;
        case "sector 17":
            var hotspotRenderer = createSector17Hotspots();
            break;
        case "sector 18":
            var hotspotRenderer = createSector18Hotspots();
            break;
        case "sector 19":
            var hotspotRenderer = createSector19Hotspots();
            break;
        case "sector 20":
            var hotspotRenderer = createSector20Hotspots();
            break;
    }

    layer.renderer = hotspotRenderer;
}

function createTotalHotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == 'Total_2017' && $feature.Hotspot == 'Medium',1,$feature.Name == 'Total_2017' && $feature.Hotspot == 'High', 2,$feature.Name == 'Total_2017' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector1Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '1' && $feature.Hotspot == 'Medium',1,$feature.Name == '1' && $feature.Hotspot == 'High', 2,$feature.Name == '1' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector2Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '2' && $feature.Hotspot == 'Medium',1,$feature.Name == '2' && $feature.Hotspot == 'High', 2,$feature.Name == '2' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector3Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '3' && $feature.Hotspot == 'Medium',1,$feature.Name == '3' && $feature.Hotspot == 'High', 2,$feature.Name == '3' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector4Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '4' && $feature.Hotspot == 'Medium',1,$feature.Name == '4' && $feature.Hotspot == 'High', 2,$feature.Name == '4' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector5Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '5' && $feature.Hotspot == 'Medium',1,$feature.Name == '5' && $feature.Hotspot == 'High', 2,$feature.Name == '5' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector6Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '6' && $feature.Hotspot == 'Medium',1,$feature.Name == '6' && $feature.Hotspot == 'High', 2,$feature.Name == '6' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector7Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '7' && $feature.Hotspot == 'Medium',1,$feature.Name == '7' && $feature.Hotspot == 'High', 2,$feature.Name == '7' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector8Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '8' && $feature.Hotspot == 'Medium',1,$feature.Name == '8' && $feature.Hotspot == 'High', 2,$feature.Name == '8' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector9Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '9' && $feature.Hotspot == 'Medium',1,$feature.Name == '9' && $feature.Hotspot == 'High', 2,$feature.Name == '9' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector10Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '10' && $feature.Hotspot == 'Medium',1,$feature.Name == '10' && $feature.Hotspot == 'High', 2,$feature.Name == '10' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector11Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '11' && $feature.Hotspot == 'Medium',1,$feature.Name == '11' && $feature.Hotspot == 'High', 2,$feature.Name == '11' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector12Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '12' && $feature.Hotspot == 'Medium',1,$feature.Name == '12' && $feature.Hotspot == 'High', 2,$feature.Name == '12' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector13Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '13' && $feature.Hotspot == 'Medium',1,$feature.Name == '13' && $feature.Hotspot == 'High', 2,$feature.Name == '13' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector14Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '14' && $feature.Hotspot == 'Medium',1,$feature.Name == '14' && $feature.Hotspot == 'High', 2,$feature.Name == '14' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector15Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '15' && $feature.Hotspot == 'Medium',1,$feature.Name == '15' && $feature.Hotspot == 'High', 2,$feature.Name == '15' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector16Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '16' && $feature.Hotspot == 'Medium',1,$feature.Name == '16' && $feature.Hotspot == 'High', 2,$feature.Name == '16' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector17Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '17' && $feature.Hotspot == 'Medium',1,$feature.Name == '17' && $feature.Hotspot == 'High', 2,$feature.Name == '17' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector18Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '18' && $feature.Hotspot == 'Medium',1,$feature.Name == '18' && $feature.Hotspot == 'High', 2,$feature.Name == '18' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector19Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '19' && $feature.Hotspot == 'Medium',1,$feature.Name == '19' && $feature.Hotspot == 'High', 2,$feature.Name == '19' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

function createSector20Hotspots(){
    let visualVariables = [
        new ColorVariable({
            valueExpression: "When($feature.Name == '20' && $feature.Hotspot == 'Medium',1,$feature.Name == '20' && $feature.Hotspot == 'High', 2,$feature.Name == '20' && $feature.Hotspot == 'Highest',3, 0)",
            valueExpressionTitle: "Hotspot Areas",
            stops: [
                { value: 0, color: "rgba(128,128,128,0)" },
                { value: 1, color: "rgba(255, 237, 160, 0.75)", label: "Medium" },
                { value: 2, color: "rgba(254, 178, 76, 0.75)" },
                { value: 3, color: "rgba(180, 9, 3, 0.75)", label: "Highest" }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            outline: new SimpleLineSymbol({
                color: "rgba(128,128,128,1)",
                width: 0
            })
        }),
        visualVariables
    })
}

//Functions to update points when zoom is 9 or less
function totalJobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['total_2017']), 0, $feature['total_2017'])",
            valueExpressionTitle: "Total Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 1000, size: 3 },
                { value: 10000, size: 4},
                { value: 20000, size: 5 },
                { value: 40000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector1JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s01_2017']), 0, $feature['naics_s01_2017'])",
            valueExpressionTitle: "Agriculture, Forestry, Fishing, and Hunting Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 25, size: 3 },
                { value: 50, size: 4},
                { value: 75, size: 5 },
                { value: 100, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector2JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s02_2017']), 0, $feature['naics_s02_2017'])",
            valueExpressionTitle: "Mining, Quarrying, and Oil and Gas Extraction Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector3JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s03_2017']), 0, $feature['naics_s03_2017'])",
            valueExpressionTitle: "Utilities Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 150, size: 3 },
                { value: 300, size: 4 },
                { value: 450, size: 5 },
                { value: 600, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector4JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s04_2017']), 0, $feature['naics_s04_2017'])",
            valueExpressionTitle: "Construction Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector5JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s05_2017']), 0, $feature['naics_s05_2017'])",
            valueExpressionTitle: "Manufacturing Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector6JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s06_2017']), 0, $feature['naics_s06_2017'])",
            valueExpressionTitle: "Wholesale Trade Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector7JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s07_2017']), 0, $feature['naics_s07_2017'])",
            valueExpressionTitle: "Retail Trade Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector8JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s08_2017']), 0, $feature['naics_s08_2017'])",
            valueExpressionTitle: "Transportation and Warehousing Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector9JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s09_2017']), 0, $feature['naics_s09_2017'])",
            valueExpressionTitle: "Information Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 75, size: 3 },
                { value: 100, size: 4 },
                { value: 250, size: 5 },
                { value: 500, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector10JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s10_2017']), 0, $feature['naics_s10_2017'])",
            valueExpressionTitle: "Fianance and Insurance Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 100, size: 3 },
                { value: 250, size: 4 },
                { value: 500, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector11JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s11_2017']), 0, $feature['naics_s11_2017'])",
            valueExpressionTitle: "Real Estate and Rental and Leasing Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 75, size: 3 },
                { value: 100, size: 4 },
                { value: 250, size: 5 },
                { value: 500, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector12JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s12_2017']), 0, $feature['naics_s12_2017'])",
            valueExpressionTitle: "Professional, Scientific, and Technical Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector13JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s13_2017']), 0, $feature['naics_s13_2017'])",
            valueExpressionTitle: "Management of Companies and Enterprises Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 75, size: 3 },
                { value: 100, size: 4 },
                { value: 250, size: 5 },
                { value: 500, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector14JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s14_2017']), 0, $feature['naics_s14_2017'])",
            valueExpressionTitle: "Administration & Support, Waste Management and Remediation Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1000, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector15JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s15_2017']), 0, $feature['naics_s15_2017'])",
            valueExpressionTitle: "Educational Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 1000, size: 5 },
                { value: 2500, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector16JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s16_2017']), 0, $feature['naics_s16_2017'])",
            valueExpressionTitle: "Health Care and Social Assistance Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 1000, size: 5 },
                { value: 2500, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector17JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s17_2017']), 0, $feature['naics_s17_2017'])",
            valueExpressionTitle: "Arts, Entertainment, and Recreation Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 35, size: 3 },
                { value: 75, size: 4 },
                { value: 125, size: 5 },
                { value: 250, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector18JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s18_2017']), 0, $feature['naics_s18_2017'])",
            valueExpressionTitle: "Accommodation and Food Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 250, size: 3 },
                { value: 500, size: 4 },
                { value: 750, size: 5 },
                { value: 1500, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector19JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s19_2017']), 0, $feature['naics_s19_2017'])",
            valueExpressionTitle: "Other Services Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 50, size: 3 },
                { value: 100, size: 4 },
                { value: 200, size: 5 },
                { value: 400, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

function sector20JobsInitial(){
    let visualVariables = [
        new SizeVariable({
            valueExpression: "IIf(IsEmpty($feature['naics_s20_2017']), 0, $feature['naics_s20_2017'])",
            valueExpressionTitle: "Public Administration Jobs",
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: 2 },
                { value: 25, size: 3 },
                { value: 75, size: 4 },
                { value: 125, size: 5 },
                { value: 250, size: 6.5 }
            ]
        })
    ];

    return new SimpleRenderer({
        symbol: createDefaultSymbol(new Color("rgba(8,27,71,0.45)"), new SimpleLineSymbol({
            color: new Color("rgba(8,27,71,0.8)"),
            width: 0
        })),
        visualVariables
    });
}

//{ value: 0, size: "0px" },
// { value: 1, size: "1.5px" },
// { value: 1000, size: "10px" },
// { value: 10000, size: "15px"},
// { value: 20000, size: "20px" },
// { value: 40000, size: "25px" }