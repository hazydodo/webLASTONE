let click_counter = 0;
let time = 0;
let key_counter = 0;
let character_count = 0;

var ele = document.getElementById("main_form");
let hidden_div = document.getElementById("behaviour_data");

if(ele.addEventListener){
    ele.addEventListener("submit", form_submitted, false);  //Modern browsers
}

document.addEventListener("click", function() {
    click_counter++;
});

var interval = setInterval(function() {
    time++;
}, 1000);

document.addEventListener("keyup", function() {
    key_counter++;
    console.log("key counter:" , key_counter)
});

document.addEventListener("keypress", function() {
    character_count += 1
    console.log("character counter:" , character_count)
});


window.addEventListener("beforeunload", function (e) {
    clearInterval(interval);
});



function form_submitted() {
    hidden_div.innerText = "Number of mosue clicks: " + click_counter 
    + "\nTotal time spent: " + Math.floor(time/60) + " minutes and " + Math.floor(time%60) + " seconds\n Total key presses:" +
    key_counter + "\n Total number of characters typed: " + character_count;
    hidden_div.hidden = false;
}