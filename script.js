function myFunction()
{
    var num = Number(document.getElementById("input").value);

    var output = ((Math.abs(100-num)<=20)||(Math.abs(400-num)<=20));

    document.getElementById("result").innerHTML = output;
}