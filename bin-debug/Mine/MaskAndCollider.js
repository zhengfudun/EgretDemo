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
var MaskAndCollider = (function (_super) {
    __extends(MaskAndCollider, _super);
    function MaskAndCollider() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.myMask, _this);
        _this.touchEnabled = true;
        return _this;
    }
    MaskAndCollider.prototype.myMask = function () {
        //第一组，普通物品层级遮罩
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        this.addChild(shp);
        var shp1 = new egret.Shape();
        shp1.graphics.beginFill(0x00ff00, 0.6);
        shp1.graphics.drawCircle(50, 50, 30);
        shp1.graphics.endFill();
        this.addChild(shp1);
        //第二组，Mask遮罩
        var shp2 = new egret.Shape();
        shp2.graphics.beginFill(0xff0000);
        shp2.graphics.drawRect(0, 0, 100, 100);
        shp2.graphics.endFill();
        shp2.x = 150;
        this.addChild(shp2);
        var rect = new egret.Rectangle(20, 20, 60, 60);
        shp2.mask = rect;
        var txt = new egret.TextField();
        txt.width = 640;
        txt.textColor = 0x000000;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.y = 500;
        txt.text = "点击左上物体检测是否碰撞";
        this.addChild(txt);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (shp.hitTestPoint(e.stageX, e.stageY, true)) {
                txt.text = "碰上了";
            }
            else {
                txt.text = "没碰上";
            }
        }, this);
    };
    return MaskAndCollider;
}(egret.DisplayObjectContainer));
__reflect(MaskAndCollider.prototype, "MaskAndCollider");
//# sourceMappingURL=MaskAndCollider.js.map