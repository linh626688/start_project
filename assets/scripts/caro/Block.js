
cc.Class({
    extends: cc.Component,

    properties: {
        blockRadius: 0,


    },
    onClickBlock: function() {
        console.log("radius: "+ blockRadius);

    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // this.onClickBlock();
    },

    // update (dt) {},
});
