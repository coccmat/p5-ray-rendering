let walls = [];
let ray;
let particella;
function setup(){
	createCanvas(400,400);
	for(let i = 0; i<5; i++){
		walls[i]= new Wall(random(width),
						  random(width),
						  random(height),
						  random(height)
						  )
	}
	
	ray = new Ray(100,200);
	particella = new Particella();
}

function draw() {
	background(0);

	//add walls 
	ray.show();
	for(let i = 0; i<5; i++)
		walls[i].show();
	walls.push(new Wall(0,0,width,0));
	walls.push(new Wall(width,0,width,height));
	walls.push(new Wall(width,height,0,height));
	walls.push(new Wall(0,height,0,0));
	
	particella.lookAt(walls);
	particella.show()
	particella.particellaUpDate(mouseX,mouseY);
	
	

/*	ray.setDir(mouseX,mouseY);
	let pt = ray.cast(wall);
	if(pt){
		fill(255);
		ellipse (pt.x,pt.y,8,8);
	}
		else
			console.log("false");
*/	

}
