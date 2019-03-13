import logging
logging.getLogger('scrapy').setLevel(logging.WARNING)

import scrapy

class ZillowSpider(scrapy.Spider):
    name = 'zillow'
    start_urls = ['https://www.zillow.com/brick-church-bellshire-nashville-tn/rentals']

    def parse(self, response):
        list = response.css('div#list-core-content-container>div>h1::text').extract()
        print list;

#okay this really does not work. I will come back to it.