"use strict";
cc._RF.push(module, 'c1ab0KZyHpNJJACvcEROQ2Z', 'Block');
// scripts/caro/Block.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        blockRadius: 0

    },
    onClickBlock: function onClickBlock() {
        console.log("radius: " + blockRadius);
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        // this.onClickBlock();
    }
}

// update (dt) {},
);

cc._RF.pop();