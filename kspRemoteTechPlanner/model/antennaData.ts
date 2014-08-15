﻿/// <reference path="antenna.ts" />

module AntennaData {
    var antennas: { [index: string]: Antenna } = {
        "Reflectron DP-10": { name: "Reflectron DP-10", type: AntennaType.omni, range: 500, elcConsumption: 0.01 },
        "Communotron 16": { name: "Communotron 16", type: AntennaType.omni, range: 2500, elcConsumption: 0.13 },
        "CommTech EXP-VR-2T": { name: "CommTech EXP-VR-2T", type: AntennaType.omni, range: 3000, elcConsumption: 0.18 },
        "Communotron 32": { name: "Communotron 32", type: AntennaType.omni, range: 5000, elcConsumption: 0.6 },
        "Comms DTS-M1": { name: "Comms DTS-M1", type: AntennaType.dish, range: 50000, elcConsumption: 0.82 },
        "Reflectron KR-7": { name: "Reflectron KR-7", type: AntennaType.dish, range: 90000, elcConsumption: 0.82 }
    };

    export function getAntenna(name: string): Antenna {
        return antennas[name];
    }
}