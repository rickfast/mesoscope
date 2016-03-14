defmodule Config do

  def mesos_url() do
    System.get_env("MESOS_URL") || "10.141.141.10:5050"
  end

  def marathon_url() do
    System.get_env("MARATHON_URL") || "10.141.141.10:8080"
  end

  def chronos_url() do
    System.get_env("CHRONOS_URL") || "10.141.141.10:4400"
  end
end
