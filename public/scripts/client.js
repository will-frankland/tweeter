
const createTweetElement = function (tweet) {
  const $tweet = `<article class="tweets">
<header>
  <div class="avatar-name">
  <img src="${escape(tweet.user.avatars)}"
    <p> ${escape(tweet.user.name)} </p>
  </div>
  <p class="handle">
    ${escape(tweet.user.handle)}
  </p>
</header>
<p class="tweet-content">${escape(tweet.content.text)}</p>
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

  // swapped if statements for 'this' relating to error.
  const form = $(this);
  $('.error-text').slideUp(400).text('');

  const inputText = $('#tweet-text').val();
  if (inputText === "" || inputText === null) {
    return $('.error-text').text('Tweet is empty!').slideDown();
  }

  if (inputText.length > 140) {
    return $('.error-text').text('Tweet limit exceeded!').slideDown();
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
    })
    .catch((err) => {
      console.log('An error occurred ', err);
    })
}

// escape function allows safe user input
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};