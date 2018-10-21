class Sudoku extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddtoStage,this);
	}
	private onAddtoStage(event:egret.Event){
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.addImage,this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	}
	private addImage(){
		var img:egret.Bitmap=new egret.Bitmap();
		img.texture=RES.getRes("on_png");
		console.log("X="+img.width+"   Y="+img.height);
		img.width*=2;
		img.height*=2;
		this.addChild(img);

		var img1:egret.Bitmap=new egret.Bitmap();
		img1.texture=RES.getRes("on_png");
		img1.width*=4;
		img1.height*=4;
		img1.y=100;
		this.addChild(img1);

		var img2:egret.Bitmap=new egret.Bitmap();
		img2.texture=RES.getRes("on_png");
		var rect:egret.Rectangle=new egret.Rectangle(12,12,20,3);
		img2.scale9Grid=rect;
		img2.width*=8;
		img2.height*=6;
		img2.y=400;
		this.addChild(img2);

		var img3:egret.Bitmap=new egret.Bitmap();
		img3.texture=RES.getRes("on_png");
		img3.fillMode=egret.BitmapFillMode.REPEAT;//图片平铺填充
		img3.width*=6;
		img3.height*=6;
		img3.y=700;
		this.addChild(img3);
	}
}