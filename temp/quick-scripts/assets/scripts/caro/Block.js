(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/caro/Block.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c1ab0KZyHpNJJACvcEROQ2Z', 'Block', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Block.js.map
        