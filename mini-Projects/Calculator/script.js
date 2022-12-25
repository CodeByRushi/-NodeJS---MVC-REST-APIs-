var operand1 = 0;
var operand2 = null;
var operator = null;
var button = document.getElementsByClassName("button");
var display = document.getElementById("display");

for(var i=0;i<button.length;i++)
{
    button[i].addEventListener("click",function(){
        var value = this.getAttribute("data-value");
        console.log("hi", value);
        // display.innerText+=value;
        if(value =="AC")
        {
            display.innerText="";
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else if(value >= "0" && value<= "9")
        {
            display.innerText+=value;
        }
        else if(value == "+" || value =="-" || value =="*" || value=="/" || value =="%")
        {
            operand1 = display.innerText;
            operator = value;
            if(operand1=="")
            {
                display.innerText="error";
            }
            else{
                display.innerText="";
            }
        }
        else if(value =="=")
        {
            operand2 = display.innerText;
            var result = eval(operand1 +""+operator+""+operand2);
            display.innerText = result;

        }

    });
}