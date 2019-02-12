var request = require('request');
var cheerio = require('cheerio');

var url = "https://www.visitmusiccity.com/visitors/events/upcomingevents";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body)
    var title = $('title').text();
    var events = [];
    $('.events').find('li').each(function(){
        var current = $(this).text();
        current = current.replace("@","-")
    }
    console.log('URL: ' + url);
    console.log('Title: ' + title);
  }
  else {
    console.log("We’ve encountered an error: " + error);
  }
});