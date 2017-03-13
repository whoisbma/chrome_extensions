var numWordsDiv;
var numWords;

function setup() {
	numWordsDiv = select('#word-count');

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getCount"}, function(response) {
			numWords = response;
			numWordsDiv.html(numWords);
		});
	});
}

function draw() {

}