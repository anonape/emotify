var tag = document.createElement('script');
var songID = 'uhx8NjSsdY0';
var emotion;

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: $(document).height(),
    width: $(document).width(),
    videoId: songID,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 300000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

function updateYoutubeVideo(emotions) {
  var song;

  if (emotions.length < 1) {
    return;
  }

  newEmotion = Object
    .keys(emotions[0].expressions)
    .map((key) => { return [key, emotions[0].expressions[key]] })
    .sort((x, y) => { return y[1] - x[1]; })
    [0][0];
      
  if (emotion == newEmotion) {
    return;
  }

  emotion = newEmotion;
  $('#emotion').text(emotion);
  // console.log(newEmotion);

  if (emotion == 'happy') {
    songId = 'MOWDb2TBYDg'
  } else if (emotion == 'sad') {
    songId = 'd-diB65scQU'
  } else if (emotion == 'angry') {
    songId = 'Zv479MCnThA'
  } else if (emotion == 'disgust') {
    songId = 'jofNR_WkoCE'
  } else if (emotion == 'fear') {
    songId = '4V90AmXnguw'
  } else if (emotion == 'surprise') {
    songId = 'gkBvuhBBhvA'
  } else if (emotion == 'neutral') {
    songId = 'ymHBUyui_ws'
  } else {
    songId = 'ymHBUyui_ws'
  }
  player.loadVideoById(songId, 0)
}
