lass Ray{
	constructor(pos,angle){
		this.dir = p5.Vector.fromAngle(angle);
		this.pos = pos;
	}

	show(){
		stroke(255);
		push();
		translate(this.pos.x, this.pos.y);
		line(0,0, this.dir.x*20, this.dir.y*20);
		pop();
	}
	setDir(x,y){
		this.dir.x = x - this.pos.x;
		this.dir.y = y - this.pos.y;
		this.dir.normalize();
	}

	cast(wall){
		const x1 = this.pos.x;
		const y1 = this.pos.y;

		const x2 = this.dir.x+x1;
		const y2 = this.dir.y+y1;

		const x3 = wall.a.x;
		const y3 = wall.a.y;

		const x4 = wall.b.x;
		const y4 = wall.b.y;
		
		
		
		

		let den = (x1 - x2)*(y3-y4) - ( y1-y2 )*(x3-x4);
		if(den == 0)
			return;

			let t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
			let u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;	
		
		
		if(t>0&&u>0&&u<1){
			const pt = createVector();
			pt.x = x1+t*(x2-x1);
			pt.y = y1+t*(y2-y1);
			return (pt);
		}
		else 
			return false;

	}

}
