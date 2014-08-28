var uivars = (function() {

	return {
		text2Vector : function(pText) {
			var lcSplit = pText.replace(' ', '').split(',');
			return lcSplit;
		},
		getVectorById : function(pDomId) {
			var lcVector = this.text2Vector($('#' + pDomId).val());
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