# Fade In/Out Carousel with jQuery

A simple implementation for an image carousel, showing a series of images in
turn with fadeout/in transitions. Images are inside a link which updates with
each image change. This is ideal to show sponsor logos.

## Usage

* In your HTML, insert an empty image inside an ```<a href>``` with unique ID

```
<a id="<your_unique_ID>" href="#" target="_blank">
    <img src="/" />
</a>
```

* In your Javascript, includes the definition of ```function Carousel``` and include a call to make a new Carousel object in your ```$(document).ready()``` function

```
$(document).ready(function() {
    ...
    var carousel = new Carousel(<parameters>)
});
```

The parameters to be passed, in order, are:
 *  ```linkID```, the ID given to the ```<a href>``` (note, don't include a ```#```)
 *  ```imgArr```, array of image sources (as strings)
 *  ```altArr```, array of 'alt' tags for the images (as strings)
 *  ```urlArr```, array of URLs for links (as strings)
 *  ```fadeTime```, time (in milliseconds) for the fadeOut/fadeIn
 * ```pauseTime```, time (in milliseconds) to show each image
