function click(e){
		
	  	
chrome.tabs.query({}, function(tabs) {
    var i;
	var d = [tabs.length];
    for (i=0; i<tabs.length; i++) {
         d[i] = tabs[i].url;
	}

	
	var str = prompt("Please enter the Folder name");
		
	chrome.bookmarks.create({
		title: str,
		parentId: "1"
	}, 
	
	function (newEntry) {
	    add(newEntry);
	   
	});

	 function add(entry){
		
		for(i=0; i<d.length; i++){
		chrome.bookmarks.create({
			'title': tabs[i].title,
			'url': d[i],
			'parentId': entry.id
		});
		console.log('New Entries Added');
		}
	 }
	
 });
}

chrome.browserAction.onClicked.addListener(click);
