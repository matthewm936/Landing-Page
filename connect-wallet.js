//check if metamask is installed
window.onload = function() {
    if(typeof window.ethereum == "undefined") {
        document.getElementById('connect')
        .innerHTML = 
        "<a href='https://metamask.io/download/' style= 'color: white'>download metamask</a>";
    }
};