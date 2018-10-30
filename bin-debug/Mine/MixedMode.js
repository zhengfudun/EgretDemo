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
var MixedMode = (function (_super) {
    __extends(MixedMode, _super);
    function MixedMode() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MixedMode.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.init, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    MixedMode.prototype.init = function () {
        var pic2 = new egret.Bitmap();
        pic2.texture = RES.getRes("66218658_p0_png");
        pic2.width = 640;
        pic2.height = 940;
        this.addChild(pic2);
        var pic1 = new egret.Bitmap();
        //pic1.texture=RES.getRes("egret_icon_png");
        pic1.texture = RES.getRes("on_png");
        this.addChild(pic1);
        pic1.width = 640;
        pic1.height = 940;
        //pic1.blendMode=egret.BlendMode.NORMAL;//普通模式，透明显示，非透明遮盖
        //pic1.blendMode=egret.BlendMode.ADD;//混合模式，颜色值叠加，上限为白
        pic1.blendMode = egret.BlendMode.ERASE; //
    };
    return MixedMode;
}(egret.DisplayObjectContainer));
__reflect(MixedMode.prototype, "MixedMode");
//# sourceMappingURL=MixedMode.js.map