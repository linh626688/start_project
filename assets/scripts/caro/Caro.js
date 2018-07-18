// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },
    spawnNew: function(){
       var x =0;
       var y = 0;
        for(  i=-7; i< 8 ; i++){
            var a = -7;
            for(  ; a < 8 ; a++){            
                                                                           
                    var spawn = cc.instantiate(this.PreFaps);                                                        
                    this.node.addChild(spawn);                   
                     spawn.getComponent('Block').row=a;
                     spawn.getComponent('Block').col=i;
                     x =a * spawn.width;
                     y = i * spawn. height;
                    spawn.setPosition(this.getNewStarPosition(x,y));                                                                                               
                    this.item.push(spawn);
                    // spawn.getComponent('Block').Game = this;
                    
               
            }                      
        }    
   
    },
    getNewStarPosition: function (randX,randY) {      
        
        return cc.p(randX, randY);
        
        // 返回星星坐标
        
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.spawnNew();
    },

    start () {

    },

    // update (dt) {},
});
