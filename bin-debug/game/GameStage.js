var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏主场景
 */
var GameStage = (function (_super) {
    __extends(GameStage, _super);
    function GameStage() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddedToStage, _this);
        return _this;
    }
    GameStage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameStage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.createMask();
        this.createBitmapMovie();
    };
    /**
     * 添加到舞台上时
     */
    GameStage.prototype.onAddedToStage = function () {
        var _this = this;
        this.setChildIndex(this.helloMove, this.numChildren - 1);
        this.helloMove.play();
        // Notice: 模拟关闭
        setTimeout(function () {
            _this.helloMove.stop();
            console.log('关闭序列帧');
        }, 15000);
    };
    /**
     * 创建遮罩层
     */
    GameStage.prototype.createMask = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        this.addChild(topMask);
    };
    /**
     * 创建纹理动画层
     */
    GameStage.prototype.createBitmapMovie = function () {
        // notice: 
        // '奖励动画9' 是序列帧图片名字前缀。例如: '奖励动画90001.png'
        // 'png' 图片的格式
        // 130  序列帧图片的数量
        this.helloMove.initByTile('奖励动画9', 'png', 130);
    };
    return GameStage;
}(eui.Component));
__reflect(GameStage.prototype, "GameStage", ["eui.UIComponent"]);
//# sourceMappingURL=GameStage.js.map