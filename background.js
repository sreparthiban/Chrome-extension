function click(e){
	alert("hi");
	chrome.tabs.query({},function(tabs){     
    console.log("background.js : click()");
    tabs.forEach(function(tab){
    console.log(tab.url);
	
    });
 });
}
chrome.browserAction.onClicked.addListener(click);
