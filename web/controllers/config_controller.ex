defmodule Mesoscope.ConfigController do
  use Mesoscope.Web, :controller

  def has_value(variable) do
    if System.get_env(variable), do: true, else: false
  end

  def config() do
    %{
      "marathon" => %{
        "enabled" => has_value("MARATHON_URL")
      },
      "chronos" => %{
        "enabled" => has_value("CHRONOS_URL")
      }
    }
  end

  def get_config(conn, _params) do
    conn
    |> put_resp_content_type("application/json")
    |> json config()
  end
end
