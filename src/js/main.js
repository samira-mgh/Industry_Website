// create a code for playing embed video in the website
// $(function() {
//     // Auto play modal video
//     $(".video").click(function () {
//         var theModal = $(this).data("target"),
//             videoSRC = $(this).attr("data-video"),
//             videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
//         $(theModal + ' iframe').attr('src', videoSRCauto);
//         $(theModal + ' button.close').click(function () {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//     });
// });

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
if (document.getElementById('testimonial-section')){
    $('.slider').slick({
        infinite:true,
        slideToShow: 1,
        slideToScroll:1
    });
}




(function () {
    const video = document.getElementsByClassName('video')[0];
    video.addEventListener('click',function () {
        const closeBtn = document.getElementById('videoModal').querySelectorAll('button.close')[0];
        const iframes = document.getElementById('videoModal').getElementsByTagName('iframe')[0];
        let videoSRC = this.dataset.video,
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        iframes.setAttribute('src', videoSRCauto)
        closeBtn.addEventListener('click', function () {
            iframes.setAttribute('src', videoSRC)
        })
    })

})();