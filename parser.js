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
	document.getElementById("location").innerHTML = getParameterByName('location');
  document.getElementById("cocaineStash").innerHTML = getParameterByName('cocaineStash');
  document.getElementById("heroinStash").innerHTML = getParameterByName('heroinStash');
  document.getElementById("acidStash").innerHTML = getParameterByName('acidStash');
  document.getElementById("weedStash").innerHTML = getParameterByName('weedStash');
  document.getElementById("speedStash").innerHTML = getParameterByName('speedStash');
  document.getElementById("ludesStash").innerHTML = getParameterByName('ludesStash');
  document.getElementById("bank").innerHTML = "$" + getParameterByName('bank');
  document.getElementById("debt").innerHTML = "$" + getParameterByName('debt');
  document.getElementById("cocaineHold").innerHTML = getParameterByName('cocaineHold');
  document.getElementById("heroinHold").innerHTML = getParameterByName('heroinHold');
  document.getElementById("acidHold").innerHTML = getParameterByName('acidHold');
  document.getElementById("weedHold").innerHTML = getParameterByName('weedHold');
  document.getElementById("speedHold").innerHTML = getParameterByName('speedHold');
  document.getElementById("ludesHold").innerHTML = getParameterByName('ludesHold');
  document.getElementById("guns").innerHTML = getParameterByName('guns');
  document.getElementById("cash").innerHTML = "$" + getParameterByName('cash');
});
