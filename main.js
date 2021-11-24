noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        
    }
}
