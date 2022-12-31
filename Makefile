.PHONY: $(shell sed -n -e '/^$$/ { n ; /^[^ .\#][^ ]*:/ { s/:.*$$// ; p ; } ; }' $(MAKEFILE_LIST))
MAKEFLAGS := --jobs=999

install-app:
	cd ./app/ && npm install && cd ..

build:
	docker-compose build

db-create-table:
	docker start db && docker start app
	docker exec app npm run create-tables
	docker stop db && docker stop app

run-local:
	docker-compose up -d
	xdg-open http://localhost:8080

stop-local:
	docker-compose down