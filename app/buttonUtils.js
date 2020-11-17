define(["require", "exports", "./layerUtils", "./rendererUtils"], function (require, exports, layerUtils_1, rendererUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.totalJobsButton = document.getElementById("totalJobs");
    exports.sector1JobsButton = document.getElementById("sector1");
    exports.sector2JobsButton = document.getElementById("sector2");
    exports.sector3JobsButton = document.getElementById("sector3");
    exports.sector4JobsButton = document.getElementById("sector4");
    exports.sector5JobsButton = document.getElementById("sector5");
    exports.sector6JobsButton = document.getElementById("sector6");
    exports.sector7JobsButton = document.getElementById("sector7");
    exports.sector8JobsButton = document.getElementById("sector8");
    exports.sector9JobsButton = document.getElementById("sector9");
    exports.sector10JobsButton = document.getElementById("sector10");
    exports.sector11JobsButton = document.getElementById("sector11");
    exports.sector12JobsButton = document.getElementById("sector12");
    exports.sector13JobsButton = document.getElementById("sector13");
    exports.sector14JobsButton = document.getElementById("sector14");
    exports.sector15JobsButton = document.getElementById("sector15");
    exports.sector16JobsButton = document.getElementById("sector16");
    exports.sector17JobsButton = document.getElementById("sector17");
    exports.sector18JobsButton = document.getElementById("sector18");
    exports.sector19JobsButton = document.getElementById("sector19");
    exports.sector20JobsButton = document.getElementById("sector20");
    exports.countySelect = document.getElementById("county-select");
    function updateButtons(params) {
        var button = params.button;
        switch (button) {
            case "total":
                exports.totalJobsButton.checked = true;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 1":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = true;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 2":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = true;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 3":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = true;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 4":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = true;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 5":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = true;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 6":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = true;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 7":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = true;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 8":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = true;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 9":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = true;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 10":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = true;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 11":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = true;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 12":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = true;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 13":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = true;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 14":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = true;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 15":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = true;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 16":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = true;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 17":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = true;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 18":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = true;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 19":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = true;
                exports.sector20JobsButton.checked = false;
                break;
            case "sector 20":
                exports.totalJobsButton.checked = false;
                exports.sector1JobsButton.checked = false;
                exports.sector2JobsButton.checked = false;
                exports.sector3JobsButton.checked = false;
                exports.sector4JobsButton.checked = false;
                exports.sector5JobsButton.checked = false;
                exports.sector6JobsButton.checked = false;
                exports.sector7JobsButton.checked = false;
                exports.sector8JobsButton.checked = false;
                exports.sector9JobsButton.checked = false;
                exports.sector10JobsButton.checked = false;
                exports.sector11JobsButton.checked = false;
                exports.sector12JobsButton.checked = false;
                exports.sector13JobsButton.checked = false;
                exports.sector14JobsButton.checked = false;
                exports.sector15JobsButton.checked = false;
                exports.sector16JobsButton.checked = false;
                exports.sector17JobsButton.checked = false;
                exports.sector18JobsButton.checked = false;
                exports.sector19JobsButton.checked = false;
                exports.sector20JobsButton.checked = true;
                break;
        }
    }
    exports.updateButtons = updateButtons;
    function checkButtons(view) {
        if (exports.totalJobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "total",
                view: view
            });
        }
        else if (exports.sector1JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 1",
                view: view
            });
        }
        else if (exports.sector2JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 2",
                view: view
            });
        }
        else if (exports.sector3JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 3",
                view: view
            });
        }
        else if (exports.sector4JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 4",
                view: view
            });
        }
        else if (exports.sector5JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 5",
                view: view
            });
        }
        else if (exports.sector6JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 6",
                view: view
            });
        }
        else if (exports.sector7JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 7",
                view: view
            });
        }
        else if (exports.sector8JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 8",
                view: view
            });
        }
        else if (exports.sector9JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 9",
                view: view
            });
        }
        else if (exports.sector10JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 10",
                view: view
            });
        }
        else if (exports.sector11JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 11",
                view: view
            });
        }
        else if (exports.sector12JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 12",
                view: view
            });
        }
        else if (exports.sector13JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 13",
                view: view
            });
        }
        else if (exports.sector14JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 14",
                view: view
            });
        }
        else if (exports.sector15JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 15",
                view: view
            });
        }
        else if (exports.sector16JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 16",
                view: view
            });
        }
        else if (exports.sector17JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 17",
                view: view
            });
        }
        else if (exports.sector18JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 18",
                view: view
            });
        }
        else if (exports.sector19JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 19",
                view: view
            });
        }
        else if (exports.sector20JobsButton.checked) {
            rendererUtils_1.updateRenderer({
                layer: layerUtils_1.h1m,
                rendererType: "sector 20",
                view: view
            });
        }
    }
    exports.checkButtons = checkButtons;
});
//# sourceMappingURL=buttonUtils.js.map