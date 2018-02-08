var AnimaHandCard = require("AnimaHandCard");

cc.Class({
    extends: cc.Component,

    properties: {
          CardPf: {
		  	  default: null,
			  type: cc.Prefab
		  },
		  _CtrlerCharacter: {
		  	  default: null,
			  type: cc.Node
		  },
		  _HandCardLayer: {
		  	  default: null,
			  type: cc.Node
		  },
		  _handCardList: {
		  	  default: [],
			  type: [cc.Node]
		  }
    },
	drawCard() {
		// instantiate hand card and store
		var cardName = this.CtrlerCharacter.getComponent("CtrlerCharacter").drawCard();
		console.log("<CtrlerFight.js> Msg: draw Card: " + cardName);
		var card = cc.instantiate(this.CardPf);
		var animaHandCard = card.addComponent(AnimaHandCard);
		card.getComponent("InfoCard").set(cardName);
		animaHandCard._handCardList = this._handCardList;
		this._handCardList.push(card);
		card.parent = this.HandCardLayer;
	},


    start () {
		this.CtrlerCharacter = cc.find("Canvas/ScriptLayer/CtrlerCharacter");
		this.HandCardLayer = cc.find("Canvas/HandCardLayer");
		var drawInterval = 0.3;
		var drawCardCount = 5 - this._handCardList.length;
		this.schedule( this.drawCard, drawInterval, drawCardCount, 0.01);
		//this.drawCard();
    },

    update (dt) {
		
	},

	
});
