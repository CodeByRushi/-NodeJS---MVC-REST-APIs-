var box = document.getElementById('box');
box.style.top = 0 + "px";
box.style.left = 0 + "px";

box.addEventListener('mousemove', function ()
{
    let viewport_width=window.innerWidth;//gives viewport width
    let viewport_height=window.innerHeight;//gives viewport height

    let box_height=box.clientHeight;
    let box_width=box.clientWidth;
    // console.log(Math.random());
    console.log(box_height);
    box.style.top = Math.floor(Math.random() * (viewport_height-box_height)) + "px";
    box.style.left = Math.floor(Math.random() * (viewport_width-box_width)) + "px";
})