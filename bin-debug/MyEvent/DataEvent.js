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
var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent(type, bulles, cancelable) {
        if (bulles === void 0) { bulles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bulles, cancelable) || this;
        _this._year = 0;
        _this._month = 0;
        _this._date = 0;
        _this._where = "";
        _this._todo = "";
        return _this;
    }
    DataEvent.DATE = "约会";
    return DataEvent;
}(egret.Event));
__reflect(DataEvent.prototype, "DataEvent");
//# sourceMappingURL=DataEvent.js.map