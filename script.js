(function(){

	var canvas = document.getElementById('canvas');
	var c = canvas.getContext('2d');

	var w = window.innerWidth;
	var h = window.innerHeight;
	canvas.width = w;
	canvas.height = h;

	var maxFlakes = 200; //max flakes
	var flakes = [];
	var fps = 50;

	var lastTime = 0;

	for(var i=0; i<maxFlakes; i++){
		flakes.push({
			x:Math.random()*w,
			y:Math.random()*h,
			r:Math.random()*5+2, //radius 
			d:Math.random() + 1 //density
		});
	}

	//draw flakes 
	function drawFlakes(time){
		requestAnimationFrame(drawFlakes);
		if(time-lastTime>=1000/fps){
			lastTime = time;

			c.clearRect(0,0,w,h);
			c.fillStyle = "white";
			c.beginPath();
			for(var i=0; i<flakes.length; i++){
				var f = flakes[i];
				c.moveTo(f.x, f.y);
				c.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
			}
			c.fill();
			moveFlakes();
			drawSnowman();
		}

	}

	//animate the flakes
	var angle = 0;

	function moveFlakes(){
		angle += 0.01;
		for(var i=0; i<flakes.length; i++){

			var f = flakes[i];

			f.y += Math.pow(f.d, 2) + 1;
			f.x += Math.sin(angle) * 1.2;

			if(f.y > h){
				flakes[i] = {x:Math.random()*w, y:0, r:f.r, d:f.d};
			}
		}

	}




	//draw snowman
	function drawSnowman(){
		//nose
		c.beginPath();
		c.fillStyle = "rgb(255,102,0)";
		c.moveTo(152,canvas.height-224);
		c.lineTo(170,canvas.height-228);
		c.lineTo(152,canvas.height-232);
		c.fill();
		//left hand
		c.strokeStyle="black";
		c.lineWidth = 3;
		c.beginPath();
		c.moveTo(206,canvas.height-180);
		c.lineTo(280,canvas.height-200);
		c.lineTo(300,canvas.height-215);
		c.moveTo(280,canvas.height-201);
		c.lineTo(305,canvas.height-205);
		c.moveTo(280,canvas.height-200);
		c.lineTo(305,canvas.height-195);
		c.stroke();
		//right hand
		c.beginPath();
		c.moveTo(94,canvas.height-180);
		c.lineTo(27,canvas.height-200);
		c.lineTo(6,canvas.height-215);
		c.moveTo(25,canvas.height-201);
		c.lineTo(2,canvas.height-205);
		c.moveTo(25,canvas.height-200);
		c.lineTo(3,canvas.height-195);
		c.stroke();
		//hat
		c.fillStyle="red";
		c.fillRect(120,canvas.height-290,60.5,10);
		c.shadowOffsetX = 3;
		c.shadowOffsetY = 3;
		c.shadowBlur = 10;
		c.shadowColor = 'rgba(20, 20, 20, 0.9)';
		c.fillStyle = "black";
		c.beginPath();
		c.moveTo(120,canvas.height-320);
		c.lineTo(180,canvas.height-320);
		c.lineTo(180,canvas.height-279);
		c.lineTo(200,canvas.height-279);
		c.lineTo(200,canvas.height-261);
		c.lineTo(100,canvas.height-261);
		c.lineTo(100,canvas.height-279);
		c.lineTo(120,canvas.height-279);
		c.lineTo(120,canvas.height-320);
		c.fill();
		//smile
		c.globalCompositeOperation = "destination-over";
	 	c.beginPath();  
	  	c.strokeStyle = "black";  
	   	c.arc(155, canvas.height-232, 20, 0.9, Math.PI/1.3, false);  
	   	c.stroke();   
	   	//eyes
		for(var i=135;i<190;i=i+40){
			c.fillStyle = "black";
			c.beginPath();
			c.arc(i,canvas.height-240,6,0,Math.PI*2);
			c.fill();
		}
		//buttons
		for(var i=canvas.height-160;i<canvas.height;i=i+40){
			c.fillStyle = "brown";
			c.beginPath();
			c.arc(150,i,8,0,Math.PI*2);
			c.fill();
		}
		//head and torso
		for(var j=canvas.height-240,i=40; j<280,i<90; j=j+80,i=i+20){
			c.shadowOffsetX = 3;
			c.shadowOffsetY = 3;
			c.shadowBlur = 10;
			c.shadowColor = 'rgba(0, 0, 0, 0.3)';
				c.fillStyle = "white";
				c.beginPath();
				c.arc(150,j,i,0,Math.PI*2);
				c.fill();
		}
	}


	drawFlakes();

})();