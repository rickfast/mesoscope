defmodule Mesoscope.Marathon do
  use GenServer

  def marathon_url() do
    System.get_env("MARATHON_URL") || "10.141.141.10:8080"
  end

  def start_link() do
    GenServer.start_link(__MODULE__, [%{}], name: :marathon)
  end

  def get_apps() do
    GenServer.call(:marathon, {:get_apps})
  end

  def init(state) do
    poll()
    {:ok, state}
  end

  def handle_call({:get_apps}, _from, state) do
    {:reply, state, state}
  end

  def handle_info({:update_apps, apps}, _state) do
    poll()
    {:noreply, apps}
  end

  def poll() do
    Process.send_after(:marathon, {:update_apps,
      Poison.Parser.parse!(HTTPotion.get("#{marathon_url()}/v2/apps").body)},
      1000)
  end
end
