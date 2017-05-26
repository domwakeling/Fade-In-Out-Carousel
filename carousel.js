/*  Carousel object
 *
 *  To use:
 *  - insert an <a href><img/></a> block in your HTML
 *  - give the initial default img and href for the link
 *  - apply class .imgSq to first image and .imgWi to second image (example)
 *  - call a block var carousel = new Carousel(....) in $(document).ready
 *
 *  Parameters to be passed:
 *  - linkID, the ID given to the <a href> surrounding block
 *  - imgArr, array of image sources (as strings)
 *  - altArr, array of 'alt' tags for the images (as strings)
 *  - urlArr, array of URLs for links (as strings)
 *  - fadeTime, time (in miliseconds) for the fadeOut/fadeIn
 *  - pauseTime, time (in miliseconds) to show each image
 */

function Carousel(linkID, imgArr, altArr, urlArr, fadeTime, pauseTime) {

    // setup
    var counter = 0;
    var $carouselID = $('#' + linkID);
    var fadeTime = fadeTime;
    var pauseTime = pauseTime;
    var updateImg = function() {
        $carouselID.attr('href', urlArr[counter]);
        $carouselID.find('img').attr('src', imgArr[counter]);
        $carouselID.find('img').attr('alt', altArr[counter]);
    }

    // set image on load
    updateImg();

    // use setInterval to cycle
    var spin = setInterval(function() {

        if (++counter >= urlArr.length) { counter = 0}

        $carouselID.fadeOut(fadeTime, function() {
            updateImg();
        }).fadeIn(fadeTime);

    }, pauseTime + 2 * fadeTime);
}


// Example implementation

var imgArr = ['images/SSE_200.jpg', 'images/SSS_200.jpg', 'images/SSW_200.jpg'];
var altArr = ['Snowsport England', 'Snowsport Scotland', 'Snowsport Wales'];
var urlArr = ['http://snowsportengland.org.uk/', 'http://www.snowsportscotland.org/', 'http://www.snowsportwales.co.uk/'];

$(document).ready(function() {
    var car1 = new Carousel('carousel', imgArr, altArr, urlArr, 500, 2000);
});
