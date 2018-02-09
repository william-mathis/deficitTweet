$(document).ready(function () {


	// counts the number of tweets on the page
	var numTweets = $(".tweetContainer div").length;

	// returns the number of tweets on the page
	function howMany() {
		return numTweets;
	}

	var value = howMany();

	// sets the numer of tweets in the text, to be the number of tweets on the page, in case more added/removed later
	$("#thisMany").text(value);
	console.log("numTweets is " + numTweets)

	// this is just setting the z-index automatically
	for (i = 1; i < numTweets; i++) {

		$("#" + i).css("z-index", i)

	};

	//returns a random number to generate a random tweet with
	function randoTweet() {
		return Math.floor(Math.random() * numTweets)
	};

	$(".button").on("click", function (e) {
		e.preventDefault();
		console.log("click worked");
		$(".tweet").removeClass('visible');
		$("#" + randoTweet()).addClass('visible');

	});

	function howMany() {
		return numTweets;
	}

});
