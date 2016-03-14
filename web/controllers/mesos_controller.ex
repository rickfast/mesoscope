defmodule Mesoscope.MesosController do
  use Mesoscope.Web, :controller

  def slaves(conn, _params) do
    conn
    |> json Mesoscope.MesosSlaves.get_slaves()
  end
end
