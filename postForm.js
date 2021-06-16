document.getElementById('pin')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            var x = document.forms[0];
            if (x == "231203") {
                window.location.assign('https://youtube.com');
            }
        }
    });
