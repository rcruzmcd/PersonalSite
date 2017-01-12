$(document).ready(function() {

    // Instagram API call for gallery page
    var brandTag = 'oldguyrunningtimefighter';
    var accessToken = '177494268.ccd0e5e.0d0c87a334d448d29bfd2abced5ed48b';
    var call = $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken + '&count=21',
        dataType: 'jsonp'
    }).done(function(data) {

        var images = data.data;
        //console.log(images);
        $(images).each(function() {
            //console.log(this);

            var caption = this.caption.text;
            var thumbURL = this.images.thumbnail.url;
            var stdURL = this.images.standard_resolution.url;
            var divImg = '<div class="oneImage"> <img width="300px" src=' + stdURL + '/> <span> ' + caption + ' </span> </div>';

            $('#galleryDiv').append(divImg);
        });

    });


    //Handles nav bar changing color when scrolling
    var header = $("#homeContent>header");
    var footer = $('#homeFooter');
    var homeLi = $('#homeLi');
    var titleDiv = $('#homeDiv');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 450) {
            header.addClass('fixedNav');
        } else {
            header.removeClass('fixedNav');
        }

        if (scroll >= 100) {
            titleDiv.fadeOut();
            footer.fadeOut();
            homeLi.fadeIn();
        } else {
            titleDiv.fadeIn();
            footer.fadeIn();
            homeLi.fadeOut();
        }
    });

    $('#myNav a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 50)
                }, 1000);
                return false;
            }
        }
    });

    $('#homeLink').click(function() {
        $('#aboutLink').removeClass('active');
        $('#projectsLink').removeClass('active');
        $('#resumeLink').removeClass('active');
        $('#galleryLink').removeClass('active');
        $('#contactLink').removeClass('active');
    });

    $('#aboutLink').click(function() {
        $(this).addClass('active');
        $('#projectsLink').removeClass('active');
        $('#resumeLink').removeClass('active');
        $('#galleryLink').removeClass('active');
        $('#contactLink').removeClass('active');
    });
    $('#projectsLink').click(function() {
        $(this).addClass('active');
        $('#aboutLink').removeClass('active');
        $('#resumeLink').removeClass('active');
        $('#galleryLink').removeClass('active');
        $('#contactLink').removeClass('active');
    });
    $('#resumeLink').click(function() {
        $(this).addClass('active');
        $('#aboutLink').removeClass('active');
        $('#projectsLink').removeClass('active');
        $('#galleryLink').removeClass('active');
        $('#contactLink').removeClass('active');
    });
    $('#galleryLink').click(function() {
        $(this).addClass('active');
        $('#aboutLink').removeClass('active');
        $('#projectsLink').removeClass('active');
        $('#resumeLink').removeClass('active');
        $('#contactLink').removeClass('active');
    });
    $('#contactLink').click(function() {
        $(this).addClass('active');
        $('#aboutLink').removeClass('active');
        $('#projectsLink').removeClass('active');
        $('#resumeLink').removeClass('active');
        $('#galleryLink').removeClass('active');
    });


});
