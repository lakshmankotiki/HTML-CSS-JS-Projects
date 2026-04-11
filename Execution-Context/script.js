/**
 * ## 1 ## : first it will execute Step1
 *           Once after completion of Step1 then only it will move to the next statement which is LOOP
 * ## 2 ##: Second it will start execute loop
 *          Once after completion of 10 iterations then only it will nove to the next statement which is last console
 *          ** Last console should have to wait till the ececution of first 2 statements completion
 * ## 3 ##: Third i even set the timeout still it will wait 200ms and execute that statement and move to 4
 * ## 4 ##: Fourth executes the last console statement
 */


// FIRST thread
console.log("Step 1 -> START");

// SECOND thread
for(var i = 0; i <= 10; i++) {
    console.log("Values of i", i);
}

setTimeout(console.log("Step 3 -> MIDDLE"), 200);

// THIRD thread
console.log("Step 2 -> END");

