import os
print("jjj", flush=True)
os.chdir("./bin")
os.system("cd grafana-8.0.6")
os.system("cd bin")

os.system("./grafana-server")
