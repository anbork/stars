// Рисуем квадрат
var square = document.getElementById("square");
var ctx = square.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, 100, 100);

tool.onMouseDown = function() {
	ctx.fill();
}

function createStar(left, top, color) {
	return new Path.Star({ 
		center: [left, top],	
		points: 5, 
		radius1: 16, 
		radius2: 40, 
		fillColor: color,
		onMouseEnter: function() {
			ctx.fillStyle = this.fillColor.toCSS();
		},
		onMouseLeave: function() {
			ctx.fillStyle = 'white';
		}
	});
}

createStar(50, 50, 'red')
createStar(150, 50, 'green')
createStar(250, 50, 'blue')
createStar(350, 50, 'yellow')
createStar(450, 50, 'black')
