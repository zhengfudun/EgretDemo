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
var MyEventData = (function (_super) {
    __extends(MyEventData, _super);
    function MyEventData() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MyEventData.prototype.onAddToStage = function (event) {
        var boy = new Boy();
        boy.name = "阿强";
        var girl = new Girl();
        girl.name = "阿珍";
        boy.addEventListener(DataEvent.DATE, girl.getDate, girl);
        boy.order();
        boy.removeEventListener(DataEvent.DATE, girl.getDate, girl);
    };
    return MyEventData;
}(egret.DisplayObjectContainer));
__reflect(MyEventData.prototype, "MyEventData");
//# sourceMappingURL=MyEventData.js.map