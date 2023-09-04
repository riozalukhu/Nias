        var i = 0;
		var images = [];
		var time = 3000;

		images[0] = 'img/sejarah.jpg';
		images[1] = 'img/sejarah2.jpg';
		images[2] = 'img/sejarah3.jpg';
		images[3] = 'img/sejarah4.jpg';

		function changeimg() {
			document.slide.src = images[i];

			if(i < images.length - 1){
				i++;
			}else{
				i = 0;
			}

			setTimeout("changeimg()", time);
		}
		

		window.onload=changeimg;