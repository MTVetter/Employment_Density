define(["require", "exports", "esri/layers/FeatureLayer", "esri/renderers/SimpleRenderer", "esri/renderers/visualVariables/SizeVariable", "esri/symbols", "esri/symbols/SimpleMarkerSymbol"], function (require, exports, FeatureLayer, SimpleRenderer, SizeVariable, symbols_1, SimpleMarkerSymbol) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var totalJobs = new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({
            size: 1,
            color: "rgba(230,0,73,0.8)",
            outline: {
                color: "rgba(0,0,0,0)",
                width: 0
            }
        }),
        visualVariables: [
            new SizeVariable({
                field: "total_2017",
                stops: [
                    { value: 0, size: 0 },
                    { value: 1, size: "2px" },
                    { value: 20000, size: "4px" },
                    { value: 40000, size: "8px" }
                ]
            })
        ]
    });
    exports.h1m = new FeatureLayer({
        url: "https://gis.h-gac.com/arcgis/rest/services/Occupational_Analysis/H1M_Points/MapServer/0",
        renderer: new SimpleRenderer({
            symbol: new SimpleMarkerSymbol({
                size: 1,
                color: null,
                outline: null
            })
        }),
        outFields: ["*"],
        title: "Employment Density"
    });
    exports.hotspots = new FeatureLayer({
        url: "https://gis.h-gac.com/arcgis/rest/services/Occupational_Analysis/H1M_Points/MapServer/1",
        renderer: new SimpleRenderer({
            symbol: new symbols_1.SimpleFillSymbol({
                outline: new symbols_1.SimpleLineSymbol({
                    color: "rgba(0,0,0, 1)",
                    width: 2
                })
            })
        }),
        blendMode: "overlay",
        title: "Hotspot Areas"
    });
    exports.counties = new FeatureLayer({
        url: "https://services1.arcgis.com/Z6SBWLWGRRejblAA/arcgis/rest/services/Equity_Profiles_Places_BGs_Counties/FeatureServer/2",
        legendEnabled: false,
        renderer: new SimpleRenderer({
            symbol: new symbols_1.SimpleFillSymbol({
                color: "rgba(8,27,71,0)",
                outline: new symbols_1.SimpleLineSymbol({
                    color: "rgba(8,27,71,0.45)",
                    width: 1
                })
            })
        }),
        outFields: ["*"]
    });
});
//# sourceMappingURL=layerUtils.js.map