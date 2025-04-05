function Sum() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let txt = '';
    let result = num1 + num2;
    txt += 'Sum of 2 values=' + result + '<br>';
    document.getElementById('demo').innerHTML = txt;
}
function Sub() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let txt = '';
    let result = num1 - num2;
    txt += 'Difference of 2 values=' + result + '<br>';
    document.getElementById('demo').innerHTML = txt;
}
function Mul() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let txt = '';
    let result = num1 * num2;
    txt += 'Mul of 2 values=' + result + '<br>';
    document.getElementById('demo').innerHTML = txt;
}
function Div() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let txt = '';
    let result = num1 / num2;
    txt += 'Division of 2 values=' + result + '<br>';
    document.getElementById('demo').innerHTML = txt;
}
/*function Compare() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let txt = '';
    let result = num1 > num2;
    txt += "num1>num2=" + result + '<br>';
    let result = num1 < num2;
    txt += "num1<num2=" + result + '<br>';
    let result = num1 <= num2;
    txt += "num1<=num2=" + result + '<br>';
    let result = num1 >= num2;
    txt += "num1>=num2=" + result + '<br>';
    let result = num1 == num2;
    txt += "num1==num2=" + result + '<br>';
    let result = num1 != num2;
    txt += "num1!=num2=" + result + '<br>';
    let result = num1 === num2;
    txt += "num1===num2=" + result + '<br>';
    document.getElementById('demo').innerHTML = txt;

}*/