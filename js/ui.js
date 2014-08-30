var uivars = (function() {
	
	return {
		getVectorMe : function() {
			return this.slider2Vector('ME');
		},
		getVectorEnemy : function() {
			return this.slider2Vector('ENEMY');
		},
		slider2Vector: function(pName) {
			var lcVector = [$('#slider_'+pName+'_X').val(), $('#slider_'+pName+'_Y').val(), $('#slider_'+pName+'_Z').val()];
			return lcVector;
		},
		writeLblHorizion : function(pVal) {
			$('#lbl_horizon').html(String(pVal) + ' ' + String('&#176;'));
		},
		writeLblVertical : function(pVal) {
			$('#lbl_vertical').html(String(pVal) + ' ' + String('&#176;'));
		}
	};

})();

$(document).ready(function() {
	$('.slider').on('change', function(){
		calculation.calc();
	});
});