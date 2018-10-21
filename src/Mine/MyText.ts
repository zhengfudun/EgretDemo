class MyText extends egret.DisplayObjectContainer  {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	 }
	 
	 private onAddToStage(event:egret.Event) {
		 var label:egret.TextField=new egret.TextField();
		 label.text="一号文本";
		 label.fontFamily="KaiTi";//字体
		 label.textColor=0x000000;
		 label.width=640;
		 label.textAlign=egret.HorizontalAlign.CENTER;//水平居中
		 this.addChild(label);	 
	 }
}