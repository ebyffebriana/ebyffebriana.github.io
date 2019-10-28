// event pada link di klik
// dollar adalah jquery
// jquery tolong carikan saya element bernama kelas page scroll
// pada saat dia di klik, jalankana fungsi ini
$('.page-scroll').on('click', function(e){

	// debugging
	// console.log('ok');
	// ambil isi href
	// membuat variabel untuk navbar
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'swing');

	e.preventDefault();
});

// about
// ketika windown di load, jalankan fungsi berikut ini
$(window).on('load', function(){
	// jquery mencari pKiri lalu menambahkan kelas pMuncul
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});
// menyimpan parallax
// window adalah seluruhnya

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll/5 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll/4 +'%)'
	});

	// portfolio	
	if (wScroll > $('.portfolio').offset().top - 250) {
		// fungsi each untuk menampilkan satu persatu gambar galeri
		$('.portfolio .thumbnail').each(function(i)
			// i = index
			// indeks selalu di mulai dari nol
		{
			setTimeout(function(){
				//semua thumbnail dalam portfolio secara simultan akan diberi kelas muncul
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});

		// eq = equal to/ sebanding
	}

});
