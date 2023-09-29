//global
var time = 60;
var scored = 0;
var hit_num = 0;


var parent = document.querySelector("#pannel_bottom");

function hit() {
    hit_num = Math.floor(Math.random()*10);
    document.querySelector(".score").innerHTML = hit_num;
    
}

parent.addEventListener("click",
function(val){
    
    var clicked_number = Number(val.target.innerHTML);

    if (clicked_number === hit_num) {
        increase_score(); 
        hit();       
    }else{
        hit();
    }
    
})

function increase_score(){
    scored += 10;
    document.querySelector(".scored").innerHTML = scored;
}

function timer() {
    var set_time = setInterval(function(){

       if(time>0){
            time--;
            document.querySelector(".time").innerHTML = time;
       }
       else
       {
            clearInterval(set_time);
            var gameover =  document.querySelector("#pannel_bottom");
            gameover.innerHTML = "GAME OVER!"+" You Scored: "+scored ;
            gameover.style.color = 'white';
            gameover.style.fontWeight = 800;
            gameover.style.fontSize = '35px';
            gameover.style.display = 'flex';
            gameover.style.alignItems = 'center';
            gameover.style.justifyContent = 'center';
            

       }

    },1000)
}

function makebubbles() {
    var clutter = "";

    for (let i = 0; i <= 100; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter +=  `<div class="bubble">${rn}</div>`;
        
    }

    document.querySelector("#pannel_bottom").innerHTML = clutter;
}

makebubbles();
timer();
hit();




