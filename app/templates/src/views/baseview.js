;(function(App, Backbone, _, $){

//
// Home Page
//
App.Baseview = Backbone.Layout.extend({
    

    serialize: function() {
        log('Serialize baseview', this.options);
        if(this.options && this.options.page){
            return _.clone(this.options);
        }
    },

    beforeRender: function() {
        log('Before Render baseview');
    },

    initialize: function(options) {
        // this.constructor.__super__.initialize.apply(this, [options])
        log('Baseview initialize');
        this.render();
    },

    afterRender: function(){
        log('section rendered...', this.$el.selector);
        App.vent.trigger('sectionLoaded', this.$el.selector);
    },

    destroy_view: function() {
        log(this.$el);

        // remove 'loaded' class
        this.$el.removeClass('loaded')

        //COMPLETELY UNBIND THE VIEW
        this.undelegateEvents();

        this.$el.removeData().unbind(); 

        //Remove view from DOM
        // this.remove();
        this.$el.html('');
        //Backbone.View.prototype.remove.call(this);

        // if swiper, destroy it
        if (this.slider) {
            this.slider.destroy();
        }

    },


});


})( App = window.App || {}, Backbone, _, jQuery)
