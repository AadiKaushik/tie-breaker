
var gameState =0
var optons =[];
var options =[];
var doo = true
var next;
var titleImage
var h

function preload()
{
titleImage =loadImage("t.png");
}

function setup()
{
    inp = createInput("0");
    inp.position(10,400);

createCanvas(windowWidth,350);
     
h =createElement('h2');
h.html("How many possibiltes would you like ???")
 h.position(10,350) ;


}

function draw()
{
   
    background("white");

    image(titleImage,0,0,900,300);
   
    if(gameState===0)
    { 
      form1();
    }

    if(keyCode===13)
    {
     
      gameState=1
    }

if(gameState===1)
{
  inp.hide();
if(doo===true)
{

  form2();
doo=false
}
}
  

   
}


function form1()
{

}

function form2 ()

{
  h.hide();
t =createElement('h2');
t.html("write the options and click on next")
t.position(10,300)
  makeButton(inp.value());
}

function makeButton(num)
{
   next= createButton("next");
   next.position(10,400)
    for(var i=0;i<num;i++){
        optons.push(createInput("write..."))
      }
  next.mousePressed(()=>{
    for (var i = 0 ; i < optons.length;i++)
    {
      options.push(optons[i].value())
    }
    makeRAndom();
      })
    

  }

 function makeRAndom()
{
var pusher =  Math.round(random(0,options.length-1));

g =createElement('h2');
g.html("Tie Breaker Answer Is : " + options[pusher]);
g.position(10,450);

i =createElement('h2');
i.html("Pls Refresh To Start Again  ");
i.position(10,550);


 }
