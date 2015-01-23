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
            $('#preview-slider').owlCarousel({
                items: 1,
                margin: 20,
                loop: true,
                dots: false,
                nav: true
            });
        }

    };

    CITE.init();

});

