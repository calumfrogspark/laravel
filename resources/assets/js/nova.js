import $ from 'jquery';
window.jQuery = $;
import '@popperjs/core';
import 'bootstrap';
import _ from 'lodash';

$(document).ready(function() {
	console.info('Running startup JS functions');
	offsetContent();	
	console.info('Startup JS functions complete');
})

function offsetContent() {
	let elements = $('#nova-sidebar, #nova-content');
	let header = $('#nova-header');

	if (elements.length && header.length) {
		let height = $(header).outerHeight();
		$(elements).each(function(index, element) {
			console.log(element);
			$(element).css('margin-top', `${height}px`);
		});
	}
}