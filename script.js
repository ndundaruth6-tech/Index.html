window.onload = function() {
    alert("🍔 Welcome to Kukimoto! Enjoy our delicious meals.");
};
document.getElementById("myForm").addEventListener("submit", function(event){

    let email = document.getElementById("email").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter a valid email e.g. stacey20@gmail.com");
        event.preventDefault();
    }
});
