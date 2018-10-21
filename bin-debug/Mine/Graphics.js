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
var Graphics = (function (_super) {
    __extends(Graphics, _super);
    function Graphics() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Graphics.prototype.onAddToStage = function (event) {
        //矩形
        var shp = new egret.Shape();
        shp.graphics.beginFill(0Xff0000, 0.5); //颜色，透明度
        shp.graphics.lineStyle(3, 0X000f0); //外边框
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        this.addChild(shp);
        //圆
        var shp1 = new egret.Shape();
        shp1.graphics.beginFill(0Xff0000, 0.5); //颜色，透明度
        shp1.graphics.lineStyle(3, 0X000f0); //外边框
        shp1.graphics.drawCircle(100, 200, 50);
        shp1.graphics.endFill();
        this.addChild(shp1);
        //线段
        var line = new egret.Shape();
        line.graphics.lineStyle(3, 0X000f0); //线粗，颜色
        line.graphics.moveTo(0, 300);
        line.graphics.lineTo(50, 300);
        line.graphics.lineTo(50, 350);
        line.graphics.lineTo(100, 350);
        line.graphics.lineTo(100, 400);
        line.graphics.endFill();
        this.addChild(line);
        //贝塞尔曲线
        var bsr = new egret.Shape();
        bsr.graphics.lineStyle(3, 0Xff0ff); //线粗，颜色
        bsr.graphics.moveTo(100, 450);
        bsr.graphics.curveTo(300, 500, 700, 400); //曲线由3个点组成p0为原始点（p1X,p1Y,p2x,p2y）
        bsr.graphics.endFill();
        this.addChild(bsr);
    };
    return Graphics;
}(egret.DisplayObjectContainer));
__reflect(Graphics.prototype, "Graphics");
//# sourceMappingURL=Graphics.js.map