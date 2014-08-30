"use strict";

var coordinateui = (function() {

	var lcCanvasContext = null;

	const
	lcCanvasWidth = 400;
	const
	lcCanvasHeight = 400;
	
	const lcStep = 10;

	return {
		reset: function() {
			lcCanvasContext.clearRect(0, 0, lcCanvasWidth, lcCanvasHeight);
			this.init();
			
		},
		init : function() {
			var cvs = document.getElementById('cvs');
			lcCanvasContext = cvs.getContext('2d');
			lcCanvasContext.lineWidth = 1;

			this.initializeCoordinate(lcCanvasContext);
		},
		drawPoint : function(pContext, x, y,pColor) {
			
			var lcX = x * lcStep;
			var lcY = y * lcStep;
			
			pContext.beginPath();

			pContext.arc(lcX + (lcCanvasWidth / 2), (lcY * (-1))
					+ (lcCanvasHeight / 2), 5, 0, 2 * Math.PI, false);
			pContext.fillStyle = pColor;
			pContext.fill();
			pContext.stroke();
		},
		drawPointMe: function(x, y) {
			this.drawPoint(lcCanvasContext,x,y,'green');
		},
		drawPointEnemy: function(x, y) {
			this.drawPoint(lcCanvasContext,x,y,'purple');
		},
		initializeCoordinate : function(pContext) {

			for (var x = 0.5; x < lcCanvasWidth; x += 10) {
				pContext.moveTo(x, 0);
				pContext.lineTo(x, lcCanvasHeight);
			}

			for (var y = 0.5; y < lcCanvasHeight; y += 10) {
				pContext.moveTo(0, y);
				pContext.lineTo(lcCanvasWidth, y);
			}

			pContext.strokeStyle = "#eee";
			pContext.stroke();

			pContext.beginPath();

			pContext.rect(0, 0, lcCanvasWidth, lcCanvasHeight);

			pContext.moveTo(lcCanvasWidth / 2, 0);
			pContext.lineTo(lcCanvasWidth / 2, lcCanvasHeight);

			pContext.moveTo(0, lcCanvasHeight / 2);
			pContext.lineTo(lcCanvasWidth, lcCanvasHeight / 2);

			pContext.strokeStyle = "#000";
			pContext.stroke();

		}
	}

})();

$(document).ready(function() {
	coordinateui.init();
});
