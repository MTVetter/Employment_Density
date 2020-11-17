import FeatureLayer = require("esri/layers/FeatureLayer");
import Graphic = require("esri/Graphic");

interface StatisticsParams{
    layer: FeatureLayer,
    sector: String
}

let allFeatures: Graphic[] = null;
let allStats = {};

function queryAllFeatures(layer: FeatureLayer){
    const { features } = layer.queryFeatures({
        returnGeometry: false,
        outFields: ["*"],
        maxRecordCountFactor: 2,
        where: "1=1"
    });
    return features;
}

export function getAllStats(params: StatisticsParams){
    const { layer, sector } = params;

    let totalJobs = 0;
    let sector1Jobs = 0;
    let sector2Jobs = 0;
    let sector3Jobs = 0;

    if (!allFeatures){
        allFeatures = queryAllFeatures(layer);
    }

    allFeatures.forEach(feature => {
        const value: string = feature.attributes.sector;
        const jobNumbers = parseInt(value);

        totalJobs += jobNumbers;
    });

    const stats = {
        allJobs: totalJobs
    };
    console.log(stats);

    return stats;
}