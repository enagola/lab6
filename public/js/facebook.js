function checkLoginState() {
    WebGLTransformFeedback.getLoginStatus(function(response) {
        statusChangeCallback(response)
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('Sucessfully logged in with Facebook');
        WebGLTransformFeedback.api('/me?fields=name,first_name,picture.width(480)', changeUser)
    }
}

function changeUser(response) {
    //Add code to change name and image 
   $('p.facebookLogin').hide()
   $('h1#name').text(response.name)
   $('img#photo').attr("src", response.picture.data.url)
  }