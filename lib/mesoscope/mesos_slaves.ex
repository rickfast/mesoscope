defmodule Mesoscope.MesosSlaves do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, [%{}], name: :mesos_slaves)
  end

  def get_slaves() do
    GenServer.call(:mesos_slaves, {:get_slaves})
  end

  def init(state) do
    poll()
    {:ok, state}
  end

  def handle_call({:get_slaves}, _from, state) do
    {:reply, state, state}
  end

  def handle_info({:update_slaves, apps}, _state) do
    poll()
    {:noreply, apps}
  end

  def poll() do
    Process.send_after(:mesos_slaves, {:update_slaves,
      Poison.Parser.parse!(HTTPotion.get("#{Config.mesos_url()}/master/slaves").body)},
      1000)
  end
end
