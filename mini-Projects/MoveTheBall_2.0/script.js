var ball=document.getElementById('ball');
// ball.style.top=Math.floor(Math.random()*50).toString()+"px";
// ball.style.left=Math.floor(Math.random()*50).toString()+"px";
ball.style.top=(window.innerHeight-200)+'px';
ball.style.left="0px";

window.addEventListener('keydown', function(event)
{
    let code=event.keyCode;
    if(code==87)
    {
        if(ball.style.top<="0px")
        {
            return;
        }
        
        ball.style.top = (ball.offsetTop - 8) + 'px';
    }
    else if(code==65)
    {
        // console.log("here 65");
        if(ball.style.left<="0px")
        {
            return;
        }
        
        ball.style.left = (ball.offsetLeft - 8) + 'px';
       
    }
    else if(code==83)
    {
        if(ball.style.top==(window.innerHeight-200).toString()+"px")
        {
            return;
        }
        ball.style.top= (ball.offsetTop + 8) + 'px';
        
    }
    else if(code==68)
    {
        
        if(ball.offsetLeft>=(window.innerWidth-200))
        {
            return;
        }
        ball.style.left = (ball.offsetLeft + 8) + 'px';
        
    }
})