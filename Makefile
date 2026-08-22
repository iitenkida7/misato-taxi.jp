
restart:
	@make down
	@make up

up:
	docker compose up -d

down:
	docker compose down

install:
	docker compose run --rm bun bun install

logs:
	docker compose logs -f

generate:
	docker compose run --rm bun bun run build

