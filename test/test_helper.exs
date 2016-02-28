ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Mesoscope.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Mesoscope.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Mesoscope.Repo)

