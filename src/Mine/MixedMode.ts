class MixedMode extends egret.DisplayObjectContainer  {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	 }
	 
	 private onAddToStage(event:egret.Event) {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.init,this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	 }

	 private init(){
		 var pic2:egret.Bitmap=new egret.Bitmap();
		 pic2.texture=RES.getRes("66218658_p0_png");
		 pic2.width=640;
		 pic2.height=940;
		 this.addChild(pic2);

		 var pic1:egret.Bitmap=new egret.Bitmap();
		 //pic1.texture=RES.getRes("egret_icon_png");
		 pic1.texture=RES.getRes("on_png");
		 this.addChild(pic1);
		 pic1.width=640;
		 pic1.height=940;
		 //pic1.blendMode=egret.BlendMode.NORMAL;//普通模式，透明显示，非透明遮盖
		 //pic1.blendMode=egret.BlendMode.ADD;//混合模式，颜色值叠加，上限为白
		 pic1.blendMode=egret.BlendMode.ERASE;//擦除模式，非透明部分擦除
	 }
}