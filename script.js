var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i<buttons.length; i++){//logic of calculator
    console.log(buttons.length);
    buttons[i].addEventListener('click', function(){

        var value = this.getAttribute("data-value");
        if(value == '+'){// if an operator is clicked
            operator = '+';
            operand1 = parseFloat(display.textContent);
        }else if(value == '='){
            operand2 = parseFloat(display.textContent);
            operand2 = eval(operand2);
            // use eval to get result
            // show result on display
        }else{
            display.innerText += value;
        }

    });
}