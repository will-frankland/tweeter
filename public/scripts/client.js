/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (tweet) {
  const $tweet = `<article class="tweets">
<header>
  <div class="avatar-name">
  <img src="${tweet.user.avatars}"
    <p> ${tweet.user.name} </p>
  </div>
  <p class="handle">
    ${tweet.user.handle}
  </p>
</header>
<p class="tweet-content">${tweet.content.text}</p>
<footer>
  <time class="timestamp">${jQuery.timeago(new Date)}</time>
  <div class="logo-set">
    <i class="fa-solid fa-font-awesome"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-regular fa-heart"></i>
  </div>
</footer>
</article>`
  return $tweet;
}

const renderTweets = function (tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    let returnTweet = createTweetElement(tweet)
    // takes return value and appends it to the tweets container
    $("#tweets-container").prepend(returnTweet)
  }
};


$(document).ready(function () {
  // JQuery access to HTML to find tweet-form
  const form = $("#tweet-form");
  // form on is a listener and waits to hear submit
  form.on('submit', onSubmit);
  loadTweets();
});

const onSubmit = function (event) {
  event.preventDefault();
  const form = $(this);
  if ($("#tweet-text").val() === "" || $("#tweet-text").val() === null) {
    alert("Tweet is empty!")
    return;
  } else if ($("#tweet-text").val().length > 140) {
    alert("Tweet limit exceeded!")
    return;
  }
  const data = form.serialize()
  $.post("/tweets/", data)
    .then(() => {
      loadTweets()
      $("textarea")[0].value = "";
    })
}

const loadTweets = function () {
  $.get("/tweets/")
    .then(data => {
      $('.all-tweets-section').empty()
      renderTweets(data)
      // console.log("tweet", data)
    })
}