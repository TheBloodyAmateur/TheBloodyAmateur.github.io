function add()
{
    let first = parseInt(document.getElementById("value_one").value);
    let second = parseInt(document.getElementById("value_second").value);
    let sum = first + second;
    let text = sum.toString(2);
    document.getElementById("resultField").innerHTML = text;
}

function changeBackgroundColour()
{
    let colourArray = ["#96b6d2","#56b142","#9D42B1","#259282","#928125","#872592"]
    let randomNumber = Math.floor(Math.random() * colourArray.length)
    document.body.style.backgroundColor=colourArray[randomNumber];
}

function message()
{
    document.getElementById("resultField").innerHTML = "Isa, was geht ab?";
}