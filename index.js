var resultField = $("#result")
function insertNumber(number){
    var existingNumbers = resultField.val();
    $("#result").val(existingNumbers + number)
}
function clearResult(){
    resultField.val('')
}
function calculate(){
    try {
        var expression = resultField.val();
        if (expression) {
            if (expression.includes('%')) {
                let numbers = expression.split('%');
                if (numbers.length === 2) {
                    let num1 = parseFloat(numbers[0]);
                    let num2 = parseFloat(numbers[1]);
                    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                        let result = num1 % num2;
                        resultField.val(result);
                        return;
                    }
                }
            }
            var result = eval(expression);
            resultField.val(result);
        }
    } catch (error) {
        resultField.val('Error');
    }
}
function deleteNumber(){
    var presentValue = resultField.val();
    if(presentValue!=''){
        resultField.val(presentValue.slice(0, -1));
    }
}