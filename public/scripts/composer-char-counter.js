$(document).ready(function () {
  console.log("Ready")

  // use jquery to target html element using its ID
  let textAreaField = $('#tweet-text');

  // attach the event listener to the HTML element
  textAreaField.on('keyup', function (event) {
    // target is element itself, value is val of input field (val inside of tweet-text)
    const inputValues = event.target.value
    console.log("ID: ", inputValues)
    const maxChars = 140;
    const remaining = maxChars - inputValues.length;

    $(".counter").val(remaining);
    if ($(".counter").val() < 0) {
      // change the element inside of the class 'counter' to red
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  })
});