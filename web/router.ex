defmodule Mesoscope.Router do
  use Mesoscope.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Mesoscope do
    pipe_through :browser

    get "/", PageController, :index
    get "/chronos/jobs", ChronosController, :jobs
  end

  scope "/config", Mesoscope do
    pipe_through :api

    get "/", ConfigController, :get_config
  end

  scope "/marathon", Mesoscope do
    pipe_through :api

    get "/apps", MarathonController, :apps
    get "/apps/:id", MarathonController, :app_by_id
  end

  scope "/mesos", Mesoscope do
    pipe_through :api

    get "/slaves", MesosController, :slaves
  end

end
