class Boy extends egret.Sprite{
	public constructor() {
		super();
	}
	public order(){
		var dataEvent:DataEvent=new DataEvent(DataEvent.DATE);
		dataEvent._year=2018;
		dataEvent._month=10;
		dataEvent._date=18;
		dataEvent._where="绵阳市图书馆"
		dataEvent._todo="一起学习"

		this.dispatchEvent(dataEvent);
	}
}