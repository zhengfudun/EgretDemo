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
var MyTimer = (function (_super) {
    __extends(MyTimer, _super);
    function MyTimer() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    /*
    1.2个属性：delay——每隔多少时间执行一次，repeatCount——重复执行次数
    2.3个方法：start，reset，stop
    3.2个事件：TimerEvent.TIMER——开始执行触发，TimerEvent.TIMER_COMPLETE——计时结束触发
    */
    MyTimer.prototype.onAddToStage = function (event) {
        var label = new egret.TextField();
        label.text = "点击计时开始";
        label.fontFamily = "KaiTi"; //字体
        label.textColor = 0x000000;
        label.width = 640;
        label.height = 50;
        label.textAlign = egret.HorizontalAlign.CENTER; //水平居中
        this.addChild(label);
        label.touchEnabled = true;
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { tm.start(); }, this);
        var tm = new egret.Timer(3000, 5);
        tm.addEventListener(egret.TimerEvent.TIMER, this.timerstart, this);
        tm.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerend, this);
    };
    MyTimer.prototype.timerstart = function () {
        alert("开始计时");
    };
    MyTimer.prototype.timerend = function () {
        alert("结束计时");
    };
    return MyTimer;
}(egret.DisplayObjectContainer));
__reflect(MyTimer.prototype, "MyTimer");
//# sourceMappingURL=MyTimer.js.map