var calculation = (function() {

	var lcVector = {
		me : [],
		enemy : []
	};

	return {
		calc : function() {
			lcVector.me = uivars.getVectorMe();
			lcVector.enemy = uivars.getVectorEnemy();
			
			coordinateui.reset();
			coordinateui.drawPointMe(lcVector.me[0],lcVector.me[2]);
			coordinateui.drawPointEnemy(lcVector.enemy[0],lcVector.enemy[2]);
			
			uivars.writeLblHorizion(this.calculateHorizion());
			uivars.writeLblVertical(this.calculateVertical());
		},
		calculateHorizion : function() {
			var lcExactDegree = this.getExactDegreeHorizon();
			if (lcExactDegree === undefined) {
				var lcBaseDegree = this.getBaseDegreeHorizon();

				var lcX = lcVector.enemy[0] - lcVector.me[0];
				var lcZ = lcVector.enemy[2] - lcVector.me[2];

				var lcAspectRatio = lcX / lcZ;

				var lcRadians = Math.atan(lcAspectRatio);

				var lcDegree = lcRadians * (180 / Math.PI);

				lcExactDegree = lcBaseDegree + lcDegree;
			}
			return Math.round(lcExactDegree);
		},
		calculateVertical : function() {
			var lcExactDegree = this.getExactDegreeVertical();
			if (lcExactDegree === undefined) {
				var lcBaseDegree = this.getBaseDegreeVertical();

				var lcY = lcVector.enemy[1] - lcVector.me[1];
				var lcAnkathete = this.getAnkatheteForVertical();

				var lcAspectRatio = lcY / lcAnkathete;

				var lcRadians = Math.atan(lcAspectRatio);

				var lcDegree = lcRadians * (180 / Math.PI);

				lcExactDegree = lcBaseDegree + lcDegree;
			}
			return Math.round(lcExactDegree);
		},

		getBaseDegreeHorizon : function() {
			var lcReturn = 0;
			if (lcVector.me[2] < lcVector.enemy[2]) {
				lcReturn = 90.0;
			}
			if (lcVector.me[2] > lcVector.enemy[2]) {
				lcReturn = 270.0;
			}
			return lcReturn;
		},
		getBaseDegreeVertical : function() {
			var lcReturn = 90;
			return lcReturn;
		},
		getExactDegreeHorizon : function() {
			var lcReturn = undefined;
			if (lcVector.me[0] == lcVector.enemy[0]) {
				if (lcVector.me[2] < lcVector.enemy[2]) {
					lcReturn = 90;
				} else if (lcVector.me[2] > lcVector.enemy[2]) {
					lcReturn = 270;
				}
			}

			if (lcVector.me[2] == lcVector.enemy[2]) {
				if (lcVector.me[0] < lcVector.enemy[0]) {
					lcReturn = 180;
				} else if (lcVector.me[0] > lcVector.enemy[0]) {
					lcReturn = 0;
				}
			}

			return lcReturn;
		},
		getExactDegreeVertical : function() {
			var lcReturn = undefined;
			if (lcVector.me[1] == lcVector.enemy[1]) {
				lcReturn = 90;
			}
			return lcReturn;
		},
		getAnkatheteForVertical : function() {
			var lcReturn = Math.sqrt(Math.pow(
					(lcVector.me[0] - lcVector.enemy[0]), 2)
					+ Math.pow((lcVector.me[2] - lcVector.enemy[2]), 2));
			return lcReturn;
		}
	};
})();

$(document).ready(function() {
	var lcVectorMeInitial = '1,2,3';
	var lcVectorEnemyInitial = '2,2,5';

	$('#txt_vector_me').val(lcVectorMeInitial);
	$('#txt_vector_enemy').val(lcVectorEnemyInitial);
	$('#btn_calc').click(function() {
		calculation.calc();
	});
});
