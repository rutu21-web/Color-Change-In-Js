const color = ['red','green','blue','yellow','pink','violet','black','orange','grey','aqua'];

function changecolor()
{
    const colorindex= parseInt(Math.random()*color.length);
    document.body.style.background=color[colorindex];
}