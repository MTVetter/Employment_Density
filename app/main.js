var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/core/watchUtils", "esri/widgets/Home", "esri/widgets/Legend", "esri/widgets/Expand", "esri/widgets/BasemapToggle", "esri/intl", "esri/views/layers/support/FeatureFilter", "./layerUtils", "./rendererUtils", "./popupTemplateUtils", "./buttonUtils"], function (require, exports, EsriMap, MapView, watchUtils, Home, Legend, Expand, BasemapToggle, intl_1, FeatureFilter, layerUtils_1, rendererUtils_1, popupTemplateUtils_1, buttonUtils_1) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(_this, void 0, void 0, function () {
        function loadApp() {
            return __awaiter(this, void 0, void 0, function () {
                function queryLayerViewStats(layerView, value) {
                    var jobFields = [
                        "total_2017",
                        "naics_s01_2017",
                        "naics_s02_2017",
                        "naics_s03_2017",
                        "naics_s04_2017",
                        "naics_s05_2017",
                        "naics_s06_2017",
                        "naics_s07_2017",
                        "naics_s08_2017",
                        "naics_s09_2017",
                        "naics_s10_2017",
                        "naics_s11_2017",
                        "naics_s12_2017",
                        "naics_s13_2017",
                        "naics_s14_2017",
                        "naics_s15_2017",
                        "naics_s16_2017",
                        "naics_s17_2017",
                        "naics_s18_2017",
                        "naics_s19_2017",
                        "naics_s20_2017"
                    ];
                    var statDefinitions = jobFields.map(function (fieldName) {
                        return {
                            onStatisticField: fieldName,
                            outStatisticFieldName: fieldName + "_TOTAL",
                            statisticType: "sum"
                        };
                    });
                    var query = layerView.layer.createQuery();
                    query.outStatistics = statDefinitions;
                    query.geometry = view.extent;
                    query.where = value == "All" ? "1 = 1" : "County = '" + value + "'";
                    return layerView.queryFeatures(query).then(function (response) {
                        var stats = response.features[0].attributes;
                        var updatedData = [
                            stats.total_2017_TOTAL,
                            stats.naics_s01_2017_TOTAL,
                            stats.naics_s02_2017_TOTAL,
                            stats.naics_s03_2017_TOTAL,
                            stats.naics_s04_2017_TOTAL,
                            stats.naics_s05_2017_TOTAL,
                            stats.naics_s06_2017_TOTAL,
                            stats.naics_s07_2017_TOTAL,
                            stats.naics_s08_2017_TOTAL,
                            stats.naics_s09_2017_TOTAL,
                            stats.naics_s10_2017_TOTAL,
                            stats.naics_s11_2017_TOTAL,
                            stats.naics_s12_2017_TOTAL,
                            stats.naics_s13_2017_TOTAL,
                            stats.naics_s14_2017_TOTAL,
                            stats.naics_s15_2017_TOTAL,
                            stats.naics_s16_2017_TOTAL,
                            stats.naics_s17_2017_TOTAL,
                            stats.naics_s18_2017_TOTAL,
                            stats.naics_s19_2017_TOTAL,
                            stats.naics_s20_2017_TOTAL
                        ];
                        return {
                            total: stats.total_2017_TOTAL,
                            values: updatedData
                        };
                    });
                }
                function updateInfo(response) {
                    var newData = response.values;
                    if (buttonUtils_1.totalJobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[0], format);
                    }
                    else if (buttonUtils_1.sector1JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[1], format);
                    }
                    else if (buttonUtils_1.sector2JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[2], format);
                    }
                    else if (buttonUtils_1.sector3JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[3], format);
                    }
                    else if (buttonUtils_1.sector4JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[4], format);
                    }
                    else if (buttonUtils_1.sector5JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[5], format);
                    }
                    else if (buttonUtils_1.sector6JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[6], format);
                    }
                    else if (buttonUtils_1.sector7JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[7], format);
                    }
                    else if (buttonUtils_1.sector8JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[8], format);
                    }
                    else if (buttonUtils_1.sector9JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[9], format);
                    }
                    else if (buttonUtils_1.sector10JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[10], format);
                    }
                    else if (buttonUtils_1.sector11JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[11], format);
                    }
                    else if (buttonUtils_1.sector12JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[12], format);
                    }
                    else if (buttonUtils_1.sector13JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[13], format);
                    }
                    else if (buttonUtils_1.sector14JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[14], format);
                    }
                    else if (buttonUtils_1.sector15JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[15], format);
                    }
                    else if (buttonUtils_1.sector16JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[16], format);
                    }
                    else if (buttonUtils_1.sector17JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[17], format);
                    }
                    else if (buttonUtils_1.sector18JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[18], format);
                    }
                    else if (buttonUtils_1.sector19JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[19], format);
                    }
                    else if (buttonUtils_1.sector20JobsButton.checked) {
                        jobs.innerText = intl_1.formatNumber(newData[20], format);
                    }
                }
                function toggleTimeOptionsVisibility() {
                    infoElement.style.visibility = infoElement.style.visibility === "hidden" ? "visible" : "hidden";
                    if (timeVisibilityBtn.classList.contains("esri-icon-dashboard")) {
                        timeVisibilityBtn.classList.replace("esri-icon-dashboard", "esri-icon-expand");
                    }
                    else {
                        timeVisibilityBtn.classList.replace("esri-icon-expand", "esri-icon-dashboard");
                    }
                }
                var map, view, legend, legendExpand, toggle, featureLayerView, countyLayerView, jobs, timeVisibilityBtn, infoElement, format;
                return __generator(this, function (_a) {
                    map = new EsriMap({
                        basemap: "gray-vector"
                    });
                    view = new MapView({
                        map: map,
                        container: "viewDiv",
                        center: [-95.97722230077761, 29.747631384641796],
                        zoom: 8,
                        constraints: {
                            minZoom: 8
                        },
                        popup: {
                            dockEnabled: true,
                            dockOptions: {
                                breakpoint: false,
                                buttonEnabled: false,
                                position: "top-right"
                            }
                        }
                    });
                    //Add the Home widget
                    view.ui.add(new Home({ view: view }), "top-left");
                    legend = new Legend({
                        view: view
                    });
                    legendExpand = new Expand({
                        view: view,
                        content: legend,
                        expandIconClass: "esri-icon-layer-list",
                        expanded: true
                    });
                    view.ui.add(legendExpand, "top-left");
                    view.ui.add("time-slider-toggle", "bottom-left");
                    toggle = new BasemapToggle({
                        view: view,
                        nextBasemap: "satellite"
                    });
                    view.ui.add(toggle, "bottom-right");
                    //Add the renderer and popup to the layers
                    rendererUtils_1.updateRenderer({
                        layer: layerUtils_1.h1m,
                        rendererType: "total",
                        view: view
                    });
                    popupTemplateUtils_1.updatePopupTemplate({
                        layer: layerUtils_1.h1m,
                        rendererType: "total"
                    });
                    rendererUtils_1.updateHotspots({
                        layer: layerUtils_1.hotspots,
                        rendererType: "total",
                        view: view
                    });
                    map.add(layerUtils_1.counties);
                    map.add(layerUtils_1.h1m);
                    map.add(layerUtils_1.hotspots);
                    featureLayerView = null;
                    countyLayerView = null;
                    //Update the job numbers
                    view.when(function () {
                        view.whenLayerView(layerUtils_1.counties).then(function (layerView) {
                            countyLayerView = layerView;
                        });
                        view.whenLayerView(layerUtils_1.h1m).then(function (layerView) {
                            featureLayerView = layerView;
                            watchUtils.whenTrue(view, "stationary", function (val) {
                                buttonUtils_1.checkButtons(view);
                                watchUtils.whenFalse(layerView, "updating", function (val) {
                                    queryLayerViewStats(layerView, buttonUtils_1.countySelect.value).then(function (newData) {
                                        updateInfo(newData);
                                    });
                                });
                            });
                        });
                    });
                    jobs = document.getElementById("jobs");
                    timeVisibilityBtn = document.getElementById("time-slider-toggle");
                    infoElement = document.getElementById("info");
                    buttonUtils_1.countySelect.addEventListener("change", function () {
                        if (buttonUtils_1.countySelect.value == "All") {
                            var filterExpression = "1 = 1";
                            var pointExpression = "1 = 1";
                        }
                        else {
                            var filterExpression = "Name = '" + buttonUtils_1.countySelect.value + " County'";
                            var pointExpression = "County = '" + buttonUtils_1.countySelect.value + "'";
                        }
                        featureLayerView.filter = new FeatureFilter({
                            where: pointExpression
                        });
                        countyLayerView.filter = new FeatureFilter({
                            where: filterExpression
                        });
                        switch (buttonUtils_1.countySelect.value) {
                            case "Austin":
                                view.goTo({
                                    center: [-96.277695, 29.891898],
                                    zoom: 9
                                });
                                break;
                            case "Brazoria":
                                view.goTo({
                                    center: [-95.437639, 29.173027],
                                    zoom: 9
                                });
                                break;
                            case "Chambers":
                                view.goTo({
                                    center: [-94.668977, 29.709057],
                                    zoom: 9
                                });
                                break;
                            case "Colorado":
                                view.goTo({
                                    center: [-96.531945, 29.622701],
                                    zoom: 9
                                });
                                break;
                            case "Fort Bend":
                                view.goTo({
                                    center: [-95.766124, 29.530987],
                                    zoom: 9
                                });
                                break;
                            case "Galveston":
                                view.goTo({
                                    center: [-94.86675, 29.382793],
                                    zoom: 9
                                });
                                break;
                            case "Harris":
                                view.goTo({
                                    center: [-95.394061, 29.85735],
                                    zoom: 9
                                });
                                break;
                            case "Liberty":
                                view.goTo({
                                    center: [-94.811782, 30.152341],
                                    zoom: 9
                                });
                                break;
                            case "Matagorda":
                                view.goTo({
                                    center: [-96.003488, 28.785972],
                                    zoom: 9
                                });
                                break;
                            case "Montgomery":
                                view.goTo({
                                    center: [-95.504731, 30.298913],
                                    zoom: 9
                                });
                                break;
                            case "Walker":
                                view.goTo({
                                    center: [-95.572547, 30.746046],
                                    zoom: 9
                                });
                                break;
                            case "Waller":
                                view.goTo({
                                    center: [-95.991098, 30.009135],
                                    zoom: 9
                                });
                                break;
                            case "Wharton":
                                view.goTo({
                                    center: [-96.231377, 29.280987],
                                    zoom: 9
                                });
                                break;
                            case "All":
                                break;
                        }
                        watchUtils.whenFalse(featureLayerView, "updating", function () {
                            queryLayerViewStats(featureLayerView, buttonUtils_1.countySelect.value).then(function (newData) {
                                updateInfo(newData);
                            });
                        });
                    });
                    buttonUtils_1.totalJobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "total"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "total",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "total"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "total",
                            view: view
                        });
                    });
                    buttonUtils_1.sector1JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 1"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 1",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 1"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 1",
                            view: view
                        });
                    });
                    buttonUtils_1.sector2JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 2"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 2",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 2"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 2",
                            view: view
                        });
                    });
                    buttonUtils_1.sector3JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 3"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 3",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 3"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 3",
                            view: view
                        });
                    });
                    buttonUtils_1.sector4JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 4"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 4",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 4"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 4",
                            view: view
                        });
                    });
                    buttonUtils_1.sector5JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 5"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 5",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 5"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 5",
                            view: view
                        });
                    });
                    buttonUtils_1.sector6JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 6"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 6",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 6"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 6",
                            view: view
                        });
                    });
                    buttonUtils_1.sector7JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 7"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 7",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 7"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 7",
                            view: view
                        });
                    });
                    buttonUtils_1.sector8JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 8"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 8",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 8"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 8",
                            view: view
                        });
                    });
                    buttonUtils_1.sector9JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 9"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 9",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 9"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 9",
                            view: view
                        });
                    });
                    buttonUtils_1.sector10JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 10"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 10",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 10"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 10",
                            view: view
                        });
                    });
                    buttonUtils_1.sector11JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 11"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 11",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 11"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 11",
                            view: view
                        });
                    });
                    buttonUtils_1.sector12JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 12"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 12",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 12"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 12",
                            view: view
                        });
                    });
                    buttonUtils_1.sector13JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 13"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 13",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 13"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 13",
                            view: view
                        });
                    });
                    buttonUtils_1.sector14JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 14"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 14",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 14"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 14",
                            view: view
                        });
                    });
                    buttonUtils_1.sector15JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 15"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 15",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 15"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 15",
                            view: view
                        });
                    });
                    buttonUtils_1.sector16JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 16"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 16",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 16"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 16",
                            view: view
                        });
                    });
                    buttonUtils_1.sector17JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 17"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 17",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 17"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 17",
                            view: view
                        });
                    });
                    buttonUtils_1.sector18JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 18"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 18",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 18"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 18",
                            view: view
                        });
                    });
                    buttonUtils_1.sector19JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 19"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 19",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 19"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 19",
                            view: view
                        });
                    });
                    buttonUtils_1.sector20JobsButton.addEventListener("input", function (event) {
                        buttonUtils_1.updateButtons({
                            button: "sector 20"
                        });
                        rendererUtils_1.updateRenderer({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 20",
                            view: view
                        });
                        popupTemplateUtils_1.updatePopupTemplate({
                            layer: layerUtils_1.h1m,
                            rendererType: "sector 20"
                        });
                        rendererUtils_1.updateHotspots({
                            layer: layerUtils_1.hotspots,
                            rendererType: "sector 20",
                            view: view
                        });
                    });
                    format = intl_1.convertNumberFormatToIntlOptions({
                        places: 0,
                        digitSeparator: true
                    });
                    timeVisibilityBtn.addEventListener("click", toggleTimeOptionsVisibility);
                    return [2 /*return*/];
                });
            });
        }
        return __generator(this, function (_a) {
            loadApp();
            return [2 /*return*/];
        });
    }); })();
});
//# sourceMappingURL=main.js.map