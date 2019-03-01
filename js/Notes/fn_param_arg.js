/***************************************
    PARAMETERS & ARGUMENTS
***************************************/

// 1 // Declare a function: 

     // Parameters represents generic values

        function nameFn (parameter1, parameter2) { /* code */ }

// 2 // Call the function: 

     // Argumets will be concret values that will use in the function

        nameFn(argument1, argument2);
    
     // You can use these values write them directly into the function call

        // argument1 --> value1
        // argument2 --> value2
        // argument3 --> value3

        // Example A //

            // Declare FUNCTION: x and y are parameters

            function sumA (param1, param2) {
                result = param1 + param2;
                return result;
            }

            // CALL FUNCTION: 5 and 6 values are arguments

            sumA(5, 6); // Result: 11

     // OR these concret values can be saved in variables, then when we call the function our arguments will be our variables names.

         // argument1 --> variable1 --> value1
         // argument2 --> variable2 --> value2
         // argument3 --> variable3 --> value3

        // Example B //

            // Declare VARIABLE: num1 and num2 are variables to save our values;

            var num1, num2;
            num1 = 5;
            num2 = 6;

            // Declare FUNCTION: x and y are parameters

            function sumB (param1, param2) {
                result = param1 + param2;
                return result;
            }

            // CALL FUNCTION: num1 and num2 variables are arguments

            sumB(num1, num2); // Result: 11