FROM bitwalker/alpine-elixir-phoenix:2.0
EXPOSE 4000
ADD . /
RUN npm install
RUN mix do deps.get, deps.compile
ENTRYPOINT ["mix","phoenix.server"]
