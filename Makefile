
start:
	docker-compose up -d

down:
	docker-compose down

restart: down start

install:
	docker-compose build
	docker-compose run --rm vue npm install

logs:
	docker-compose logs -f