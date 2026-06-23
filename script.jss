swindow.onload = function() {
    alert("🍔 Welcome to Kukimoto! Enjoy our delicious meals.");
};
document.getElementById("myForm").addEventListener("submit", function(event){

   let email = document.getElementById("email").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("ndundaruth6@gmail.com");
        event.preventDefault();
    }
});
