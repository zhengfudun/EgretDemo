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
var Girl = (function (_super) {
    __extends(Girl, _super);
    function Girl() {
        return _super.call(this) || this;
    }
    Girl.prototype.getDate = function (evt) {
        alert(this.name + "收到：" + evt.target.name + "的邀请\n希望在" + evt._year + "年" + evt._month + "月" + evt._date + "日在" + evt._where + evt._todo);
    };
    return Girl;
}(egret.Sprite));
__reflect(Girl.prototype, "Girl");
//# sourceMappingURL=Girl.js.map