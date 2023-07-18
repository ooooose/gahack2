FROM ruby:3.1.0
ENV TZ=Asia/Tokyo
ENV RAILS_ENV=development
ENV APP_ROOT /myapp

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

WORKDIR ${APP_ROOT}
COPY Gemfile Gemfile.lock ${APP_ROOT}
RUN bundle install
COPY . ${APP_ROOT}

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
