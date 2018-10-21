class MyEventData extends egret.DisplayObjectContainer  {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	 }
	 
	 private onAddToStage(event:egret.Event) {
		 var boy:Boy=new Boy();
		 boy.name="阿强";
		 var girl:Girl=new Girl();
		 girl.name="阿珍";
		 boy.addEventListener(DataEvent.DATE,girl.getDate,girl);
		 boy.order();
		 boy.removeEventListener(DataEvent.DATE,girl.getDate,girl);
	 }
}