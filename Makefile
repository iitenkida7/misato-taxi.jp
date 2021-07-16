
start:
	docker-compose up -d

down:
	docker-compose down

restart: down start

install:
	docker-compose build
	docker-compose run --rm node npm install

logs:
	docker-compose logs -f

test:
	docker-compose run --rm node npm test

build:
	docker-compose run --rm node npm run build

serve:
	docker-compose run --rm node npm run serve
