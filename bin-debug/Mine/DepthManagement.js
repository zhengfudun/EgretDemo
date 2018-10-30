var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DepthManagement = (function (_super) {
    __extends(DepthManagement, _super);
    function DepthManagement() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DepthManagement.prototype.onAddToStage = function () {
        var sprcon = new egret.Sprite();
        this.addChild(sprcon);
        sprcon.x = 10;
        for (var i = 0; i < 4; i++) {
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0xffffff * Math.random());
            spr.graphics.drawRect(0, 0, 100, 100);
            spr.graphics.endFill();
            //spr.x = i*30;
            spr.y = i * 20;
            sprcon.addChild(spr);
        }
        var sprNew = new egret.Sprite();
        sprNew.graphics.beginFill(0xff0000);
        sprNew.graphics.drawRect(0, 0, 150, 150);
        sprNew.graphics.endFill();
        sprNew.x = 50;
        sprNew.y = 5;
        //sprcon.addChild(sprNew);
        sprcon.addChildAt(sprNew, 4);
        /**
         * 容器.swapChildren(显示对象，显示对象)
         * 容器.swapChildrenAt(深度值,深度值)
         */
        //容器.setChildIndex(显示对象,新的深度值)--精准定位
        //sprcon.setChildIndex(sprNew,4);
        //sprcon.swapChildrenAt(1,4);
    };
    return DepthManagement;
}(egret.DisplayObjectContainer));
__reflect(DepthManagement.prototype, "DepthManagement");
//# sourceMappingURL=DepthManagement.js.map