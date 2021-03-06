var createDiv     = require('../../components/domUtils').createDiv;
var zIndexManager = require('./zIndexManager');

var tooltip = createDiv('tooltip');
zIndexManager.addElement(tooltip, { alwaysOnFront: true });

function addTooltip(dom, text) {
	dom.addEventListener('mouseenter', function(e) {
		tooltip.innerText = text;
		tooltip.style.display = 'block';
	});

	dom.addEventListener('mousemove', function(e) {
		tooltip.style.left = e.clientX + 10 + 'px';
		tooltip.style.top  = e.clientY + 10 + 'px';
	});

	dom.addEventListener('mouseleave', function() {
		tooltip.style.display = 'none';
	});

	return dom;
}

module.exports = addTooltip;