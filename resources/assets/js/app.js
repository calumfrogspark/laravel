import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap';
import _ from 'lodash';
import 'slick-carousel';
import vue from 'vue';
import AOS from 'aos';

window.jQuery = $;
window.Vue = vue;

// vue components
import ExampleComponent from './components/ExampleComponent.vue';

// run the following scripts when the document is fully loaded in to the browser
$(function() {
	// AOS.
	setTimeout(() => {
		$('body').addClass('loaded');
		setTimeout(() => {
			AOS.init();
		}, 500);
	}, 1000);

	offsetContent();
	setSidebarHeight();
	slickCarousels();

	checkLogin();
	registerVueComponents();

	$(window).on('resize', function() {
		offsetContent();
		setSidebarHeight();
	});

	// watch events for various sitewide elements (e.g. nav bar burger menu)

	// Burger click
	$('#burger').on('click', function() {
		open = !open;
		toggleMenu(open);
	});

	// Active class.
	$('#sidebar .nav [href]').each(function() {
		if (this.href == window.location.href) {
			$(this).addClass('active');
		}

		let parent = $(this).closest('.submenu');
		if (parent.length && parent != null) {
			parent.addClass('transitioning');
			parent.removeClass('transitioning');
			parent.addClass('show');

			let parentlink = parent.prev();
			parentlink.addClass('active');
		}
	});

	$('a.parent-item').on('click', function(event) {
		event.preventDefault();

		const submenu = $(this).siblings('.submenu');
		if (submenu.length) {
			submenu.addClass('transitioning');
			submenu.removeClass('transitioning');
			submenu.toggleClass('show');

			$(this).toggleClass('active');
		}
	});

	$('label.checkbox-label').click(function(event) {
		event.preventDefault();
		// get the checkbox input element
		let checkbox = $('input[type="checkbox"][name="confirm-sign"]');
		// get the status of the checkbox
		let propValue = checkbox.prop('checked');
		// set the new value to the inverse of the original value
		checkbox.prop('checked', !propValue);
		// set the label element to display the check
		$(this).toggleClass('checked');

		if (!$('input[name="signature"]').val()) {
			$('.error').text('Please enter your signature first!');
			checkbox.prop('checked', false);
			$(this).removeClass('checked');
		} else {
			if (checkbox.prop('checked') && $('input[name="signature"]').val()) {
				$('.error').text('');

				$('.sign-form-submit')
					.removeClass('d-none')
					.addClass('d-block');
			} else {
				$('.sign-form-submit')
					.removeClass('d-block')
					.addClass('d-none');
			}
		}
	});
});

function checkLogin() {
	const url = new URL(window.location.href);

	let path = url.pathname;
	let regex = new RegExp('reset-password[A-Z a-z 0-9]');
	path = path.replaceAll('/', '');

	if (path === '' || path === 'forgotten-password' || regex.test(path)) {
		$('body').addClass('login');

		if ($(window).width() >= 992) {
			$('html').addClass('overflow-hidden');
		}
	}
}

/**
 * @description set the height of offset of the sidebar, based on size of the site header (if the window width >= 992px)
 */
function setSidebarHeight() {
	if ($(window).width() >= 992) {
		let header = $('header.header');
		let sidebar = $('div#sidebar');

		if (header.length && sidebar.length) {
			let headerHeight = header.outerHeight();
			sidebar.css({
				'height': `calc(100vh - ${headerHeight}px)`,
				'top': `${headerHeight}px`,
			});
		}
	}
}

/**
 * @description offset the main content by the height of the header dynamically
 */
function offsetContent() {
	let header = $('header.header');
	let content = $('section.yield-content');

	if (header.length && content.length) {
		let height = header.outerHeight();
		content.css('margin-top', `${height}px`);
	}
}

/**
 * @description register the custom vue components that have been created so that they can be used in the applcation
 */
function registerVueComponents() {
	console.log('registering vue components');

	Vue.component('example-component', ExampleComponent);

	const app = new Vue({
		el: '#vue-container',
	});
}

/**
 * @description register the slick carousels and initialise them
 */
function slickCarousels() {
	// on the initialisation of the slick slider
	$('.carousel').on('init', function(event, slick, direction) {
		// check to see if there is more than 1 slide and if we have dots
		if (slick.slideCount == 1 && slick.$dots == null) {
			// if not, set the paddinhg-bottom to 0
			$(this).addClass('pb-0');
		}
	});

	$('.login-carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 12000,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,

		customPaging: (slider, i) => {
			return `<button id="slick-dot-${i}" class=""></button>`;
		},
	});

	$('.carousel').slick({
		arrows: true,
		autoplay: false,
		dots: true,
		infinite: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
		],
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button class="slick-arrow slick-next"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"></button>',
	});

	$('.module-carousel').slick({
		arrows: true,
		autoplay: false,
		dots: true,
		infinite: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
		],
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button class="slick-arrow slick-next"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"></button>',
	});

	$('.carousel-single').slick({
		arrows: true,
		autoplay: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button class="slick-arrow slick-next"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"></button>',
	});
}

/**
 * @description handles opening and closing of the mobile menu on the site
 *
 * @param {*} open flag indicating whether or not the menu is in an open state
 */
var open = false; // should be "hoisted" to a global level
let toggleMenu = open => {
	$('#burger').toggleClass('open', open);
	$('#navigation-mobile ul').toggleClass('open', open);
};
