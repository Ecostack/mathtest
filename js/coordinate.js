"use strict";

$(document).ready(function() {
	var cvs = document.getElementById('cvs');
	var ctx = cvs.getContext('2d');
	ctx.lineWidth = 1;

	initializeCoordinate(ctx);
	drawPoint(ctx, 20, 20);
});

function drawPoint(pContext, x, y) {
	pContext.beginPath();

	pContext.arc(x, y, 5, 0, 2 * Math.PI, false);
	pContext.fillStyle = 'green';
	pContext.fill();
	pContext.stroke();

}

function initializeCoordinate(pContext) {

	var lcWidth = 400;
	var lcHeight = 400;

	for (var x = 0.5; x < lcWidth; x += 10) {
		pContext.moveTo(x, 0);
		pContext.lineTo(x, lcHeight);
	}

	for (var y = 0.5; y < lcHeight; y += 10) {
		pContext.moveTo(0, y);
		pContext.lineTo(lcWidth, y);
	}

	pContext.strokeStyle = "#eee";
	pContext.stroke();

	pContext.beginPath();

	pContext.rect(0, 0, lcWidth, lcHeight);

	pContext.moveTo(lcWidth / 2, 0);
	pContext.lineTo(lcWidth / 2, lcHeight);

	pContext.moveTo(0, lcHeight / 2);
	pContext.lineTo(lcWidth, lcHeight / 2);

	pContext.strokeStyle = "#000";
	pContext.stroke();

}
