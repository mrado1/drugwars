// LOCAL WORKING WITH PARAMETERS
//http://localhost:8000/?cash=0&guns=0&ludesHold=0&speedHold=0&weedHold=0&acidHold=0&heroinHold=0&cocaineHold=0&debt=0&bank=0&ludesStash=0&speedStash=0&weedStash=0&acidStash=0&heroinStash=0&cocaineStash=0&currentLocation=Bronx&hold=100&date=12-1-83

// NGROK WORKING WITH PARAMETERS
//http://617f92e8.ngrok.io/?cash=0&guns=0&ludesHold=0&speedHold=0&weedHold=0&acidHold=0&heroinHold=0&cocaineHold=0&debt=0&bank=0&ludesStash=0&speedStash=0&weedStash=0&acidStash=0&heroinStash=0&cocaineStash=0&currentLocation=Bronx&hold=100&date=12-1-83

// TEST WORKING WITH PARAMETERS
//https://phantomjscloud.com/api/browser/v2/a-demo-key-with-low-quota-per-ip-address/?request={url:%22http://617f92e8.ngrok.io/?cash=0%26guns=0%26ludesHold=0%26speedHold=0%26weedHold=0%26acidHold=0%26heroinHold=0%26cocaineHold=0%26debt=0%26bank=0%26ludesStash=0%26speedStash=0%26weedStash=0%26acidStash=0%26heroinStash=0%26cocaineStash=0%26currentLocation=Bronx%26hold=100%26date=12-1-83%22,renderType:%22jpg%22}

// ACTUAL API WORKING WITHOUT PARAMETERS
// https://phantomjscloud.com/api/browser/v2/ak-rffme-d6tav-wx06p-z40t2-z7d0s/?request={url:%22http://617f92e8.ngrok.io/%22,renderType:%22jpg%22}

// ACTUAL API WORKING WITH PARAMETERS ENCODED
// https://phantomjscloud.com/api/browser/v2/ak-rffme-d6tav-wx06p-z40t2-z7d0s/?request={url:%22http://617f92e8.ngrok.io/?cash=0%26guns=0%26ludesHold=0%26speedHold=0%26weedHold=0%26acidHold=0%26heroinHold=0%26cocaineHold=0%26debt=0%26bank=0%26ludesStash=0%26speedStash=0%26weedStash=0%26acidStash=0%26heroinStash=0%26cocaineStash=0%26currentLocation=Bronx%26hold=100%26date=12-1-83%22,renderType:%22jpg%22}

// WORKING URL ENCODED
// http://617f92e8.ngrok.io/?cash=0%26guns=0%26ludesHold=0%26speedHold=0%26weedHold=0%26acidHold=0%26heroinHold=0%26cocaineHold=0%26debt=0%26bank=0%26ludesStash=0%26speedStash=0%26weedStash=0%26acidStash=0%26heroinStash=0%26cocaineStash=0%26currentLocation=Bronx%26hold=100%26date=12-1-83

// WORKING URL DECODED
// http://617f92e8.ngrok.io/?cash=0&guns=0&ludesHold=0&speedHold=0&weedHold=0&acidHold=0&heroinHold=0&cocaineHold=0&debt=0&bank=0&ludesStash=0&speedStash=0&weedStash=0&acidStash=0&heroinStash=0&cocaineStash=0&currentLocation=Bronx&hold=100&date=12-1-83

// WORKING WITHOUT PARAMETERS
// {url:"http://617f92e8.ngrok.io/",renderType:"png",renderSettings:{viewport:{height:250,width:400}}}
// https://phantomjscloud.com/api/browser/v2/ak-rffme-d6tav-wx06p-z40t2-z7d0s/?request={url:%22http://617f92e8.ngrok.io/%22,renderType:%22png%22,renderSettings:{viewport:{height:250,width:400}}}


// https://phantomjscloud.com/api/browser/v2/ak-rffme-d6tav-wx06p-z40t2-z7d0s/?request={url:%22http://617f92e8.ngrok.io/%22,renderType:%22png%22,renderSettings:{viewport:{height:250,width:400}}}

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	// Give the parameter a variable name

	var date = getParameterByName('date');
	var hold = getParameterByName('hold');
	var currentLocation = getParameterByName('currentLocation');

	var cocaineStash = getParameterByName('cocaineStash');
  var heroinStash = getParameterByName('heroinStash');
  var acidStash = getParameterByName('acidStash');
  var weedStash = getParameterByName('weedStash');
  var speedStash = getParameterByName('speedStash');
  var ludesStash = getParameterByName('ludesStash');

  var bank = getParameterByName('bank');
  var debt = getParameterByName('debt');

  var cocaineHold = getParameterByName('cocaineHold');
  var heroinHold = getParameterByName('heroinHold');
  var acidHold = getParameterByName('acidHold');
  var weedHold = getParameterByName('weedHold');
  var speedHold = getParameterByName('speedHold');
  var ludesHold = getParameterByName('ludesHold');

  var guns = getParameterByName('guns');
  var cash = getParameterByName('cash');


	$(document).ready(function() {
		document.getElementById("date").innerHTML = date;
		document.getElementById("hold").innerHTML = hold;
		document.getElementById("currentLocation").innerHTML = currentLocation;
    document.getElementById("cocaineStash").innerHTML = cocaineStash;
    document.getElementById("heroinStash").innerHTML = heroinStash;
    document.getElementById("acidStash").innerHTML = acidStash;
    document.getElementById("weedStash").innerHTML = weedStash;
    document.getElementById("speedStash").innerHTML = speedStash;
    document.getElementById("ludesStash").innerHTML = ludesStash;
    document.getElementById("bank").innerHTML = bank;
    document.getElementById("debt").innerHTML = debt;
    document.getElementById("cocaineHold").innerHTML = cocaineHold;
    document.getElementById("heroinHold").innerHTML = heroinHold;
    document.getElementById("acidHold").innerHTML = acidHold;
    document.getElementById("weedHold").innerHTML = weedHold;
    document.getElementById("speedHold").innerHTML = speedHold;
    document.getElementById("ludesHold").innerHTML = ludesHold;
    document.getElementById("guns").innerHTML = guns;
    document.getElementById("cash").innerHTML = cash;
	});
