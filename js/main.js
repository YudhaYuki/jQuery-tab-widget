$(document).ready(function() {

    function startOverLay(overlayId) {
            
        $('.overlay-veil').fadeTo("500", "0.8", function() {
            var element = $('div[data-overlayItem="'+ overlayId + '"]');

            element.fadeIn("300");
            element.addClass('active');
        })
    }


    function closeOverlayAll(overlayId) {
        $('.overlay-component').each(function() {
            if ($(this).hasClass('active')) {
                $('.overlay-veil').fadeOut();
                $(this).fadeOut("300", function() {
                    $(this).removeClass('active');
                })
            }
        });
        if (overlayId !== false) {
            startOverLay(overlayId)
        }
    }

    $('.closeOverlay').on('click', function() {
        closeOverlayAll(false)
    });


    $('.overlay-item-click').on("click", function(e) {
        e.preventDefault();

        var overlayId = $(this).data("overlay");
        closeOverlayAll(overlayId)
    })

});



