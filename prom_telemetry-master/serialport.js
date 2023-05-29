var serialport = require("serialport")
var createInterface = require('readline').createInterface;
var io = require('socket.io')(http)
const app = express()
const http = require('http').Server(app)

const results = []
function isjson(str) {
  try {
    JSON.parse(str)
  } catch(e) {
    return false;

  }
  return true;
}

function start() {
  mes = ""
  var myPort = new serialport('COM', {
      baudRate:9600,
      parser: new serialport.parsers.Readline('\r\n')
  });
  myPort.on('open', ()=>{
  console.log("port is open")
  });

var lineReader = createInterface({input: myPort})
  io.on('connection', function(socket) {



    lineReader.on('line', (mydata)=>{
            if(mes != mydata){
                console.log('pattern: ', mydata.toString());
                io.sockets.emit("terminal", mydata.toString())

                if( isjson(mydata)){
                  serial_data = JSON.parse(mydata)
                  console.log("VDC: ", serial_data["vdc"])
                  //parsetoinflux(serial_data)
                  for(var key in serial_data){
                    io.sockets.emit(key, serial_data[key])

                  }
                }
                mes = mydata;
            }
        });
  })
}





app.get('/logging', (req,res) =>{
  console.log("reacheed ")
  console.log(req.query.port)
  start(req.query.port, req.query.baudrate)

  });
