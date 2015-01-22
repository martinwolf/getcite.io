var CITE = CITE || {};

$(function() {

    CITE = {

        init: function() {

            this.handleSlider();

            // if ( $('.content-slider').length ) {
            //     this.handleSlider();
            // }

        },

        handleSlider: function() {
            $('.js_slider').bxSlider({
                mode: 'fade',
                pager: false
            });
        },

    };

    CITE.init();

});
