var request = new XMLHttpRequest();
var sessionId = Math.random() * (99 - 1) + 1 * Date.now();
sessionId = "";

/*
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            sessionId = this.responseText;
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

request.open('GET', 'onconnect.php', true);
request.send(null);
*/