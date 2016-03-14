defmodule Mesoscope.ChronosController do
  use Mesoscope.Web, :controller

  def jobs(conn, _params) do
    conn
    |> json Mesoscope.ChronosJobs.get_jobs()
  end
end
