﻿/// <reference path="../references.ts" />

class BodyData extends CookieConnector {
    'use strict';

    private static cookieKey: string = "userBody";

    stockBodies: { [index: string]: Body } = {
        "Kerbol": new Body("Kerbol", "rgb(255,242,0)", 261600, 1172332800, Number.POSITIVE_INFINITY),
        "Moho": new Body("Moho", "rgb(185,122,87)", 250, 168.60938, 9646.663),
        "Eve": new Body("Eve", "rgb(163,73,164)", 700, 8171.7302, 85109.365),
        "Gilly": new Body("Gilly", "rgb(239,228,176)", 13, 0.0082894498, 126.12327),
        "Kerbin": new Body("Kerbin", "rgb(63,111,40)", 600, 3531.6, 84159.286),
        "Mun": new Body("Mun", "rgb(127,127,127)", 200, 65.138398, 2429.5591),
        "Minmus": new Body("Minmus", "rgb(153,217,234)", 60, 1.7658, 2247.4284),
        "Duna": new Body("Duna", "rgb(237,28,36)", 320, 301.36321, 47921.949),
        "Ike": new Body("Ike", "rgb(127,127,127)", 130, 18.568369, 1049.5989),
        "Dres": new Body("Dres", "rgb(195,195,195)", 138, 21.484489, 32832.84),
        "Jool": new Body("Jool", "rgb(92,231,58)", 6000, 282528, 2455985.2),
        "Laythe": new Body("Laythe", "rgb(25,55,98)", 500, 1962, 3723.6458),
        "Vall": new Body("Vall", "rgb(82,133,141)", 300, 207.48150, 2406.4014),
        "Tylo": new Body("Tylo", "rgb(195,195,195)", 600, 4523.8934, 10856.518),
        "Bop": new Body("Bop", "rgb(142,106,51)", 65, 2.4868349, 1221.0609),
        "Pol": new Body("Pol", "rgb(206,211,1)", 44, 0.72170208, 1042.1389),
        "Eeloo": new Body("Eeloo", "rgb(221,221,210)", 210, 74.410815, 119082.94)
    };
    userBodies: { [index: string]: Body } = {};

    constructor() {
        super(BodyData.cookieKey);
    }

    getBody(name: string): Body {
        var b: Body = this.stockBodies[name];
        if (b == undefined) b = this.userBodies[name];
        return b;
    }

    save() {
        this.saveCookie(this.userBodies);
    }

    load(): boolean {
        this.userBodies = this.loadCookie();
        if (this.userBodies == undefined) {
            this.userBodies = {};
            return false;
        } else {
            return true;
        }
    }
}