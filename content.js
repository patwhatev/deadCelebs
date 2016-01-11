function hideCelebs(e) {
  console.log(e);
  var posts = document.querySelectorAll('#contentArea');
    for(var i = 0; i < posts.length; i++) {
      var givenPost = posts[i].querySelector('.name');
      var regex = new RegExp( e, 'g' );
        if ( givenPost.innerHTML.match(regex) ) {
          givenPost.parentNode.parentNode.parentNode.parentNode.style.display="none";
        }
        else {
          
        }
  }
}


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.text == "BUTTON_CLICKED") {
    loadposts();
   }
   else if(msg.text == "FILTER_BUTTON_CLICKED") {
    hideCelebs(msg.filter);
           
  }
});
