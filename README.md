# Mesoscope

## Development

To start the Phoenix app:

  * Install Elixir http://elixir-lang.org/install.html
  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `npm install`
  * Start Mesos in Vagrant (see below)
  * Set up the environment variables with `./setenv.sh`
  * Start Phoenix endpoint with `mix phoenix.server`. This will run webpack and the server.

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Mesos

For development purposes, you need a Mesos cluster running. You can use the "playa-mesos" Vagrant box to stand up a Mesos cluster quickly:

Install Vagrant: https://www.vagrantup.com/downloads.html

You can run the playa-mesos box by running:

```sh
git clone https://github.com/mesosphere/playa-mesos.git
cd playa-mesos
vagrant up
```

### Run Playa Mesos

## Docker

Build the Docker image `expedia/mesoscope`:

```sh
docker build -t expedia/mesoscope .
```

Run it:

```sh
docker run -e MESOS_URL=10.141.141.10:5050 -e MARATHON_URL=10.141.141.10:8080 -e CHRONOS_URL=10.141.141.10:4400 -P -d expedia/mesoscope
```

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: http://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
