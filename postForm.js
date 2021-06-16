
function userPin(pin) {
    var text = "231203";
    console.log(pin);
    if (pin == text) {
        //window.location.assign('https://youtube.com');
    }
}

function postData() {
    fetch(window.location.href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pin: document.getElementById("pinNo").value}),
    }).then(raw => raw.json())
      .then(data => {
          console.log(data);
          if (data.pin != -1) {
              window.location.href = window.location.origin + `/nextpage?id=${data.id}`;
          }
      })
      .catch(e => {});
}

/*document.getElementById("pinNo")
    .addEventListener('keyup', function(event) {
        if (event.code === "Enter") {
            pin = document.getElementById('pinNo').value;
            console.log(pin);
            userPin(pin);
        }
    });
*/