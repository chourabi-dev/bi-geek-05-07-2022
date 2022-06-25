var feild = document.getElementById('feild');
var ball = document.getElementById('ball');


feild.addEventListener('mousemove',function(event){ 
    const x  = event.clientX;
    const y  = event.clientY;


    console.log(x,y);

    ball.style.top=(y-30)+'px';
    ball.style.left=(x-30)+'px';
    
    
})