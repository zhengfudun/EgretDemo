class MaskAndCollider extends egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.myMask,this);
		this.touchEnabled=true;
    }
    private myMask(){
		//第一组，普通物品层级遮罩
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
		shp.graphics.drawRect(0,0,100,100);
		shp.graphics.endFill();
		this.addChild(shp);

		var shp1:egret.Shape = new egret.Shape();
        shp1.graphics.beginFill(0x00ff00,0.6);
		shp1.graphics.drawCircle(50,50,30);
		shp1.graphics.endFill();
		this.addChild(shp1);

		//第二组，Mask遮罩
        var shp2:egret.Shape = new egret.Shape();
        shp2.graphics.beginFill(0xff0000);
		shp2.graphics.drawRect(0,0,100,100);
		shp2.graphics.endFill();
		shp2.x=150;
		this.addChild(shp2);

		var rect:egret.Rectangle=new egret.Rectangle(20,20,60,60);
		shp2.mask=rect;

		//物品一碰撞检测
		var txt:egret.TextField=new egret.TextField();
		txt.width=640;
		txt.textColor=0x000000;
		txt.textAlign=egret.HorizontalAlign.CENTER;
		txt.y=500;
		txt.text="点击左上物体检测是否碰撞"
		this.addChild(txt);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			if(shp.hitTestPoint(e.stageX,e.stageY,true))//精准碰撞，添加透明度检查
			{txt.text="碰上了";}
			else{txt.text="没碰上";}
		},this);

		//碰撞盒检测
		var shp3:egret.Shape=new egret.Shape();
		shp3.graphics.beginFill(0xff0000);
		shp3.graphics.drawRect(0,250,50,50);
		shp3.graphics.endFill();
		this.addChild(shp3);

		var shp4:egret.Shape=new egret.Shape();
		shp4.graphics.beginFill(0x00ff00);
		shp4.graphics.drawRect(25,275,50,50);
		shp4.graphics.endFill();
		this.addChild(shp4);

		var rect1:egret.Rectangle=new egret.Rectangle(shp3.x,shp3.y,shp3.width,shp3.height);
		var rect2:egret.Rectangle=new egret.Rectangle(shp4.x,shp4.y,shp4.width,shp4.height);

		var txt2:egret.TextField=new egret.TextField();
		txt2.width=640;
		txt2.textColor=0x000000;
		txt2.textAlign=egret.HorizontalAlign.CENTER;
		txt2.y=600;
		txt2.text=""+rect1.intersects(rect2);
		this.addChild(txt2);
		
    }
}