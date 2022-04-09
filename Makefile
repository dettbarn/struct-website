intPath=/var/www/html/struct

deploy-int:
	cp ./*.html $(intPath)/
	cp ./*.ico $(intPath)/
	cp ./css/* $(intPath)/css/
	cp ./img/* $(intPath)/img/
	cp ./js/* $(intPath)/js/
