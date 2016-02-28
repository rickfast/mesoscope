defmodule Mesoscope.PageController do
  use Mesoscope.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
