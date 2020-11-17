define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var allFeatures = null;
    var allStats = {};
    function queryAllFeatures(layer) {
        var features = layer.queryFeatures({
            returnGeometry: false,
            outFields: ["*"],
            maxRecordCountFactor: 2,
            where: "1=1"
        }).features;
        return features;
    }
    function getAllStats(params) {
        var layer = params.layer, sector = params.sector;
        var totalJobs = 0;
        var sector1Jobs = 0;
        var sector2Jobs = 0;
        var sector3Jobs = 0;
        if (!allFeatures) {
            allFeatures = queryAllFeatures(layer);
        }
        allFeatures.forEach(function (feature) {
            var value = feature.attributes.sector;
            var jobNumbers = parseInt(value);
            totalJobs += jobNumbers;
        });
        var stats = {
            allJobs: totalJobs
        };
        console.log(stats);
        return stats;
    }
    exports.getAllStats = getAllStats;
});
//# sourceMappingURL=statistics.js.map