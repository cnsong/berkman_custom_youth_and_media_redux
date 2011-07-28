jQuery(document).ready(function() {
	jQuery('#content').isotope({
		itemSelector: '.block',
		layoutMode: 'masonryHorizontal',
		getSortData: {
			index: function(elem) {
				return -Math.abs(elem.height() - elem.width());
			}
		},
		sortBy: 'index',
		sortAscending: false,
	});
	jQuery('.block').bind({
		'mouseleave': function(e) { jQuery(e.target).find('.post-excerpt').slideUp('fast'); },
		'mouseenter': function(e) { jQuery(e.target).find('.post-excerpt').slideDown('fast'); }
	});
});
