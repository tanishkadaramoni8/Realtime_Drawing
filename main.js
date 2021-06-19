noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload()
{

}

function draw()
{
    background('#58D68D');
    fill('#F7F9F9');
    stroke('#F7F9F9');
    square(noseX, noseY, difference);
    document.getElementById("square_sides").innerHTML = "Width and Height of the square will be = " + difference + "px";
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);  
        
        console.log("noseX = " + noseX + "noseY =" + noseY);
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);

    }
}