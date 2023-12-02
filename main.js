peter_pan_song = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js";
Harry_Potter_Theme_song = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/translations/hi/translation.json";
leftWrist_x = 0;
leftWrist_y = 0
righttWrist_x = 0;
righttWrist_y = 0
scoreleftWrist = 0;
song_Peter_pan = "";
scorerighttWrist = 0;
song_Harry_Potter_Theme = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    //poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,600,530);

    fill("#0500ff");
    stroke("#ff0000");

    song_Peter_pan = peter_pan_song.isplaying();
    console.log("Peter Pan Song :"song_Peter_pan)

    song_Harry_Potter_Theme = peter_pan_song.isplaying();
    console.log("Harry Potter Theme Song: "song_Harry_Potter_Theme)


    if(scoreleftWrist > 0.2) {
      circle(leftWrist_x,leftWrist_y,20);
      Harry_Potter_Theme_song.stop();
      if(song_Peter_pan == false){
        peter_pan_song
      }
      else{
        document.getElementById("").innerHTML = "Song Name: Peter Pan Song";
      }
    }

    if(scorerightWrist > 0.2) {
      circle(rightWrist_x,rightWrist_y,20);
      Harry_Potter_Theme_song.stop();
      if(song_Harry_Potter_Theme == false){
        Harry_Potter_Theme_song.play();
      }
      else{
        document.getElementById("song_id").innerHTML = "Song Name: Harry Potter Theme Song";
      }
    }
}

function preload() {
    peter_pan_song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js");
    Harry_Potter_Theme_song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/translations/hi/translation.json");
}

function modelLoaded() {
    console.log("Po seNet Is initialized");
}

function gotPoses(results) {
if(results.length > 0)
  {
    console.log(results);

    scoreleftWrist = results[0].pose.keypoints[9].score;
    console.log("leftWrist_Score = "+scoreleftWrist);

    scorerightWrist = results[0].pose.keypoints[10].score;
    console.log("rightWrist_Score = "+scorerightWrist);
   

    leftWrist_x = results[0].pose.leftWrist.x;
    leftWrist_y = results[0].pose.leftWrist.y;
    console.log("leftWrist_ = "+leftWrist_x+" leftWrist_y = "+ leftWrist_y);

    rightWrist_x = results[0].pose.rightWrist.x;
    rightWrist_y = results[0].pose.rightWrist.y;
    console.log("rightWrist_ = "+rightWrist_x+" rightWrist_y = "+ rightWrist_y);
  }
}