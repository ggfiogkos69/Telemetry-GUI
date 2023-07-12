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

 var XMLHttpRequest = require('xhr2');

 var data_send = {
  "accu_max_cell_temp": 0,
  "accu_min_cell_temp": 0,
  "accu_dcdc_temp": 0,
  "accu_max_humidity": 0,
  "accu_soc_energy": 0,
  "accu_total_voltage_vs": 0,
  "accu_accu_current": 0,
  "accu_max_cell_voltage": 0,
  "accu_min_cell_voltage": 0,
  "accu_wh_consumed": 0,
  "accu_ah_consumed": 0,
  "pdu_max_cell_temp": 0,
  "pdu_max_cell_voltage": 0,
  "pdu_min_cell_voltage": 0,
  "pdu_tdk1_current": 0,
  "pdu_tdk2_current": 0,
  "pdu_wh_consumed": 0,
  "inv_curr_lim_igbt_temp": 0,
  "inv_curr_lim_motor_temp": 0,
  "inv_no_power_supply_voltage": 0,
  "res_radio_quality": 0,
  "vcu_brake_front": 0,
  "vcu_brake_rear": 0,
  "vcu_actual_torque": 0,
  "vcu_requested_torque": 0,
  "vcu_motor_rpm": 0,
  "vcu_apps1": 0,
  "vcu_apps2": 0,
  "vcu_apps2": 0,
  "vcu_hall_fr": 0,
  "vcu_hall_fl": 0,
  "vcu_hall_rr": 0,
  "vcu_hall_rl": 0,
  "ccu_igbt_temp": 0,
  "ccu_motor_temp": 0,
  "plex_accel_long": 0,
  "plex_accel_lat": 0,
  "plex_gps_speed": 0,
  "asb_ebs_pressure": 0,
  "asb_brake_ctrl_temp": 0,
  "tpms_fr_temp": 0,
  "tpms_fr_press": 0,
  "tpms_fl_temp": 0,
  "tpms_fl_press": 0,
  "tpms_rr_temp": 0,
  "tpms_rr_press": 0,
  "ir_infrared_fr": 0,
  "ir_infrared_fl": 0,
  "ir_infrared_rr": 0,
  "ir_infrared_rl": 0,
  "can2usb_lap_counter": 0,
  "can2usb_brake_target": 0,
  "can2usb_speed_actual": 0,
  "can2usb_speed_target": 0,
  "can2usb_pc_temperature": 0,
  "can2usb_steering_ctrl_temp": 0,
  "can2usb_steering_target": 0,
  "tpms_rl_temp": 0,
  "tpms_rl_press": 0,
  "accu_bms_error_code": 0,
  "accu_tsac_error_code": 0,
  "inv_inv_enable": 0,
  "inv_inv_ok": 0,
  "inv_curr_lim_reached": 0,
  "inv_curr_peak_val_warn": 0,
  "inv_defective_param": 0,
  "inv_hardware_fault": 0,
  "inv_faulty_safety_circuit": 0,
  "inv_can_time_out_exceeded": 0,
  "inv_bad_encoder_signal": 0,
  "inv_overvoltage": 0,
  "inv_overcurrent": 0,
  "inv_current_measure_fault": 0,
  "inv_ballast_circuit_overload": 0,
  "inv_faulty_run_signal_emi": 0,
  "inv_inactive_rfe": 0,
  "inv_power_supply_missing_or_too_low": 0,
  "inv_output_voltage_limit_reached": 0,
  "inv_overcurrent_200": 0,
  "inv_ballast_circuit_overload_87": 0,
  "res_e_stop": 0,
  "res_k2_switch_status": 0,
  "res_k3_button_status": 0,
  "vcu_precharge_done": 0,
  "vcu_r2d_done": 0,
  "vcu_as_status": 0,
  "dash_r2d_pressed": 0,
  "dash_aux2_pressed": 0,
  "dash_regen_on": 0,
  "dash_aero_fans_on": 0,
  "dash_pc_combo": 0,
  "dash_mission_locked": 0,
  "dash_power_limiter": 0,
  "dash_traction_def": 0,
  "dash_mission": 0,
  "ccu_pumps_on": 0,
  "ccu_motor_temp_too_high": 0,
  "ccu_device_temp_too_high": 0,
  "ccu_motor_temp_limit_reached": 0,
  "ccu_device_temp_limit_reached": 0,
  "asb_pc_combo_ok": 0,
  "asb_brake_pressure_front_low": 0,
  "asb_ebs_relay_closed_error": 0,
  "asb_asms_on_error": 0,
  "asb_computer_error": 0,
  "asb_res_error": 0,
  "asb_as_status_error": 0,
  "asb_service_brake_error": 0,
  "asb_ebs_pressure_error": 0,
  "asb_manual_begin": 0,
  "asb_manual_asms_off": 0,
  "asb_manual_service_brake_unavailable": 0,
  "asb_manual_ebs_pressure_low": 0,
  "asb_manual_mission_error": 0,
  "asb_manual_asms_off_error": 0,
  "asb_manual_service_brake_unavailable_error": 0,
  "asb_manual_ebs_pressure_low_error": 0,
  "asb_as_relay_sdc": 0,
  "asb_asms_on": 0,
  "can2usb_vn_200_ok": 0,
  "can2usb_vn_300_ok": 0,
  "can2usb_camera_left_ok": 0,
  "can2usb_camera_right_ok": 0,
  "can2usb_clock_ok": 0,
  "can2usb_camera_inference_ok": 0,
  "can2usb_velocity_estimation_ok": 0,
  "can2usb_slam_ok": 0,
  "can2usb_mpc_controller_ok": 0,
  "can2usb_path_planning_ok": 0,
  "can2usb_pi_pp_controller_ok": 0,
  "can2usb_steering_ctrl_enab": 0,
  "can2usb_ins_mode": 0,
  "can2usb_steering_ctrl_error_code": 0,
  "asb_ebs_state": 0,
  "asb_service_brake_state": 0,
  "asb_init_check_started": 0,
  "asb_init_check_ended": 0,
  "asb_heartbeat": 0,
  "asb_autonomous_begin": 0,
  "asb_heartbeat_ack": 0,
  "asb_heartbeat_error": 0,
  "asb_ebs_proper_pressure": 0,
  "asb_brake_tr_f_front_ok": 0,
  "asb_brake_tr_f_rear_ok": 0,
  "asb_pc_combo_ok": 0,
  "asb_brake_pressure_front_low": 0,
  "asb_brake_pressure_front_high": 0,
  "asb_brake_pressure_rear_low": 0,
  "asb_brake_pressure_rear_high": 0,
  "asb_ebs_proper_pressure": 0,
  "asb_brake_tr_f_front_ok": 0,
  "asb_brake_tr_f_rear_ok": 0,
  "vcu_bspd_error": 0,
  "vcu_asb_error": 0,
  "asb_res_error": 0,
  "accu_imd_error": 0,
  "accu_ams_error": 0,
  "dash_bots_sd": 0,
  "dash_cockpit_sd": 0,
  "dash_inertia_sd": 0,
  "vcu_sd_closed": 0,
  "asb_sd_button_right": 0,
  "accu_over_60v_dclink": 0,
  "accu_air_m_state": 0,
  "accu_air_m_supp": 0,
  "accu_air_p_state": 0,
  "accu_air_p_supp": 0,
  "accu_precharge_state": 0,
  "accu_ts_active": 0,
  "asb_sd_button_left": 0
}

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



     const filename = 'public/data.csv';
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
      // console.log('Data successfully appended to CSV file:', filename);
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
                  if( isjson(mydata)){
                  appendToCSV( JSON.parse(mydata));
                  }
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
                    data_send[key] = serial_data[key] 
                  }

      
                  // console.log(data_send)
                  parsetodatabase(data_send)
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
