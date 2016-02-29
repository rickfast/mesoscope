defmodule Mesoscope.MarathonController do
  use Mesoscope.Web, :controller

  def apps(conn, _params) do
    conn
    |> put_resp_content_type("application/json")
    |> text HTTPotion.get("10.141.141.10:8080/v2/apps").body
  end

  def app_by_id(conn, params) do
    conn
    |> put_resp_content_type("application/json")
    |> text HTTPotion.get("10.141.141.10:8080/v2/apps/#{params["id"]}").body
  end
end
