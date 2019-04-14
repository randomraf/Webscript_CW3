/**
 * A somewhat useless function (i thought it was cool)
 */


function consolemsg(){
    // Clear the display screen
    process.stdout.write('\x1Bc');

    // chitchat
    console.log('');
    console.log('server started on port 8080')
    setTimeout(function(){
      console.log('This is an attempt for the webscript coursework')
    },1000);
    setTimeout(function(){
     console.log('The student who did this is very lazy and likes to do pointless stuff')
    },2500);
    setTimeout(function(){
     console.log('Halp me')
    },3500);
    /**
    * setTimeout internally uses a signed 32 bit integer to represent the number of milliseconds to "sleep",
    * giving a maximum delay of 2147483647 ms, about 24.9 days.
    * Try it
    */
    setTimeout(function(){
      console.log(`Achievement unlocked`)
    },2147483647);

}
module.exports.consolemsg = consolemsg;
