"use strict";
cc._RF.push(module, '32f91WLy3lHQLxoP8huq9mt', 'GamePlay');
// scripts/caro/GamePlay.js

"use strict";

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
    getNewBlockPosition: function getNewBlockPosition(randX, randY) {

        return cc.p(randX, randY);
    },
    addTouchListernerTableFirst: function addTouchListernerTableFirst() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var rect = this.table_1.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rect, event.getLocation())) {
                var star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(event.getLocation().x - 480, event.getLocation().y - 320));
                this.node.addChild(star);
                console.log("star 1", star.getPosition());

                var star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(event.getLocation().x - 480, event.getLocation().y));
                this.node.addChild(star2);
                console.log("star 2", star2.getPosition());
            }
        }, this);
    },
    addTouchListernerTableSecond: function addTouchListernerTableSecond() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var rect = this.table_2.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rect, event.getLocation())) {
                var star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(event.getLocation().x - 480, event.getLocation().y - 320));
                this.node.addChild(star);

                var star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(event.getLocation().x - 480, event.getLocation().y - 640));
                this.node.addChild(star2);
            }
        }, this);
    },
    onLoad: function onLoad() {
        this.addTouchListernerTableFirst();
        this.addTouchListernerTableSecond();
    },
    start: function start() {
        // this.addTouchList)erner();
    }
}

// update (dt) {},
);

cc._RF.pop();