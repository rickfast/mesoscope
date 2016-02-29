defmodule Mesoscope.Marathon do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, [%{:name => "hello"}], name: :marathon)
  end

  def update_apps(apps) do
    GenServer.cast(:marathon, {:update_apps, apps})
  end

  def get_apps() do
    GenServer.call(:marathon, {:get_apps})
  end

  ## Server Callbacks

  def handle_call({:get_apps}, _from, state) do
    {:reply, state, state}
  end

  def handle_cast({:update_apps, apps}, _from, state) do
    {:noreply, apps}
  end
end
