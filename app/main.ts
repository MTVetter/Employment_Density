import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import watchUtils = require("esri/core/watchUtils");
import Home = require("esri/widgets/Home");
import Legend = require("esri/widgets/Legend");
import Expand = require("esri/widgets/Expand");
import BasemapToggle = require("esri/widgets/BasemapToggle");

import FeatureLayer = require("esri/layers/FeatureLayer");
import FeatureLayerView = require("esri/views/layers/FeatureLayerView");
import { formatNumber, convertNumberFormatToIntlOptions } from "esri/intl";
import FeatureFilter = require("esri/views/layers/support/FeatureFilter");

import { counties, h1m, hotspots } from "./layerUtils";
import { updateRenderer, updateHotspots } from "./rendererUtils";
import { updatePopupTemplate } from "./popupTemplateUtils";
import { sector1JobsButton, totalJobsButton, updateButtons, sector2JobsButton, sector3JobsButton, sector4JobsButton, sector5JobsButton, sector6JobsButton, sector7JobsButton, sector8JobsButton, sector9JobsButton, sector10JobsButton, sector11JobsButton, sector12JobsButton, sector13JobsButton, sector14JobsButton, sector15JobsButton, sector16JobsButton, sector17JobsButton, sector18JobsButton, sector19JobsButton, sector20JobsButton, countySelect, checkButtons } from "./buttonUtils";

(async () => {
    loadApp();

    async function loadApp(){
        const map = new EsriMap({
            basemap: "gray-vector"
        });
        
        const view = new MapView({
            map,
            container: "viewDiv",
            center: [-95.68333802343567, 29.726167367409502],
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
        view.ui.add( new Home({ view }), "top-left");

        //Add the Legend widget
        const legend = new Legend({
            view
        });

        const legendExpand = new Expand({
            view,
            content: legend,
            expandIconClass: "esri-icon-layer-list",
            expanded: true
        });
        view.ui.add(legendExpand, "top-left");

        view.ui.add("time-slider-toggle", "bottom-left");

        const toggle = new BasemapToggle({
            view,
            nextBasemap: "satellite"
        });
        view.ui.add(toggle, "bottom-right");

        //Add the renderer and popup to the layers
        updateRenderer({
            layer: h1m,
            rendererType: "total",
            view
        });
        updatePopupTemplate({
            layer: h1m,
            rendererType: "total"
        });
        updateHotspots({
            layer: hotspots,
            rendererType: "total",
            view
        });

        map.add(counties);
        map.add(h1m);
        map.add(hotspots);

        //Filter Points
        let featureLayerView: FeatureLayerView = null;
        let countyLayerView: FeatureLayerView = null;

        //Update the job numbers
        view.when(() => {
            view.whenLayerView(counties).then((layerView) => {
                countyLayerView = layerView;
            });

            view.whenLayerView(h1m).then((layerView) => {
                featureLayerView = layerView;
                watchUtils.whenTrue(view, "stationary", (val) => {
                    checkButtons(view);

                    watchUtils.whenFalse(layerView, "updating", (val) => {
                        queryLayerViewStats(layerView, countySelect.value).then((newData) => {
                            updateInfo(newData);
                        })
                    });
                });
            });
        });

        function queryLayerViewStats(layerView, value){
            const jobFields = [
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

            const statDefinitions = jobFields.map((fieldName) => {
                return {
                    onStatisticField: fieldName,
                    outStatisticFieldName: fieldName + "_TOTAL",
                    statisticType: "sum"
                };
            });

            const query = layerView.layer.createQuery();
            query.outStatistics = statDefinitions;
            query.geometry = view.extent;
            query.where = value == "All" ? "1 = 1" : "County = '" +value+ "'";

            return layerView.queryFeatures(query).then((response) => {
                const stats = response.features[0].attributes;

                const updatedData = [
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

        function updateInfo(response){
            const newData = response.values;
            
            if (totalJobsButton.checked){
                jobs.innerText = formatNumber(newData[0], format);
            } else if (sector1JobsButton.checked){
                jobs.innerText = formatNumber(newData[1], format);
            } else if (sector2JobsButton.checked){
                jobs.innerText = formatNumber(newData[2], format);
            } else if (sector3JobsButton.checked){
                jobs.innerText = formatNumber(newData[3], format);
            } else if (sector4JobsButton.checked){
                jobs.innerText = formatNumber(newData[4], format);
            } else if (sector5JobsButton.checked){
                jobs.innerText = formatNumber(newData[5], format);
            } else if (sector6JobsButton.checked){
                jobs.innerText = formatNumber(newData[6], format);
            } else if (sector7JobsButton.checked){
                jobs.innerText = formatNumber(newData[7], format);
            } else if (sector8JobsButton.checked){
                jobs.innerText = formatNumber(newData[8], format);
            } else if (sector9JobsButton.checked){
                jobs.innerText = formatNumber(newData[9], format);
            } else if (sector10JobsButton.checked){
                jobs.innerText = formatNumber(newData[10], format);
            } else if (sector11JobsButton.checked){
                jobs.innerText = formatNumber(newData[11], format);
            } else if (sector12JobsButton.checked){
                jobs.innerText = formatNumber(newData[12], format);
            } else if (sector13JobsButton.checked){
                jobs.innerText = formatNumber(newData[13], format);
            } else if (sector14JobsButton.checked){
                jobs.innerText = formatNumber(newData[14], format);
            } else if (sector15JobsButton.checked){
                jobs.innerText = formatNumber(newData[15], format);
            } else if (sector16JobsButton.checked){
                jobs.innerText = formatNumber(newData[16], format);
            } else if (sector17JobsButton.checked){
                jobs.innerText = formatNumber(newData[17], format);
            } else if (sector18JobsButton.checked){
                jobs.innerText = formatNumber(newData[18], format);
            } else if (sector19JobsButton.checked){
                jobs.innerText = formatNumber(newData[19], format);
            } else if (sector20JobsButton.checked){
                jobs.innerText = formatNumber(newData[20], format);
            }
        }

        //Set up the buttons
        const jobs = document.getElementById("jobs");
        const timeVisibilityBtn = document.getElementById("time-slider-toggle");
        const infoElement = document.getElementById("info");


        countySelect.addEventListener("change", () => {
            if (countySelect.value == "All"){
                var filterExpression = "1 = 1";
                var pointExpression = "1 = 1";
            } else {
                var filterExpression = "Name = '" + countySelect.value + " County'";
                var pointExpression = "County = '" + countySelect.value + "'";
            }

            featureLayerView.filter = new FeatureFilter({
                where: pointExpression
            });

            countyLayerView.filter = new FeatureFilter({
                where: filterExpression
            });

            switch (countySelect.value){
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

            watchUtils.whenFalse(featureLayerView, "updating", () => {
                queryLayerViewStats(featureLayerView, countySelect.value).then((newData) => {
                    updateInfo(newData);
                })
            });
        });

        totalJobsButton.addEventListener("input", (event) =>{
            updateButtons({
                button: "total"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "total",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "total"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "total",
                view
            });
        });

        sector1JobsButton.addEventListener("input", (event) =>{
            updateButtons({
                button: "sector 1"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 1",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 1"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 1",
                view
            });
        });

        sector2JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 2"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 2",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 2"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 2",
                view
            });
        });

        sector3JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 3"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 3",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 3"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 3",
                view
            });
        });

        sector4JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 4"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 4",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 4"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 4",
                view
            });
        });

        sector5JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 5"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 5",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 5"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 5",
                view
            });
        });

        sector6JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 6"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 6",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 6"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 6",
                view
            });
        });

        sector7JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 7"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 7",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 7"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 7",
                view
            });
        });

        sector8JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 8"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 8",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 8"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 8",
                view
            });
        });

        sector9JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 9"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 9",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 9"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 9",
                view
            });
        });

        sector10JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 10"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 10",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 10"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 10",
                view
            });
        });

        sector11JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 11"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 11",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 11"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 11",
                view
            });
        });

        sector12JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 12"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 12",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 12"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 12",
                view
            });
        });

        sector13JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 13"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 13",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 13"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 13",
                view
            });
        });

        sector14JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 14"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 14",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 14"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 14",
                view
            });
        });

        sector15JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 15"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 15",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 15"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 15",
                view
            });
        });

        sector16JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 16"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 16",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 16"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 16",
                view
            });
        });

        sector17JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 17"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 17",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 17"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 17",
                view
            });
        });

        sector18JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 18"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 18",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 18"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 18",
                view
            });
        });

        sector19JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 19"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 19",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 19"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 19",
                view
            });
        });

        sector20JobsButton.addEventListener("input", (event) => {
            updateButtons({
                button: "sector 20"
            });

            updateRenderer({
                layer: h1m,
                rendererType: "sector 20",
                view
            });

            updatePopupTemplate({
                layer: h1m,
                rendererType: "sector 20"
            });

            updateHotspots({
                layer: hotspots,
                rendererType: "sector 20",
                view
            });
        });

        //Create the format settings for the number on the job display
        const format = convertNumberFormatToIntlOptions({
            places: 0,
            digitSeparator: true
        });

        timeVisibilityBtn.addEventListener("click", toggleTimeOptionsVisibility);

        function toggleTimeOptionsVisibility() {
            infoElement.style.visibility = infoElement.style.visibility === "hidden" ? "visible" : "hidden";

            if(timeVisibilityBtn.classList.contains("esri-icon-dashboard")){
                timeVisibilityBtn.classList.replace("esri-icon-dashboard", "esri-icon-expand");
            } else {
                timeVisibilityBtn.classList.replace("esri-icon-expand", "esri-icon-dashboard");
            }

        }
    }
}) ();
