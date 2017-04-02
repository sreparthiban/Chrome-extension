function click(e){
	alert("hi");
	
chrome.tabs.query({}, function(tabs) {
    var i;
    for (i=0; i<tabs.length; i++) {
    	var d = tabs[i].url;
    	alert(d);
    }
 });

}
chrome.browserAction.onClicked.addListener(click);

