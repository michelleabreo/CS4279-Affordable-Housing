import firebase from '../../firebase';

const request = require('request');
const cheerio = require('cheerio');


const url = 'https://www.visitmusiccity.com/visitors/events/upcomingevents';

request(url, (error, response, body) => {
  if (!error) {
    const $ = cheerio.load(body);
    const title = $('title').text();
    const events = [];
    $('.events')
      .find('li')
      .each(function () {
        let current = $(this).text();
        current = current.replace('@', '-');
        events.push();
        console.log(current);
      });
    console.log(`URL: ${url}`);
    console.log(`Title: ${title}`);
    console.log(events)
  } else {
    console.log(`We’ve encountered an error: ${error}`);
  }
});
