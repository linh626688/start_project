"use strict";
cc._RF.push(module, '32f91WLy3lHQLxoP8huq9mt', 'GamePlay');
// scripts/caro/GamePlay.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        table: {
            default: [],
            type: cc.Prefab
        }
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
                x = a * spawn.width / 2.5;
                y = i * spawn.height / 3;
                spawn.setPosition(this.getNewBlockPosition(x, y));
                this.table.push(spawn);
                spawn.getComponent('Block').GamePlay = this;
            }
        }
    },
    getNewBlockPosition: function getNewBlockPosition(randX, randY) {

        return cc.p(randX, randY);
    },

    onLoad: function onLoad() {
        // this.table = 
        this.spawnNew();
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();