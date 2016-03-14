defmodule Mesoscope.MarathonController do
  use Mesoscope.Web, :controller

  def marathon_url() do
    Config.marathon_url()
  end

  def apps(conn, _params) do
    conn
    |> json Mesoscope.MarathonApps.get_apps()
  end

  def app_by_id(conn, params) do
    conn
    |> text HTTPotion.get("#{marathon_url()}/v2/apps/#{params["id"]}").body
  end
end
