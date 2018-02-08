
cc.Class({
    extends: cc.Component,

    properties: {
		_handCardList: [],
        _sizeInit: 0.2,
		_sizeNorm: 0.5,
		_sizeLarg: 0.6
    },

    onLoad () {
		this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
		this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
		this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
		// set initial position
		this.node.setPosition(0, 0);
		this.node.setScale(this._sizeInit);
	},

    start () {
		this.actionMoveBack();
    },

    update (dt) {
	
	},

	onTouchStart( event ) {
		this.node.setScale(this._sizeLarg);
	},

	onTouchMove( event ) {
		var delta = event.getDelta();
		this.node.x += delta.x;
		this.node.y += delta.y;
	},

	onTouchEnd( event ) {
		this.actionMoveBack();
	},

	actionMoveBack() {
		// card move back animation
		var speed = 0.3;
		var cardId = this._handCardList.indexOf(this.node);
		var action = cc.spawn(cc.scaleTo(speed, this._sizeNorm), cc.moveTo(speed, cardId*100, 0));
		console.log("<AnimaHandCard.js> Msg: cardId = " + cardId);
		this.node.runAction(action);
	}
});
