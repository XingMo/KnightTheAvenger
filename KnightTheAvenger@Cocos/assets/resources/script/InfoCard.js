var Ability = require("Ability");
cc.Class({
    extends: cc.Component,

    properties: {
    	cardName: cc.String,
        spriteFrame: {
        	default: null,
        	type: cc.SpriteFrame
        },
        ability: {
        	default: null,
        	type: Ability
        }
    },
    
    start() {
    },
    
    update(dt) {
    },
    
    set: function(name) {
    	var self = this;
    	
    	// save card name
    	self.cardName = name;
    	
    	// load card sprite
    	if(this.spriteFrame == null) {
    		cc.loader.loadRes("card/"+name, cc.SpriteFrame, function(err, spriteFrame) {
    			self.spriteFrame = spriteFrame;
    			var sprite = self.node.getComponent(cc.Sprite);
    			if(sprite) {
    				sprite.spriteFrame = spriteFrame;
    			}
    			else {
    				console.log("<Card.js> Err: Sprite Component failed");
    			}
    		});
    	}
    	
    	// load card ability
    	/*if(ability == null) {
    		cc.loader.loadRes("ability/card_"+name, function(err, ability) {
    			self.ability = ability;
    		});
    	}*/
    	return this;
    }
});
