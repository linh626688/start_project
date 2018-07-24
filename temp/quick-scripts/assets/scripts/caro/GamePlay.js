(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/caro/GamePlay.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '32f91WLy3lHQLxoP8huq9mt', 'GamePlay', __filename);
// scripts/caro/GamePlay.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        table_1: cc.Node,
        table_2: cc.Node
    },
    spawnNew: function spawnNew() {

        var x = 0;
        var y = 0;
        for (var i = -7; i < 8; i++) {
            for (var a = -7; a < 8; a++) {

                var spawn = cc.instantiate(this.blockPrefab);
                this.node.addChild(spawn);
                spawn.getComponent('Block').row = a;
                spawn.getComponent('Block').col = i;
                x = a * spawn.width;
                y = i * spawn.height;
                spawn.setPosition(this.getNewBlockPosition(x, y));
                // this.table.push(spawn);
                spawn.getComponent('Block').GamePlay = this;
            }
        }
    },
    getNewBlockPosition: function getNewBlockPosition(randX, randY) {

        return cc.p(randX, randY);
    },
    addTouchListernerTable: function addTouchListernerTable(table) {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var rect = table.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rect, event.getLocation())) {
                var star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(event.getLocation().x - 480, event.getLocation().y - 320));
                this.node.addChild(star);

                // let allChildren = this.table.getChildren();                        
                // cc.log(rect);
                // let ls
                // for(let i = 0; i < allChildren.length; i++){
                //     let rect = allChildren[i].getBoundingBoxToWorld();    
                //     if (cc.rectContainsPoint(rect, event.getLocation())) {
                //         cc.log(allChildren[i].getName());
                //         return true;
                // }
            }
        }, this);
    },
    onLoad: function onLoad() {
        this.addTouchListernerTable(this.table_1);

        this.addTouchListernerTable(this.table_2);
    },
    start: function start() {
        // this.addTouchList)erner();
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
        //# sourceMappingURL=GamePlay.js.map
        