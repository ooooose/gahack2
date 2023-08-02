up:
	docker-compose up -d

build:
	docker-compose build
	
stop:
	docker-compose stop

down:
	docker-compose down

ps:
	docker-compose ps -a

logs:
	docker-compose logs -f api

bundle:
	docker-compose run --rm api bundle install --without production

g-model:
	docker-compose run --rm api bin/rails g model $(NAME)

d-model:
	docker-compose run --rm api bin/rails d model $(NAME)

g-controller:
	docker-compose run --rm api bin/rails g controller $(NAME)

d-controller:
	docker-compose run --rm api bin/rails d controller $(NAME)

g-serializer:
	docker-compose run --rm api bin/rails g serializer $(NAME)

d-serializer:
	docker-compose run --rm api bin/rails d serializer $(NAME)

db-migrate:
	docker-compose run --rm api bin/rails db:migrate

fresh:
	docker-compose run --rm api bin/rails db:migrate:reset

seed:
	docker-compose run --rm api bin/rails db:seed

rubocop:
	docker-compose run --rm api bundle exec rubocop -a

rspec:
	docker-compose run --rm api bundle exec rspec

routes:
	docker-compose run --rm api bin/rails routes

console:
	docker-compose run --rm api bin/rails c

lint:
	docker-compose run --rm front npm run lint

fix:
	docker-compose run --rm front npm run fix
