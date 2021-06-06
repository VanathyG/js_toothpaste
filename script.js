// ! Our story Title is "Putting toothpaste on a tooth brush!"
const storyTitle ="Putting toothpaste on a tooth brush";
console.log(storyTitle);
//* add an h1 to our html page, then put our title into it.
let pageBody = document.querySelector("body");
let storyTitleTag = document.createElement("h1");
let storycontentTag = document.createElement("p");
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
let leftElbow = "Left Elbow";
let rightElbow = "Right Elbow";


taketoothpaste();

//taking toothpast
function taketoothpaste(){
    moveBodyPart("Stretch", leftArm, 90, "frontways");
    turnWrist("right", 90, "anticlock");
    moveBodyPart("Move", rightArm, 30, "down");
    closeFingersOver(90, items[0]);
    bendElbow(leftElbow, 45, null);
}

function moveBodyPart(action, bodyPart, number, direction){
        let step_text = action + " your " + bodyPart + " by " + number + " degrees " + direction
    print_and_log(step_text)
        readytoContinue();

}

function turnWrist(side, degrees, direction){
    let step_text = "Turn the "+ side + " wrist " + degrees + " " + direction;
    print_and_log(step_text)
    readytoContinue();
}

function  closeFingersOver(degrees, object){
    let step_text = "Close all your fingers " + degrees + " over " + object;
    print_and_log(step_text)
    readytoContinue();
}

function bendElbow(elbow, degrees, object){
    let step_text = "Waiting...";
    if (object == null){
        step_text = "Bend the " + elbow + " by " + degrees + " degrees.";
    }
    else{
        step_text = "Bend the " + elbow + " by " + degrees + " degrees towards " + object;
    }
    print_and_log(step_text)
    readytoContinue();
}

function print_and_log (text){
    console.log(text);
    let storyContentTag = document.createElement("p");
    storyContentTag.innerText =" - " + text;
    pageBody.appendChild(storyContentTag);
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