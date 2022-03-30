/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet);

  const createTweetElement = function (tweet) {
    const $tweet = `<article class="tweets">
  <header>
    <div class="avatar-name">
      <i>${tweet.user.avatars}</i>
      <p> ${tweet.user.name} </p>
    </div>
    <p class="handle">
      ${tweet.user.handle}
    </p>
  </header>
  <p class="tweet-content">${tweet.content.text}</p>
  <footer>
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
      $("#tweets-container").append(returnTweet)
    }
  };

  renderTweets(data);

});