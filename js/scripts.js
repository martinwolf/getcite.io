var CITE = CITE || {};

$(function() {

    CITE = {

        init: function() {

            //this.handleSlider();
            this.handleOwl();

            // if ( $('.content-slider').length ) {
            //     this.handleSlider();
            // }

        },

        handleSlider: function() {
            previewSliderElem = $('#preview-slider');

            previewSlider = previewSliderElem.bxSlider({
                mode: 'fade',
                pager: false,
                useCSS: false,
                video: true
            });

            twttr.ready(function (twttr) {
                twttr.events.bind('rendered', function (event) {
                    previewSliderElem.removeClass('is-invis');
                    previewSlider.redrawSlider();
                });
            });
        },

        handleOwl: function() {
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

