

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        table: cc.Node,
    },
    spawnNew: function () {

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
    getNewBlockPosition: function (randX, randY) {

        return cc.p(randX, randY);

    },
    addTouchListerner() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            let rect = this.table.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rect, event.getLocation())) {
                let star = cc.instantiate(this.blockPrefab);
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
    onLoad() {
        // this.table = 
        // console.log("vao day");
        // this.spawnNew();
        // this.registerInput();
        this.addTouchListerner();
    },

    start() {
        // this.addTouchList)erner();
    },

    // update (dt) {},
});
