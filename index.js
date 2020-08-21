function admin()
{
     var password = window.prompt("Please enter admin password");
    if (password === "monkey bread") {
        alert("Welcome back");
        postPage();
      } else {
        alert("Sorry, that is the wrong password");
      }
}




