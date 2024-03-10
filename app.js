
let estado;
let contadorClicks, contadorRebotes;
let x, y, tam, desp, dir;
let img;
//let futura;
let ACIERTOS_PARA_GANAR = 8;
let REBOTES_PARA_PERDER = 6;
let esperaCambioEstado;
let cnv;

function centerCanvas() {
  var xposition = (windowWidth - width) / 2;
  var yposition = (windowHeight - height) / 2;
  cnv.position(xposition, yposition, 'sticky');
}

function setup() {

    //canvas = createCanvas(600, 600); //valores iniciales:
    cnv = createCanvas(windowWidth, windowHeight); 
    cnv.parent ('container4');
    centerCanvas();
    estado = 0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


function preload() {
    img = loadImage("./images/juego/images.png");
    //futura = loadFont("futurastd_light.otf");
}
function draw() {

    background('#6bda72');
  
    
    if ( estado == 0 ) {
      
      //pantalla inicio
      fill(255);
      textAlign(CENTER);
      textSize(15);
      text( " Sos el mono del teatro, ", width/2, 270);
      text( " tenes que agarrar por lo menos 8 bananas para ganar. ", width/2, 290);
      text( " Tené en cuenta de que la banana no podrá rebotar más de 6 veces.", width/2, 310);
      text( " SUERTE!. ", width/2, 330);
   
   } else if ( estado == 1 ) {
      
     //pantalla del juego
      fill('#b1fbb6');
      textAlign(CENTER);
      text( "EN JUEGO", width/2, height/2);
  
      //mostramos aciertos:
      push();
      fill(255);
      textAlign( LEFT );
      text( "BANANAS AGARRADAS: " + contadorClicks, 20, 20);
      text( "REBOTES: " + contadorRebotes, 20, 40);
      pop();
  
  
      fill(100, 40);
      push();  
      imageMode(CENTER);
      image(img, x, y);
      noFill();
      noStroke();
      ellipse( x, y, tam, tam);
      pop();
  
      //valores de desplazamientos:
      var despX  = cos( dir ) * desp;
      var despY  = sin( dir ) * desp;
  
      //  aumento la posicion de x e y:
      x+=despX;
      y+=despY;
  
      if ( x>width || x<0 ) {
        //refleja la direccion en X:
        //arcotangente es una funcion de trigonometria para encontrar
        //un angulo pasando dos catetos:
        dir = atan2( despY, -despX);
        contadorRebotes++;
      }
  
      if ( y>height || y<0) {
        //refleja la direccion en Y:
        dir = atan2( -despY, despX);
        contadorRebotes++;
      }
  
      if ( contadorRebotes>= REBOTES_PARA_PERDER ) {
        //flujo de estado de 1 a 3:
        estado = 3;
        esperaCambioEstado = 0;
      }
      
    } else if ( estado == 2 ) {
      //pantalla jugando
      fill(255);
      textAlign(CENTER);
      text( "GANASTE", width/2, height/2);
  
      esperaCambioEstado++;
    } else if ( estado == 3 ) {
      //pantalla jugando
      fill(255);
      textAlign(CENTER);
      text( "PERDISTE", width/2, height/2);
  
      esperaCambioEstado++;
    } else if ( estado == 4 ) {
      //pantalla jugando
      fill(255);
      textAlign(CENTER);
      text( "CREADO POR JOSEFINA SORIA", width/2, 270);
      text( "JULIO 2023", width/2, 290);
      text( "Informática General", width/2, 310);
      text( "UNA - Área Transdepartamental de Artes Multimediales", width/2, 330);
    } else {
      println( "Estado fuera de la logica de estados: "+ estado);
    }
  }
  
  function mousePressed() {
    if ( estado == 0 ) {
      //flujo de estado 0 a 1:
      estado = 1;
  
      //pongo valores iniciales del juego:
      contadorClicks = 0;
      contadorRebotes = 0;
      textSize(20);
  
      dir = radians(random(360));
      desp  = 5;
      x = width/2;
      y = height/2;
      tam = 60;
    } else if ( estado == 1 ) {
      //estoy jugando:
      push();
      stroke(0, 255, 0);
      strokeWeight(2);
      line(mouseX, mouseY, x, y);
      pop();
      if ( dist(mouseX, mouseY, x, y)<tam/2 ) {
        contadorClicks++;
        if ( contadorClicks>=ACIERTOS_PARA_GANAR ) {
          //flujo de estado 1 a 2:
          estado = 2;
          esperaCambioEstado = 0;
        }
      }
    } else if ( estado == 2) {
      if ( esperaCambioEstado>100 ) {
        estado = 4;
      }
    } else if ( estado == 3 ) {
      if ( esperaCambioEstado>100 ) {
        estado = 4;
      }
    } else if ( estado == 4 ) {
      estado = 0;
    }
     else if ( estado == 5 ) {
      estado = 0;
    }
    
    
    
  }