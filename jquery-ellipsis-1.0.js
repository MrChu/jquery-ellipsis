/*
 * File:        jquery.ellipsis.js
 * Version:     1.0
 * Author:      MrChu
 * Info:        www.chuweibiao.com
 * Smile to life whatever and whenever.
 */
(function ($) {
	$.fn.ellipsis = function (options) {
		var hoverTip = true;
		var openTip = options.openTip;
		if (typeof(openTip) != "undefined" && !openTip)
			hoverTip = false;
		var limitLength = options.maxLength;
		this.each(function () {
			var originalText = this.innerText;
			if (originalText.length > limitLength) {
				if (hoverTip)
					this.title = originalText;
				originalText = originalText.substr(0, limitLength);
				var lastChar = originalText.charAt(originalText.length - 1);
				if (lastChar == " ")
					originalText += "...";
				this.innerText = originalText + "...";
			}
		});
	};
})(jQuery);