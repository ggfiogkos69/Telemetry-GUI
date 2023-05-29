var socket = io.connect(); //create a socket
const { prototype } = require('stream')
const data = require('./data.js')
const {spawn} = require('child_process');
dataformat =  require('./public/data_dict.js');
  //Authentication and declaration of pages code
  const python = spawn('python3', ['post.py', 'text', 4]);
  var serial_data
  python.stdout.on('data', (data) => {
    console.log('pattern: ', data.toString());
    var message = "{"+data.toString().split("{").pop()
    if( isjson(message)){
      serial_data = JSON.parse(message)
      socket.emit("terminal", data.toString())

      console.log("VDC: ", serial_data["vdc"])
      parsetoinflux(serial_data)
      for(var key in serial_data){
        socket.emit(key, serial_data[key])

      }
    }


  });

  python.stderr.on('data', (data) => {
    console.error('err: ', data.toString());
  });

  python.on('error', (error) => {
    console.error('error: ', error.message);
  });

  python.on('close', (code) => {
    console.log('child process exited with code ', code);
  });
  socket.on('connection', function(socket){

  socket.emit('gpsdata', arrayx, arrayy, size)
})
