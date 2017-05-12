var StringUtils = (function() {
	var vm = {};

	vm.capitalize = capitalize;
	vm.format = format;
	return vm;

	//------------------------------------------------------------------------------------------------------------------
	function capitalize(str) {
		/*Should capitalize the first letter in each sentence within @input[str]
		e.g.:
			capitalize("soccer is for winners.") -> Soccer is for winners.
			capitalize("BASEBALL IS LAME!") -> Baseball is lame.
			capitalize("yay soccer! boo baseball.") -> Yay soccer! Boo baseball.*/
	 }

	function format(formatString) {
		/*Should format a string replacing placeholders.
		e.g.:
			format("I love {0}", "soccer") -> I love soccer
			format("I love {0}, baseball is {1}.", "soccer", "lame") -> I love soccer, baseball is lame.
		 */
	 }

}());