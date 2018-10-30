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
var Music = (function (_super) {
    __extends(Music, _super);
    function Music() {
        var _this = _super.call(this) || this;
        _this.count = 0;
        _this.pauseTime = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Music.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    Music.prototype.onResourceLoadComplete = function (event) {
        this._curSound = new egret.Sound();
        this._curSound = RES.getRes("mh_mp3");
        this._channel = this._curSound.play(0, 1);
        this.drawBtn();
    };
    Music.prototype.drawBtn = function () {
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0xff0000);
        btn.graphics.drawRect(200, 100, 100, 100);
        btn.graphics.endFill();
        btn.width = 100;
        btn.height = 100;
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    Music.prototype.onTouch = function (evt) {
        this.count += 1;
        if (this.count % 2 == 1) {
            this.pauseTime = this._channel.position;
            this._channel.stop();
        }
        else {
            this._channel = this._curSound.play(this.pauseTime, 1);
        }
    };
    return Music;
}(egret.DisplayObjectContainer));
__reflect(Music.prototype, "Music");
//# sourceMappingURL=Music.js.map