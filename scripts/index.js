$("#getRandomQuote").on("click", function () {
    var xhrObject = new XMLHttpRequest();

    xhrObject.onreadystatechange = function () {
        if (xhrObject.readyState === 4) {
            if (xhrObject.status === 200 || xhrObject.status === 304) {
                // Success! Do stuff with data.
                var reponse = JSON.parse(xhrObject.responseText);
            		$("#quote-content").html(reponse[0].content);
                $("#quote-title").html("<p>&mdash; " + reponse[0].title + "</p>");
            
            }
        }
    };
		var cb = Math.round(new Date().getTime() / 1000);
    xhrObject.open(
        "GET",
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb,
        true
    );
    xhrObject.send();
});

/* function getQuote() {
  var cb = Math.round(new Date().getTime() / 1000);
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function(a) {
    $(".quote-text").html(a[0].content + "<p>— " + a[0].title + "</p>");
  });
} */