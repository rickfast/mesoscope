defmodule Mesoscope.ChronosJobs do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, [%{}], name: :chronos)
  end

  def get_jobs() do
    GenServer.call(:chronos, {:get_jobs})
  end

  def init(state) do
    poll()
    {:ok, state}
  end

  def handle_call({:get_jobs}, _from, state) do
    {:reply, state, state}
  end

  def handle_info({:update_jobs, jobs}, _state) do
    poll()
    {:noreply, jobs}
  end

  def poll() do
    Process.send_after(:chronos, {:update_jobs,
      Poison.Parser.parse!(HTTPotion.get("#{Config.chronos_url()}/scheduler/jobs").body)},
      1000)
  end
end
