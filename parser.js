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

// WITH API, URL DECODED
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

	$(document).ready(function() {
		document.getElementById("date").innerHTML = getParameterByName('date');
		document.getElementById("hold").innerHTML = getParameterByName('hold');
		document.getElementById("location").innerHTML = getParameterByName('currentLocation');
    document.getElementById("cocaineStash").innerHTML = getParameterByName('cocaineStash');
    document.getElementById("heroinStash").innerHTML = getParameterByName('heroinStash');
    document.getElementById("acidStash").innerHTML = getParameterByName('acidStash');
    document.getElementById("weedStash").innerHTML = getParameterByName('weedStash');
    document.getElementById("speedStash").innerHTML = getParameterByName('speedStash');
    document.getElementById("ludesStash").innerHTML = getParameterByName('ludesStash');
    document.getElementById("bank").innerHTML = getParameterByName('bank');
    document.getElementById("debt").innerHTML = getParameterByName('debt');
    document.getElementById("cocaineHold").innerHTML = getParameterByName('cocaineHold');
    document.getElementById("heroinHold").innerHTML = getParameterByName('heroinHold');
    document.getElementById("acidHold").innerHTML = getParameterByName('acidHold');
    document.getElementById("weedHold").innerHTML = getParameterByName('weedHold');
    document.getElementById("speedHold").innerHTML = getParameterByName('speedHold');
    document.getElementById("ludesHold").innerHTML = getParameterByName('ludesHold');
    document.getElementById("guns").innerHTML = getParameterByName('guns');
    document.getElementById("cash").innerHTML = getParameterByName('cash');
	});
