/* eslint-env browser */

var children, partner, place, job;

function collectValues(txt) {
    "use strict";
    var value;
    value = window.prompt(txt);
    return value;
}

children = collectValues("Give a number:");
partner = collectValues("Give a name of someone you find attractive:");
place = collectValues("Name a place:");
job = collectValues("Name of profession:");

function tellFortune(x, y, z, n) {
    "use strict";
    var msg = "You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.";
    return msg;
}

window.alert(tellFortune(job, place, partner, children));