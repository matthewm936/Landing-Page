//check if metamask is installed
window.onload = function() {
    if(typeof window.ethereum == "undefined") {
        document.getElementById('connect').innerHTML = "download metamask";
    }
};