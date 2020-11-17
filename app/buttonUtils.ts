import { h1m } from "./layerUtils";
import { updateRenderer } from "./rendererUtils";
import MapView = require("esri/views/MapView");

export const totalJobsButton = document.getElementById("totalJobs") as HTMLInputElement;
export const sector1JobsButton = document.getElementById("sector1") as HTMLInputElement;
export const sector2JobsButton = document.getElementById("sector2") as HTMLInputElement;
export const sector3JobsButton = document.getElementById("sector3") as HTMLInputElement;
export const sector4JobsButton = document.getElementById("sector4") as HTMLInputElement;
export const sector5JobsButton = document.getElementById("sector5") as HTMLInputElement;
export const sector6JobsButton = document.getElementById("sector6") as HTMLInputElement;
export const sector7JobsButton = document.getElementById("sector7") as HTMLInputElement;
export const sector8JobsButton = document.getElementById("sector8") as HTMLInputElement;
export const sector9JobsButton = document.getElementById("sector9") as HTMLInputElement;
export const sector10JobsButton = document.getElementById("sector10") as HTMLInputElement;
export const sector11JobsButton = document.getElementById("sector11") as HTMLInputElement;
export const sector12JobsButton = document.getElementById("sector12") as HTMLInputElement;
export const sector13JobsButton = document.getElementById("sector13") as HTMLInputElement;
export const sector14JobsButton = document.getElementById("sector14") as HTMLInputElement;
export const sector15JobsButton = document.getElementById("sector15") as HTMLInputElement;
export const sector16JobsButton = document.getElementById("sector16") as HTMLInputElement;
export const sector17JobsButton = document.getElementById("sector17") as HTMLInputElement;
export const sector18JobsButton = document.getElementById("sector18") as HTMLInputElement;
export const sector19JobsButton = document.getElementById("sector19") as HTMLInputElement;
export const sector20JobsButton = document.getElementById("sector20") as HTMLInputElement;

export const countySelect = document.getElementById("county-select") as HTMLSelectElement;

export interface ButtonUpdateParams{
    button: "total" | "sector 1" | "sector 2" | "sector 3" | "sector 4" | "sector 5" |
    "sector 6" | "sector 7" | "sector 8" | "sector 9" | "sector 10" | "sector 11" |
    "sector 12" | "sector 13" | "sector 14" | "sector 15" | "sector 16" | "sector 17" |
    "sector 18" | "sector 19" | "sector 20"
}

export function updateButtons(params: ButtonUpdateParams){
    const { button } = params;

    switch (button){
        case "total":
            totalJobsButton.checked = true;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 1":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = true;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 2":
            totalJobsButton.checked = false
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = true;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 3":
            totalJobsButton.checked = false
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = true;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 4":
            totalJobsButton.checked = false
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = true;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 5":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = true;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 6":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = true;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 7":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = true;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 8":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = true;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 9":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = true;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 10":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = true;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 11":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = true;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 12":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = true;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 13":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = true;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 14":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = true;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 15":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = true;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 16":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = true;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 17":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = true;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 18":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = true;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = false;
            break;
        case "sector 19":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = true;
            sector20JobsButton.checked = false;
            break;
        case "sector 20":
            totalJobsButton.checked = false;
            sector1JobsButton.checked = false;
            sector2JobsButton.checked = false;
            sector3JobsButton.checked = false;
            sector4JobsButton.checked = false;
            sector5JobsButton.checked = false;
            sector6JobsButton.checked = false;
            sector7JobsButton.checked = false;
            sector8JobsButton.checked = false;
            sector9JobsButton.checked = false;
            sector10JobsButton.checked = false;
            sector11JobsButton.checked = false;
            sector12JobsButton.checked = false;
            sector13JobsButton.checked = false;
            sector14JobsButton.checked = false;
            sector15JobsButton.checked = false;
            sector16JobsButton.checked = false;
            sector17JobsButton.checked = false;
            sector18JobsButton.checked = false;
            sector19JobsButton.checked = false;
            sector20JobsButton.checked = true;
            break;
    }
}

export function checkButtons(view: MapView){
    if (totalJobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "total",
            view
        });
    } else if (sector1JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 1",
            view
        });
    } else if (sector2JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 2",
            view
        });
    } else if (sector3JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 3",
            view
        });
    } else if (sector4JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 4",
            view
        });
    } else if (sector5JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 5",
            view
        });
    } else if (sector6JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 6",
            view
        });
    } else if (sector7JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 7",
            view
        });
    } else if (sector8JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 8",
            view
        });
    } else if (sector9JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 9",
            view
        });
    } else if (sector10JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 10",
            view
        });
    } else if (sector11JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 11",
            view
        });
    } else if (sector12JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 12",
            view
        });
    } else if (sector13JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 13",
            view
        });
    } else if (sector14JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 14",
            view
        });
    } else if (sector15JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 15",
            view
        });
    } else if (sector16JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 16",
            view
        });
    } else if (sector17JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 17",
            view
        });
    } else if (sector18JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 18",
            view
        });
    } else if (sector19JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 19",
            view
        });
    } else if (sector20JobsButton.checked){
        updateRenderer({
            layer: h1m,
            rendererType: "sector 20",
            view
        });
    }
}