/**
 * Module dependencies
 */
const { StaticScraper } = require('scraperjs');

/**
 * Scrap subsidies and built a response
 */
function scrapSubsidies($) {
    var lines = $('td[style="vertical-align: middle"]').map(function() {
            			return $(this).text();
     						}).get();
    console.log(lines);
    var column = 0;
    var map = [];
    var object = {};
    lines.forEach((line) => {
    	switch(column) {
    		case 0: { object.type = line; break;}
    		case 1: { object.year = line; break;}
    		case 2: { object.date = line; break;}
    		case 3: { object.legislator = line; break;}
    		case 4: { object.entity = line; break;}
    		case 5: { object.amount = line;
	    						map.push(object);
	    						object = {};
	    						column = -1;
	    						break;
    					  }
    	}
    	column++;
  	})
  	return map;
  	
  	/*
  	return $("a").map(function() {
            return $(this).attr("href");
        }).get();
    */
}

function getSubSidies() {
	return StaticScraper.create('http://www.senado.gov.ar/administrativo/BecasSub?page=2').scrape(scrapSubsidies);
}

/**
 * Expose getSubSidies
 */
module.exports = getSubSidies;