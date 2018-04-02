window.onload = function(){
var button = document.getElementById("bestelknop");
var clickBtn = ProductenHeader.shadowRoot.getElementById('testknop');

// Disable the button on initial page load
button.disabled = true;
alert(button);
alert(clickBtn);

//add event listener
clickBtn.addEventListener('testknop', function(event) {
    button.disabled = !button.disabled;
    alert(button);
});

button.addEventListener('testknop', function(event) {
    alert('Enabled!');
});

};
