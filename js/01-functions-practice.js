/*eslint-env browser*/

//STEP 1
function halfNumber(num) {
    "use strict";
	var half = num / 2;
	window.alert("Half of " + num + " is " + half);
}
window.halfNumber(16);


//STEP 2
function squareNumber(numb) {
    "use strict";
	var nume = numb * numb;
	window.alert("The result of squaring the number " + numb + " is " + nume);
}
squareNumber(4);


//STEP 3
function percentOf(num1, num2) {
    "use strict";
    var percent = num1 / num2 * 100;
	window.alert(num1 + "  is " + percent + "% of " + num2);
}
percentOf(5, 20);


//STEP 4
function findModulus(num3, num4) {
    "use strict";
    var remainder = num3 % num4;
	window.alert(remainder + "  is  the modulus of " + num3 + " and " + num4);
}
findModulus(10, 3);


//STEP 5
function operation() {
    "use strict";
    var nums = [], num;
    
    function collectValue() {
        var i, collect;

        for (i = 0; i < 4; i += 1) {
            collect = window.prompt("Enter your a number:");
            num = parseInt(collect);
            nums.push(num);
        }
        return nums;
    }    
    function sumAll(a, b, c, d) {
        var result = a + b + c + d;
        return result;
    }
    collectValue();
    return sumAll(nums[0], nums[1], nums[2], nums[3]);
}
window.alert(operation());

