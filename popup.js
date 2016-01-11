document.addEventListener('DOMContentLoaded', function() {

  var filterButton = document.getElementById('filterData');
  filterButton.addEventListener('click', function() {
  	console.log("filter button clicked");
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, { text: "FILTER_BUTTON_CLICKED", filter: document.querySelector('.text').value });
    });

  });

  }, false);