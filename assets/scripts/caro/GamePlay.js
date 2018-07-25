

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        table_1: cc.Node,
        table_2: cc.Node,
    },
    getNewBlockPosition: function (randX, randY) {

        return cc.p(randX, randY);

    },
    addTouchListernerTableFirst() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            let rect = this.table_1.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rect, event.getLocation())) {
                let star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(event.getLocation().x - 480, event.getLocation().y - 320));
                this.node.addChild(star);
                console.log("star 1" ,star.getPosition());

                let star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(event.getLocation().x - 480 , event.getLocation().y));
                this.node.addChild(star2);
                console.log("star 2" ,star2.getPosition())
            }
        }, this);
    },
    addTouchListernerTableSecond() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            let rect = this.table_2.getBoundingBoxToWorld();
            if (cc.rectContainsPoint(rect, event.getLocation())) {
                let star = cc.instantiate(this.blockPrefab);
                star.setPosition(cc.v2(event.getLocation().x - 480  , event.getLocation().y - 320));
                this.node.addChild(star);

                let star2 = cc.instantiate(this.blockPrefab);
                star2.setPosition(cc.v2(event.getLocation().x- 480 , event.getLocation().y - 640 ));
                this.node.addChild(star2);
            }
        }, this);
    },
    onLoad() {
        this.addTouchListernerTableFirst();
        this.addTouchListernerTableSecond();
    },

    start() {
        // this.addTouchList)erner();
    },

    // update (dt) {},
});
