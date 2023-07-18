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

db-migrate:
	docker-compose run --rm api bundle exec rails db:migrate RAILS_ENV=development

rubocop:
	docker-compose run --rm api bundle exec rubocop -a

rspec:
	docker-compose run --rm api bundle exec rspec

routes:
	docker-compose run --rm api bin/rails routes

console:
	docker-compose run --rm api bin/rails c
