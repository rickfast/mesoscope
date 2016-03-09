defmodule Mesoscope.MesosController do
  use Mesoscope.Web, :controller

  def mesos_url() do
    System.get_env("MESOS_URL") || "10.141.141.10:5050"
  end

  def slaves(conn, _params) do
    conn
    |> put_resp_content_type("application/json")
    |> text HTTPotion.get("#{mesos_url()}/master/slaves").body
  end
end
