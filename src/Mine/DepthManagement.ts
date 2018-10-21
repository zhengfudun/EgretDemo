class DepthManagement extends  egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(){
       
        var sprcon:egret.Sprite = new egret.Sprite();
        this.addChild(sprcon);
        sprcon.x =10;
        for(var i:number = 0;i<4;i++){
            var spr:egret.Sprite = new egret.Sprite();
            spr.graphics.beginFill(0xffffff*Math.random());
            spr.graphics.drawRect(0,0,100,100);
            spr.graphics.endFill();
            //spr.x = i*30;
			spr.y = i*20;
            sprcon.addChild(spr);
        }

        var sprNew:egret.Sprite = new egret.Sprite();
        sprNew.graphics.beginFill(0xff0000);
        sprNew.graphics.drawRect(0,0,150,150);
        sprNew.graphics.endFill();
        sprNew.x = 50;
        sprNew.y = 5;
        //sprcon.addChild(sprNew);
        sprcon.addChildAt(sprNew,4);
        /**
         * 容器.swapChildren(显示对象，显示对象)
         * 容器.swapChildrenAt(深度值,深度值)
         */
    	//容器.setChildIndex(显示对象,新的深度值)--精准定位
        //sprcon.setChildIndex(sprNew,4);
		//sprcon.swapChildrenAt(1,4);
    }
}