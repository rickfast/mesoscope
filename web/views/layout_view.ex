defmodule Mesoscope.LayoutView do
  use Mesoscope.Web, :view

  def has_value(variable) do
    if System.get_env(variable), do: true, else: false
  end

  def config() do
    Poison.encode!(%{
      "marathon" => %{
        "enabled" => has_value("MARATHON_URL")
      },
      "chronos" => %{
        "enabled" => has_value("CHRONOS_URL")
      }
    })
  end
end
