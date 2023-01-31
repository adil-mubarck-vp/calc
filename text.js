function btnclick(val)
{
    document.getElementById("textfield").value+=val;

}

function clearDisplay()
{
    document.getElementById("textfield").value=""

}

function equalClick()
{
    var text=document.getElementById("textfield").value
    var result=eval(text)
    document.getElementById("textfield").value=result
}