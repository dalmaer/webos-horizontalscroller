var SimpleAssistant = function() {};

SimpleAssistant.prototype = {
    setup: function() {
    	this.controller.setupWidget("scrollerId", {
                   mode: 'horizontal-snap'
               }, this.model = {
                   snapElements: { x: $$('.scrollerItem') },
                   snapIndex: 0
               }
        );

    	this.controller.listen("scrollerId", Mojo.Event.scrollStarting, this.handleUpdate.bindAsEventListener(this));
    },
    
    handleMoved: function(done, position) {
        if (done) Mojo.Log.info("Done: ", done, "Position: ", Object.toJSON(position));
    },

    handleUpdate: function(event) {
        event.addListener({                                                    
                moved: this.handleMoved                         
        });
    },
    
    activate: function(event) {},
    deactivate: function(event) {},
    cleanup: function(event) {}
}