TELEMETRY GUI FOR PROM RACING FSAE.
-----------------------------------
REQUIREMENTS (Do once):
1.1) Clone this repo: https://github.com/ggfiogkos69/Telemetry-GUI
REQUIREMENTS (Do once):
1.1) Clone this repo: https://github.com/ggfiogkos69/Telemetry-GUI

1.2) install node.js: https://nodejs.org/en/download
1.2) install node.js: https://nodejs.org/en/download

1.3) open cmd and run:
1.3) open cmd and run:
 npm install -g nodemon
 npm install serialport@9.2.8 

1.4) open cmd or PowerShell as admin and run:
1.4) open cmd or PowerShell as admin and run:
 wsl --install 

1.5) install ngrok: https://ngrok.com/download

RUN THE APP (Do everytime):
2.1) open cmd or PowerShell on the repo directory and run:
1.5) install ngrok: https://ngrok.com/download

RUN THE APP (Do everytime):
2.1) open cmd or PowerShell on the repo directory and run:
 npm run devStart (This starts the GUI)
 you can access it on http://localhost:8000
 username:prom password:1234
 username:prom password:1234

2.2) open cmd or PowerShell on the repo directory and run:
2.2) open cmd or PowerShell on the repo directory and run:
 wsl (This switches cmd to Unix terminal)
 npm run grafana (This starts grafana)
 you can access it on http://localhost:3000
 username:admin password:admin dashboard:Prom

2.3)(Optional) open cmd or Powershell and run:
 ngrok http 8000 (This creates a link to localhost:8000 to send to others)

 HOW TO STREAM DATA (Always after 2.1, 2.2):
3.1) Identify the COM port that is being used by the receiver (ex. with Device Manager).
3.2) On the app, click "Settings" from the tab on the left.
3.3) Enter port (ex. COM5) and baud rate (ex. 9600). Race name is optional.
3.4) Click on "Start Recording" and now you should be able to stream data.
3.5) Click on "Homepage" and then on "Choose your data" from the upper left corner. Coose the data you want to view and the plots will appear.
 username:admin password:admin dashboard:Prom

2.3)(Optional) open cmd or Powershell and run:
 ngrok http 8000 (This creates a link to localhost:8000 to send to others)

 HOW TO STREAM DATA (Always after 2.1, 2.2):
3.1) Identify the COM port that is being used by the receiver (ex. with Device Manager).
3.2) On the app, click "Settings" from the tab on the left.
3.3) Enter port (ex. COM5) and baud rate (ex. 9600). Race name is optional.
3.4) Click on "Start Recording" and now you should be able to stream data.
3.5) Click on "Homepage" and then on "Choose your data" from the upper left corner. Coose the data you want to view and the plots will appear.


Hints:
-> You can open a terminal on the repo directory by right clicking on the folder that contains the code.
-> WSL is required for step 6 because Grafana does not seem to function properly on Windows.
-> You can view the raw .json that is being streamed through the app terminal or the terminal that you used to start the app.
-> JSON looks like: {"key1": value1, "key2" :value2}
-> You can open a terminal on the repo directory by right clicking on the folder that contains the code.
-> WSL is required for step 6 because Grafana does not seem to function properly on Windows.
-> You can view the raw .json that is being streamed through the app terminal or the terminal that you used to start the app.
-> JSON looks like: {"key1": value1, "key2" :value2}

WHY AM I USING IT:
GitHub -> no comment.
GitHub -> no comment.
node.js -> server environment, contains 'npm' command.
npm -> easily installs all the dependencies of the project.
nodemon -> tool that automatically restarts the app when file changes in the directory are detected.
serialport -> package to access serialports. Specific version needed, that explains @9.2.8.
WSL -> Windows Linux Subsystem. Unix commands are required to start Grafana because ofbad dev work, don't ask why.
WSL -> Windows Linux Subsystem. Unix commands are required to start Grafana because ofbad dev work, don't ask why.
Grafana -> app that handles data through InfluxDB and creates the required plots.
InfluxDB -> Time series database that stores the Telemetry data.
ngrok -> creates a sharable link that everyone can use to view the app and data real-time.



