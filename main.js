lefteye = 0
righteye = ""

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) 
{
    if (results.length > 0)
    {
        console.log(results);
    }
    
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    background('#808080');
}