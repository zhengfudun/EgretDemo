class MyTimer extends egret.DisplayObjectContainer  {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	 }
	 
	 /*
	 1.2个属性：delay——每隔多少时间执行一次，repeatCount——重复执行次数
	 2.3个方法：start，reset，stop
	 3.2个事件：TimerEvent.TIMER——开始执行触发，TimerEvent.TIMER_COMPLETE——计时结束触发
	 */
	 private onAddToStage(event:egret.Event) {
		 var label:egret.TextField=new egret.TextField();
		 label.text="点击计时开始";
		 label.fontFamily="KaiTi";//字体
		 label.textColor=0x000000;
		 label.width=640;
		 label.height=50;
		 label.textAlign=egret.HorizontalAlign.CENTER;//水平居中
		 this.addChild(label);
		 label.touchEnabled=true;
		 label.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{tm.start();},this)	 

		 var tm:egret.Timer=new egret.Timer(3000,5);
		 tm.addEventListener(egret.TimerEvent.TIMER,this.timerstart,this);
		 tm.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerend,this);
	 }

	 private timerstart(){
		 alert("开始计时");
	 }

	 private timerend(){
		 alert("结束计时");
	 }
}