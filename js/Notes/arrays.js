var i;

/***************************************
                ARRAYS
***************************************/

// Arrays are collections or values separating by commas
// to declare aan array you have to use brackets []
// The values are saving under a index position starting by 0...



/*******************************
        SET VALUES
*******************************/

// 1 // Manually
     // When is declaring, I will ssign the value
    var names = ["Mar", "Tessa", "Tina", "Ana"];

// 2 // Manually
     // Declare my empty array
     // Using the index position to set the values directly

     names = [];

     names[0] = "Mar";
     names[1] = "Tessa";
     names[2] = "Tina";
     names[3] = "Ana";

// 2 // Manually
     // Declare my empty array
     // My values are saved in variables
     // Using the index position to set the variables into the array
    
     // 

     var chuchi = "Mar";
     var me = "Tessa";
     var oldest = "Tina";
     var unknown = "Ana";

     names = [];

     names[0] = chuchi;
     names[1] = me;
     names[2] = oldest;
     names[3] = unknown;


// names = ["Mar", "Tessa", "Tina", "Ana"];
// Array = [value1, value2, value3, value4]
// index ->[  0  ],[  1  ],[  2  ],[  3  ]

/*******************************
        ACCESS VALUES
*******************************/

// 1 // Manually - ONE VALUE
     // Using the index position

     names[2] // Tina

// 2 // Automatically - ALL Values

    for (i = 0; i < names.length; i += 1) {
        window.console.log(names[i]);
    }

/*******************************
        CHANGE VALUES
*******************************/

// 1 // Manually - ONE VALUE
     // Using the index position and reassign

     names[2] = "Trina"; // Trina

/*******************************
    ADD NEW VALUES (to the end)
*******************************/

// 1 // Manually - ONE VALUE
     // Determine the length of my array (we need to know how many values has already our array) 

     var len = names.length;
     var lastPosition = len + 1;
     names[lastPosition] = "John"

// 2 // Automatically - ALL Values

    var newNames = ["Enya", "Paul", "Mou"];

    for (i = 0; i < newNames.length; i += 1) {
        names.push(newNames[i]);
    }