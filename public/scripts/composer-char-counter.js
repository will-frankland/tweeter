$(document).ready(function() {
  console.log("Ready")
  let formInput = $($($(".new-tweet").children()[1]).children()[0]);
  formInput.on('keyup', function() {
    const maxChars = 140;
    const remaining = maxChars - $(".counter").val(140 - formInput.val().length);
    $(".counter").val(140 - formInput.val().length);
    if ($(".counter").val() < 0) {
      $(".counter").css("color", "red");
    }
  })
});


// const colour = remaining < maxChars ? 'red' : null;
// const tweetText = document.getElementById('tweet_text');
// const counter = document.getElementById('counter');


