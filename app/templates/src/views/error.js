;(function(App, Backbone, _, $){

    App.ErrorView = Backbone.Layout.extend({

        el: '#content',

        template: 'error',

        initialize: function(options){
            this.render();
        },

        destroy_view: function() {
            log('destroy:', this.options);

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

        }
        
    });

})( App = window.App || {}, Backbone, _, jQuery);