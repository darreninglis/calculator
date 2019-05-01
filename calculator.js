var result = document.getElementById('result');

function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if (pushed == '=') {
        //calculate
        var answer = eval(result.innerHTML);
        if (answer % 1 != 0 ) {
            result.innerHTML = eval(result.innerHTML).toFixed(4);
        } else {
            result.innerHTML = eval(result.innerHTML);
        }


    } else if (pushed == 'AC') {
        //All clear
        result.innerHTML = '0';
    } else {
        if (result.innerHTML == '0') {
            result.innerHTML = pushed;
        } else {
            result.innerHTML += pushed;
        }
    }
}
