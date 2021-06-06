// ! Our story Title is "Putting toothpaste on a tooth brush!"
const storyTitle ="Putting toothpaste on a tooth brush";
console.log(storyTitle);
//* add an h1 to our html page, then put our title into it.
let pageBody = document.querySelector("body");
let storyTitleTag = document.createElement("h1");
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
let leftWrist = "left wrist";
let leftElbow = "left elbow";
let toothpasteCap = "toothpaste cap";
// let rightElbow = "right elbow";
let counter = 0;

start();
end();

function start() {
    takeToothpaste();
    openToothPaste();
    takeToothbrush();
    putToothpasteInToothbrush();
}

//taking toothpast
function takeToothpaste(){
    moveBodyPart("Stretch", leftArm, 90, "frontways");
    turnWrist("right", 90, "anticlock");
    moveBodyPart("Move", rightArm, 30, "down");
    closeFingersOver(90, items[0]);
    // bendElbow(leftElbow, 45, null);
}

function  openToothPaste(){
    bendElbow(leftElbow, 45, items[0]);
    closeFingersOver(90, toothpasteCap);
    print_and_log("Close thumb and index finger over cap");
    turnWrist(rightWrist, 45, "clockwise");
    closeFingersOver(90, "toothpaste cap");
    moveBodyPart("Move", rightArm, 90, "down");
    print_and_log("Leave the cap on the countertop");
}

function takeToothbrush(){
    moveBodyPart("Stretch", rightArm, 90, "frontways");
    turnWrist(rightWrist, 90, "anticlock");
    moveBodyPart("Move", rightArm, 30, "down");
    closeFingersOver("90", items[1]);
    bendElbow(leftElbow, 45, null);
}

function putToothpasteInToothbrush(){
    print_and_log("Use the left finger to press the toothpaste");
    tilt(items[0],10, items[1],);
    checkToothpaste();
}

function end(){
    print_and_log("AWESOME! YOU ARE DONE!! 🎉🎉🎉🎉");
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

function  tilt(object, degrees, direction){
    let step_text = "Tilt " + object + " by " + degrees + " degrees towards " + direction;
    print_and_log(step_text)
    readytoContinue();
}

function checkToothpaste(){
    print_and_log("Press the " + items[0]);
    let answer= prompt('Enter 55 if there is enough toothpaste on the toothbrush. Enter anything else if not', '');
    if (answer == "55"){
        console.log("Awesome. There is enough toothpaste on the toothbrush");
    }
    else{
        console.log("Going back for more toothpaste");
        checkToothpaste();
    }
    return;
}

function print_and_log (text){
    // Go to the bottom of website
    window.scrollTo(0,document.body.scrollHeight);
    counter++;
    console.log(text);
    let storyContentTag = document.createElement("p");
    storyContentTag.innerText = counter + " - " + text;
    pageBody.appendChild(storyContentTag);
}

function readytoContinue(){
    let answer= prompt('Enter 1 if you are ready to continue or anything else to start over', '1');
    if (answer == "1"){
        console.log("Great, let's move on");
        return;
    }
    else{
        console.log("Okay, maybe it was not so simple, let's start over");
        counter = 0;
        let storyContentTag = document.createElement("p");
        storyContentTag.innerText = "\n \n \n";
        pageBody.appendChild(storyContentTag);
        location.reload();
    }
}