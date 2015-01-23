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
            previewSliderElem = $('#preview-slider');

            previewSlider = previewSliderElem.bxSlider({
                mode: 'fade',
                pager: false,
            });

            twttr.ready(function (twttr) {
                twttr.events.bind('loaded', function (event) {
                    previewSliderElem.removeClass('is-invis');
                    previewSlider.redrawSlider();
                });
            });
        },

    };

    CITE.init();

});

