class Particella{
	constructor(){
		;
		this.pos= createVector(width/2,height/2);
		this.rays=[];
		for(let f= 0 ; f <= 360; f += 1)
			this.rays.push(new Ray(this.pos, radians(f)));
		
	}
	particellaUpDate(x,y){
		this.pos.x = x;
		this.pos.y = y;
	}

	lookAt(walls){

		for(let ray of this.rays){
			let record = Infinity;
			let closest = null;
			for(let wall of walls){
				const pt = ray.cast(wall);
				if (pt){
					const d = p5.Vector.dist(this.pos,pt)
					
					if(record > d){
						record = d;
						closest = pt;

					}	
				}
			}
			
			if(closest){
				stroke(255,100);
				line(this.pos.x,this.pos.y, closest.x, closest.y);
			}

		}
	}

	show(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 5);
		for(let ray of this.rays){
			ray.show();
		}
	}

}
