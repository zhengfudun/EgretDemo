class Girl extends egret.Sprite{
	public constructor() {
		super();
	}

	public getDate(evt:DataEvent):void{
		alert(this.name+"收到："+evt.target.name+"的邀请\n希望在"+evt._year+"年"+evt._month+"月"+evt._date+"日在"+evt._where+evt._todo);
	}
}