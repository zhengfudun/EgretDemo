class Music extends egret.DisplayObjectContainer  {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	 }
	 
	 private onAddToStage(event:egret.Event) {
		 RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
		 RES.loadConfig("resource/default.res.json", "resource/");
		 RES.loadGroup("preload");
	 }

	 private _curSound:egret.Sound;
	 private _channel:egret.SoundChannel
	 private onResourceLoadComplete(event:RES.ResourceEvent):void{
		 this._curSound=new egret.Sound();
		 this._curSound=RES.getRes("mh_mp3");
		 this._channel = this._curSound.play(0,1);
		 this.drawBtn();
	 }

	 private drawBtn(){
		 var btn:egret.Sprite=new egret.Sprite();
		 btn.graphics.beginFill(0xff0000);
		 btn.graphics.drawRect(200,100,100,100);
		 btn.graphics.endFill();
		 btn.width=100;
		 btn.height=100;
		 this.addChild(btn);
		 btn.touchEnabled=true;
		 btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
	 }

	 private count:number=0;
	 private pauseTime:number=0;
	 private onTouch(evt:egret.TouchEvent){
		 this.count+=1;
		 if(this.count%2==1){
			 this.pauseTime = this._channel.position;
			 this._channel.stop();
			}
			else{
				this._channel = this._curSound.play(this.pauseTime,1);
			}
				
		 
	 }
}