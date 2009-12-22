var MainAssistant = function() {};

MainAssistant.prototype = {
    setup: function() {
        this.controller.setupWidget("samples",
                 this.attributes = {
                     itemTemplate: 'main/item-template',
                     listTemplate: 'main/list-template',
                     swipeToDelete: false,
                     reorderable: false
                 },
                 this.model = {
                     listTitle: $L('Samples'),
                     items: [ 
                         { name: 'Simple hard coded HTML',    scene: 'simple' },
                         { name: 'HorizontalScroller Object', scene: 'horizontalscroller' }
                     ]
                 });

        // When tapped push to a scene that represents the sample
        this.controller.listen("samples", Mojo.Event.listTap, function(event) {
            if (event.item.scene) {
                Mojo.Log.info("Pushing Scene: ", event.item.scene);
                Mojo.Controller.stageController.pushScene(event.item.scene);
            }
        });
    },
    
    activate: function(event) {},
    deactivate: function(event) {},
    cleanup: function(event) {}
}

