window.addEventListener('load', init, false);

function init() {
    document.getElementById('b1').onclick = t;
}

function t() {
    var val = document.getElementById('text').value;
    alert(val);
    document.getElementById('text').value = "";
}
