$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */
     

     
    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(900, 0, 600,1)
createPlatform(0, 0, 600,1)
 createPlatform(0, 200, 1200,15)
 createPlatform(500, 0, 100,50)
 createPlatform(700, 100, 100,100)
 createPlatform(0, 170, 100, 30)   
 createPlatform(1100, 150, 100,50)   
 createPlatform(900, 0, 100,100)
 createPlatform(300, 0, 100,50)
 createPlatform(100, 120, 25,80)   
 createPlatform(400, 160, 100,45) 
 createPlatform(200, 400, 850,10)
 createPlatform(1200, 365, 200,45)
 createPlatform(700, 360, 100,40)
 createPlatform(400, 360, 100,40)
 createPlatform(600, 200, 0.01,100)
 createPlatform(0, 0, 1,700)
 createPlatform(1050, 400, 10,500)
 createPlatform(1400, 0, 1,700)
 createPlatform(100, 700, 200,0.01)
 createPlatform(400, 700, 200,0.01)
 createPlatform(1000, 600, 50,0.01)
 createPlatform(1050, 740, 250,10)
 createPlatform(1190, 640, 60,0.01)
 createPlatform(1190, 590, 60,0.01)
 createPlatform(1190, 590, 10,0.01)
 createPlatform(1240, 600, 10,0.01)
 createPlatform(400, 600, 10,100)
 createPlatform(800, 650, 10,10)
 createPlatform(1059, 200, 0.01,80)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("database", 580, 0, 10, 1)
createCollectable("diamond", 580, 300, 0, 1)
createCollectable("grace", 1200, 600, 0, 1)
createCollectable("kennedi", 1000, 500, 0, 1)
createCollectable("max",725,125,0,0)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("right",150,5500,600,150)
createCannon("right",240,1500,10,10)
createCannon("left",325,1000,10,10)
createCannon("left",720,0.000000000000000000000000000000000000000000000000000000000000000000000000001,10000000000000000000000000000,100)
createCannon("right",835,0.000000000000000000000000000000000000000000000000000000000000000000000000001,10000000000000000000000000000000000,100)
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
