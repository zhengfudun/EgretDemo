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
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super.call(this) || this;
    }
    Boy.prototype.order = function () {
        var dataEvent = new DataEvent(DataEvent.DATE);
        dataEvent._year = 2018;
        dataEvent._month = 10;
        dataEvent._date = 18;
        dataEvent._where = "绵阳市图书馆";
        dataEvent._todo = "一起学习";
        this.dispatchEvent(dataEvent);
    };
    return Boy;
}(egret.Sprite));
__reflect(Boy.prototype, "Boy");
//# sourceMappingURL=Boy.js.map