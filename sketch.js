let BallArray = new Array() 
let ball

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
		background('#ffffff')
		for(let i=0;i<BallArray.length;i++){
			BallArray[i].draw();
			BallArray[i].movimiento();
			BallArray[i].colisionPelota();
		}
}

function mouseClicked()
{
	//
	let colores =color(random(0, 255),random(0, 255),random(0, 255))
	ball =new Ball(mouseX,mouseY,30,colores);
	BallArray.push(ball);

	//
	for(let i=0;i<BallArray.length;i++)
	{
		BallArray[i].indice=i;
		BallArray[i].array=BallArray;
	}
}


