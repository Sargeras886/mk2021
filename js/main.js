$(document).ready(function () {
   $('#app').vide({
      mp4: 'video/video.mp4',
      webm: 'video/video.webm',
      ogv: 'video/video.ogv',
      poster: 'img/cover-image.jpg'
   });
});

/*$('document').ready(function(){
   $('#myBlock').vide('path/to/video');
$('#myBlock').vide('path/to/video', {
...options...
});
$('#myBlock').vide({
  mp4: path/to/video1,
  webm: path/to/video2,
  ogv: path/to/video3,
  poster: path/to/poster
}, {
...options...
});
$('#myBlock').vide('extended path as a string', 'options as a string');
});*/