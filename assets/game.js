var x = view.size.width;
var y = view.size.height;

var jumpForce = 10;
var gravity = 2;

// -------------------------------------------


var path = new Path.Circle({
	center: new Point(x/7, y/1.4),
	radius: 50,
	fillColor: "green"
});

function onFrame(ev) {

	if (path.center.y > y/1.4) {
		path.center.y += gravity;
	} else {

	}
	
	
	$("canvas").keypress(function(event) {
		if (event.which === 32) {
			path.center.y += jumpForce;
		}
	})
}
