defmodule Mesoscope.ChronosController do
  use Mesoscope.Web, :controller

  def jobs(conn, _params) do
    conn
    |> put_resp_content_type("application/json")
    |> text HTTPotion.get("10.141.141.10:4400/scheduler/jobs").body
  end
end
