// ! Our story Title is "Putting toothpaste on a tooth brush!"
const storyTitle ="Putting toothpaste on a tooth brush";
console.log(storyTitle);
//* add an h1 to our html page, then put our title into it.
let pageBody = document.querySelector("body");
let storyTitleTag = document.createElement("h1");
let storycontent = document.createElement("p");
storyTitleTag.innerText = storyTitle;
pageBody.appendChild(storyTitleTag);

/**
 * !Our Tasks!
 * * Task #1 - Take Toothpaste
 * * Task #2 - Open Toothpaste
 * * Task #3 - Take Tooth Brush
 * * Task #4 - Put toothpaste on tooth brush
 */


let items = ["Toothpaste", "Toothbrush"];
let leftArm = "left arm";
let rightArm = "right arm";
let rightWrist = "right wrist";
let leftWrist = "leftWrist";


taketoothpaste();

//taking toothpast
function taketoothpaste(){
    moveBodyPart("Stretch", leftArm, 90, "frontways");
}

function moveBodyPart(action, bodyPart, number, direction){
        let step_text = action + " your " + bodyPart + " by " + number + " degrees " + direction
        console.log(step_text);
        readytoContinue();
}

function readytoContinue(){
    let answer= prompt('Enter 1 if you are ready to continue or anything else to go start over', '0');
    if (answer == "1"){
        console.log("Great, let's move on");
        return;
    }
    else{
        console.log("Okay, maybe it was not so simple, let's start over");
        // INSERT RESTART METHOD
    }
}