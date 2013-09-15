$(document).on('click', '#snapshot', function () {
	var url = $('#url').val(),
		img = new Image(),
		src = '/snapshot?url=' + url;

	img.onload = function () {
		$('#result').html(img);
	};
	img.src = src;
}).on('click', '#extract', function () {
	var url = $('#url').val(),
		src = '/extract?url=' + url;

	$.get(src, function (data) {
		$('#result').html([
			'<blockquote>',
			'<p>',
			data.title,
			'</p>',
			'<small>',
			data.description,
			'</small>',
			'</blockquote>',
			'<img src="',
			data.image,
			'" />'
		].join(''))
	});
});