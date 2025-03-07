var buttoncolors=["green","red","yellow","blue"];
var gamepattern=[];
var userclickedpattern=[];
var level=0;
 let started=false;
function checkanswer(currentlevel){
    if(gamepattern[currentlevel]===userclickedpattern[currentlevel]){
        if(gamepattern.length===userclickedpattern.length){
            setTimeout(function(){
                nextsequence();
            },1000)
        }
    }
    else{
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game-Over,press any key to restart")
        startover();
    }

}
function startover(){
    level=0;
    started=false;
    gamepattern=[];
     

}
function nextsequence(){
    userclickedpattern=[];
    level++;
    $("h1").text("level "+ level);
    

    var n= Math.random();
    n=n*4;
    n=Math.floor(n);
    var randomchosencolor=buttoncolors[n];
    gamepattern.push(randomchosencolor);
    $("#"+randomchosencolor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
    playsound(randomchosencolor);
}
    
function playsound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatepress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");

    },100)

}
        

$(".btn").click(function(){
    var userchosencolor =$(this).attr("id")
    userclickedpattern.push(userchosencolor);
    checkanswer(userclickedpattern.length-1);
    playsound(userchosencolor);
    animatepress(userchosencolor);

 })


 $("h1").text("press a key to start");
 $(document).on("click keypress",function(){
    if(!started){
        started=true;
        level=0;
    nextsequence();
    }
 })

 
