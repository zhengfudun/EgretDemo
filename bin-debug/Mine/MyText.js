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
var MyText = (function (_super) {
    __extends(MyText, _super);
    function MyText() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MyText.prototype.onAddToStage = function (event) {
        var label = new egret.TextField();
        label.text = "一号文本";
        label.fontFamily = "KaiTi"; //字体
        label.textColor = 0x000000;
        label.width = 640;
        label.textAlign = egret.HorizontalAlign.CENTER; //水平居中
        this.addChild(label);
    };
    return MyText;
}(egret.DisplayObjectContainer));
__reflect(MyText.prototype, "MyText");
//# sourceMappingURL=MyText.js.map