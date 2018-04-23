/**
 * 游戏主场景 
 */
class GameStage extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
	}

	/** 序列帧皮肤部件 */
	public helloMove:BitmapMovie;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.createMask();
		this.createBitmapMovie();
	}

	/**
	 * 添加到舞台上时
	 */
	private onAddedToStage() {
		this.setChildIndex(this.helloMove, this.numChildren -1);
		this.helloMove.play();

		// Notice: 模拟关闭
		setTimeout(() => {
				this.helloMove.stop();
				console.log('关闭序列帧');
		}, 15000);
	}

	/**
	 * 创建遮罩层 
	 */
	private createMask() {
		let stageW:number = this.stage.stageWidth;
		let stageH:number = this.stage.stageHeight;
		let topMask = new egret.Shape();
		topMask.graphics.beginFill(0x000000, 0.5);
		topMask.graphics.drawRect(0, 0, stageW, stageH);
		topMask.graphics.endFill();
		this.addChild(topMask);
	}

	/**
	 * 创建纹理动画层 
	 */
	private createBitmapMovie() {
		// notice: 
		// '奖励动画9' 是序列帧图片名字前缀。例如: '奖励动画90001.png'
		// 'png' 图片的格式
		// 130  序列帧图片的数量
		this.helloMove.initByTile('奖励动画9', 'png', 130);
	}

}