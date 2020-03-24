
function animaNome() {
    $('.anima-nome').addClass('gira1');
    setTimeout(function () {
        $('.anima-nome').addClass('gira2');
    }, 700);
    setTimeout(function () {
        $('.anima-nome').addClass('some');
    }, 1400);
    setTimeout(function () {
        $('.mosaico >div >i').addClass('anima');
    }, 2100);
}