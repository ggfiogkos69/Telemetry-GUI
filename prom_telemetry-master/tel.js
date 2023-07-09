//environment variables
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//declare libraries used
const fs = require('fs');
const auth = require('./authentication.js')
const {InfluxDB} = require('@influxdata/influxdb-client')
const checkAuthenticated = auth.checkAuthenticated;
const checkNotAuthenticated = auth.checkNotAuthenticated;
const express = require('express')
const app = express()
const http = require('http').Server(app)
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
var io = require('socket.io')(http)
const initializePassport = require('./passport-config')
const { prototype } = require('stream')
const data = require('./data.js')
const {spawn} = require('child_process');
dataformat =  require('./mypublic/data_dict.js');
//data.datacsv()
const utm = require('./utm.js')
const methodOverride = require('method-override')
var serialport = require("serialport")
var createInterface = require('readline').createInterface;
const arrayx = utm.arrayx;
const arrayy = utm.arrayy;
const size = utm.size;
const os = require('os');
const { data_dict } = require('./mypublic/data_dict.js');

var data_dict_4csv = [
  1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20,
21,
22,
23,
24,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
38,
39,
40,
41,
42,
43,
44,
45,
46,
47,
48,
49,
50,
51,
52,
53,
54,
55,
56,
57,
58,
59,
60,
61,
62,
63,
64,
65,
66,
67,
68,
69,
70,
71,
72,
73,
74,
75,
76,
77,
78,
79,
80,
81,
82,
83,
84,
85,
86,
87,
88,
89,
90,
91,
92,
93,
94,
95,
96,
97,
98,
99,
100,
101,
102,
103,
104,
105,
106,
107,
108,
109,
110,
111,
112,
113,
114,
115,
116,
117,
118,
119,
120,
121,
122,
123,
124,
125,
126,
127,
128,
129,
130,
131,
132,
133,
134,
135,
136,
137,
138,
139,
140,
141,
142,
143,
144,
145,
146,
147,
148,
149,
150,
151,
152,
153,
154,
155,
156,
157,
158,
159,
160,
161,
162,
163,
164,
165,
166,
167,
168,
169,
170
]


 var XMLHttpRequest = require('xhr2');
function convertformat(data) {
  datanew = ''

  Object.keys(data).forEach((key, i) => {
    datanew += key.toString()+'='+data[key].toString()+','
  });
  datanew = datanew.slice(0, -1)
  return datanew
}


function parsetodatabase(data) {
  datanew = convertformat(data)
let apiRequest = new XMLHttpRequest();
  apiRequest.open('POST', 'http://localhost:3000/api/live/push/custom_stream_id');
  apiRequest.setRequestHeader('Authorization','Bearer '+ 'eyJrIjoiMm03c0lXRWY0VGxrM0Vmd2hBelN6NWdtQ3ZSMHZLMTAiLCJuIjoidGVsIiwiaWQiOjF9');
  apiRequest.send('sma,host=smar '+datanew);
  // console.log(datanew);
  if (apiRequest.readyState === 4) {
    const response = JSON.parse(apiRequest.response);
    // console.log(response)

  }
}

/*function updateChart(value1, value2, value3){ // value1 = right top chart(0-100), value2 = left top chart(0-200), value3 = bottom chart (0-10000) 
        console.log("PANIKK")
        //here you can change the class of the signals in the middle container - ie change them from red to green or from green to red
        var element1 = document.getElementById("IMD") 
        if(element1.className == "live-icon red") console.log("found")
        if(value1 > 80 && element1.className == "live-icon red") {
          element1.classList.remove("red");
          element1.classList.add("green");
          console.log("not here")
    
         }

          chartInstance.data.labels.push(new Date());
          chartInstance.data.datasets.forEach((dataset) => {
              dataset.data.push(value2);
          });
          chartInstance2.data.labels.push(new Date());
          chartInstance2.data.datasets.forEach((dataset) => {
              dataset.data.push(value3);
          });
      
              chartInstance.data.labels.splice(0, 1);
        chartInstance.data.datasets[0].data.splice(0, 1);	
                  
     
     
          chartInstance2.data.labels.splice(0, 1);
              chartInstance2.data.datasets[0].data.splice(0, 1);
      
      //chartInstance3.data.datasets[0].data = [value3, 100-value3];
      var txt = value1.toString();
      //chartInstance3.options.elements.center.text = txt;
          //chartInstance3.update();
          chartInstance.update(0);
          chartInstance2.update(0);
    
      };   */



     const filename = 'prom_telemetry-master/public/data.csv';
function createCSVFile() {
  let csvContent = Object.keys(data_dict).join(',') + '\n';

  fs.writeFile(filename, csvContent, 'utf8', err => {
    if (err) {
      console.error('Error creating CSV file:', err);
    } else {
      console.log('CSV file created:', filename);
    }
  });
}

function appendToCSV(dictionary) {
  let csvContent = '';
  
  if (typeof dictionary !== 'object' || dictionary === null) {
    console.error('Invalid dictionary. Expected an object.');
    return;
  }

  // Adding the values to the CSV content
  const values = Object.keys(data_dict).map(key => dictionary.hasOwnProperty(key) ? dictionary[key] : '-');
  csvContent += values.map(getValueString).join(',') + '\n';

  // Appending the CSV content to the file
  fs.appendFile(filename, csvContent, 'utf8', err => {
    if (err) {
      console.error('Error appending to CSV file:', err);
    } else {
      console.log('Data successfully appended to CSV file:', filename);
    }
  });
}

function getValueString(value) {
  if (typeof value === 'string') {
    // Escape double quotes and wrap in double quotes
    return `"${value.replace(/"/g, '""')}"`;
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    return value.toString();
  } else {
    // Treat other types as empty string
    return '';
  }
}

const results = []
function isjson(str) {
  try {
    JSON.parse(str)
  } catch(e) {
    return false;

  }
  return true;
}
io.on('connection', function(socket) {
function start(port, baudrate) {
  mes = ""
  if (os.platform() === 'win32') {
  var myPort = new serialport(port, {
      baudRate:baudrate,
      parser: new serialport.parsers.Readline('\r\n')
  });
  }
  if (os.platform() === 'linux') {
    var myPort = new serialport('/dev/'+port, {
        baudRate:baudrate,
        parser: new serialport.parsers.Readline('\r\n')
    });
    }
  myPort.on('open', ()=>{
  console.log("port is open")
  });

var lineReader = createInterface({input: myPort})
    lineReader.on('line', (mydata)=>{
            
      fs.access(filename, fs.constants.F_OK, err => {
                  if (err) {
                    // If the file does not exist, create it and add default categories
                    createCSVFile();
                  }

                  // Example dictionary
                  

                  // Append data to the CSV file
                  appendToCSV( JSON.parse(mydata));
                });

                // console.log('pattern: ', mydata.toString());
                io.sockets.emit("terminal", mydata.toString())

                if( isjson(mydata)){
                  serial_data = JSON.parse(mydata)
                  // console.log("VDC: ", serial_data["vdc"])
                  //updateChart(90,0,0)
                  //parsetoinflux(serial_data)
                  for(var key in serial_data){
                    io.sockets.emit(key, serial_data[key])

                  }
                  parsetodatabase(serial_data)
                }
                mes = mydata;
            
        });
  }






app.get('/logging', (req,res) =>{
  console.log("reacheed ")
  console.log(req.query.port)
  start(req.query.port, parseInt(req.query.baudrate))

  });


})

  const org = 'prom'
  const token =  'Token zcKwm8QAadfj8GHaP1rreO1UHxrPAMIC6FMqeMUgOswramb5vZJ4CCub4w7uSaTKVVk02lQhLkZ2GkuSylwvAQ=='
  /*var myPort = new serialport('/dev/ttyUSB0', {
      baudRate:9600,
      parser: new serialport.parsers.Readline('\r\n')
  });*/

  const client = new InfluxDB({url: 'https://eu-central-1-1.aws.cloud2.influxdata.com', token: token})

  const {Point} = require('@influxdata/influxdb-client');


  Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
  if(!Date.now) Date.now = function() { return new Date(); }
  Date.time = function() { return Date.now().getUnixTime(); }
  bucket = 'prom'


  var writeApi = client.getWriteApi(org, bucket)
  writeApi.useDefaultTags({host: 'host1'})
  var point = new Point('mem')
    .floatField('used_percent', 23.43234543)
  var mes = 0;


  function parsetoinflux(dict) {

      var date = Date.now()
      const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
  var parsedUnixTime = new Date('Mon, 25 Dec 1995 13:30:00 GMT').getUnixTime();



        for(var key in dict){
          point = new Point('sensors')
            .floatField(key, dict[key])
            writeApi.writePoint(point)
        }
      writeApi
        .close()
        .then(() => {
            console.log('FINISHED')
        })

  }



  initializePassport(
      passport,
      name => users.find( user => user.name == name),
      id => users.find(user => user.id === id)
  )

  const users = []
  users.push({
      id: Date.now().toString(),
      name: "prom",
      password: "1234"
  })


  app.set('view-engine', 'ejs')
  app.use(express.static(__dirname + '/mypublic'));
  app.use(express.urlencoded({extended:false})) //declare that we want to use the variebles from the login.ejs, loginfail.ejs in the req variablebelow at the app.post fuctions
  app.use(flash())//flash mesages for wrong username, password etc
  app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized : false
  }))
  app.use(passport.initialize())
  app.use(passport.session())//store and persist our user across many pages
 app.use(methodOverride('_method'))

  //route setup for homepage
  app.get('/', checkAuthenticated, (req, res) =>{
    if(req.user) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  }
      res.render('index.ejs')
  })

  //route setup for login page
  app.get('/login', checkNotAuthenticated, (req, res) => {
    if(!req.user) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  }
      res.render('login.ejs')
  })

  app.get('/loginfail', checkNotAuthenticated, (req, res) => {
      res.render('loginfail.ejs')
  })

  app.get('/terminal', checkAuthenticated, (req, res) =>{
      res.render('terminal.ejs')
  })

  app.get('/settings', checkAuthenticated, (req, res) =>{
      res.render('personalize.ejs')
  })

  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/loginfail',
      failureFlash: true
  })) //this is where the login.ejs form posts the results

  app.post('/loginfail', checkNotAuthenticated, passport.authenticate('local', {
      successRedirect: '/',
      failureFlash: true,
      failureRedirect: '/loginfail'
  }))

  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })
  var busy = true
app.get('/busy', (req,res)=> {
  if(busy) {
    res.json({status:true})
  }
  else {
    res.json({status:false})
  }
})
app.get('/stop', (req,res)=> {
  if(busy) {
    busy=false
  }
  else {
    busy = true
  }
})

  const PORT = process.env.PORT || 8000
  http.listen(PORT, function(){
  })
