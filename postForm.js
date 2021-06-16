function checkEnter() {
    document.getElementById("pinNo")
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });
}

function userPin() {
    var x = document.getElementById("pinNo");
    var text = "231203";
    if (x == text) {
        window.location.assign('https://youtube.com');
    }
}
