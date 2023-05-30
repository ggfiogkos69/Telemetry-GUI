TELEMETRY GUI FOR PROM RACING FSAE.
-----------------------------------
ON WINDOWS:
1) Clone this repo: https://github.com/ggfiogkos69/Telemetry-GUI

2) install node.js: https://nodejs.org/en/download

3) open cmd and run:
 npm install -g nodemon
 npm install serialport@9.2.8 

4) open cmd or PowerShell as admin and run:
 wsl --install 

5) open cmd or PowerShell on the repo directory and run:
 npm run devStart (This starts the GUI)
 you can access it on http://localhost:8000
 username:prom password:1234

6) open cmd or PowerShell on the repo directory and run:
 wsl (This switches cmd to Unix terminal)
 npm run grafana (This starts grafana)
 you can access it on http://localhost:3000
 username:admin password:admin


Hints:
-> You can open a terminal on the repo directory by right clicking on the folder that contains the code
-> WSL is required for step 6 because Grafana does not seem to function properly on Windows

WHY AM I USING IT:
node.js -> server environment, contains 'npm' command.
npm -> easily installs all the dependencies of the project.
nodemon -> tool that automatically restarts the app when file changes in the directory are detected.
serialport -> package to access serialports. Specific version needed, that explains @9.2.8.
WSL -> Windows Linux Subsystem. Unix commands are required to start Grafana, bad dev work, don't ask why.
Grafana -> app that handles data through InfluxDB and creates the required plots.
InfluxDB -> Time series database that stores the Telemetry data.

