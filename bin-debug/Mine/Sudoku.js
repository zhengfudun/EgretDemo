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
var Sudoku = (function (_super) {
    __extends(Sudoku, _super);
    function Sudoku() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddtoStage, _this);
        return _this;
    }
    Sudoku.prototype.onAddtoStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.addImage, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    Sudoku.prototype.addImage = function () {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("on_png");
        console.log("X=" + img.width + "   Y=" + img.height);
        img.width *= 2;
        img.height *= 2;
        this.addChild(img);
        var img1 = new egret.Bitmap();
        img1.texture = RES.getRes("on_png");
        img1.width *= 4;
        img1.height *= 4;
        img1.y = 100;
        this.addChild(img1);
        var img2 = new egret.Bitmap();
        img2.texture = RES.getRes("on_png");
        var rect = new egret.Rectangle(12, 12, 20, 3);
        img2.scale9Grid = rect;
        img2.width *= 8;
        img2.height *= 6;
        img2.y = 400;
        this.addChild(img2);
        var img3 = new egret.Bitmap();
        img3.texture = RES.getRes("on_png");
        img3.fillMode = egret.BitmapFillMode.REPEAT; //图片平铺填充
        img3.width *= 6;
        img3.height *= 6;
        img3.y = 700;
        this.addChild(img3);
    };
    return Sudoku;
}(egret.DisplayObjectContainer));
__reflect(Sudoku.prototype, "Sudoku");
//# sourceMappingURL=Sudoku.js.map