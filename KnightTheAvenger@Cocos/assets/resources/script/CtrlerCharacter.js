var InfoCharacter = require("InfoCharacter");

cc.Class({
    extends: cc.Component,

    properties: {
		_charc: {
        	default: null,
        	type: InfoCharacter
		},
		_hand: [cc.String],
		_deck: [cc.String],
		_grave: [cc.String],
		_buff: [cc.String],
		_equip: [cc.String],
		_LPBns: cc.Integer,
		_strBns: cc.Integer,
		_agiBns: cc.Integer,
		_manBns: cc.Integer,
		_LPCur: cc.Integer,
		_agiCur: cc.Integer,
		_manCur: cc.Integer,
    },

	onLoad () {
    	var self = this;
    	for(var i=0; i<10; i++)
    		this._deck.push("kill");
		console.log("<CtrlerCharacter.js> Msg: Put Card finish");
    },

    update (dt) {
    },
    
	// draw a card
    drawCard() {
    	// deck card run out
    	if(!this._deck.length) {
			for(var i=0; i<this._grave.length; i++) {
				this._deck.push(this._grave.pop());
			}
			this.suffleDeck();
		}

		// draw a card into hand
		var cardName = this._deck.pop();
		this._hand.push(cardName);
		console.log("<CtrlerCharacter.js> Msg: draw " + cardName);
		return cardName;
    },

	playCard() {
	},

	disCard() {
	},

	suffleDeck() {
		for(var i=0; i<this._hand.length; i++) {
			// get random position and swap
			var rnd = Math.floor( Math.random()*(this._hand.length-i) );
			var sw = this._hand[rnd];
			this._hand[rnd] = this._hand[i];
			this._hand[i] = sw;
		}
	}
});
