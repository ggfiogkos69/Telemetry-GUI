
var socket = io.connect(); //create a socket

socket.on('min_cell_voltage', function(arg1 ) {

  //  console.log(arg1)
    $('#min_cell_voltage').remove()
    $('<div id="min_cell_voltage"></div>').appendTo("#min_cell_voltage-cont")
    $('#min_cell_voltage').append(arg1)

});
socket.on('max_cell_temp', function(arg1 ) {

  //  console.log(arg1)
    $('#max_cell_temp').remove()
    $('<div id="max_cell_temp"></div>').appendTo("#max_cell_temp-cont")
    $('#max_cell_temp').append(arg1)

});
socket.on('igbt_temp', function(arg1 ) {

  //  console.log(arg1)
    $('#igbt_temp').remove()
    $('<div id="igbt_temp"></div>').appendTo("#igbt_temp-cont")
    $('#igbt_temp').append(arg1)

});
socket.on('motor_temp', function(arg1 ) {

  //  console.log(arg1)
    $('#motor_temp').remove()
    $('<div id="motor_temp"></div>').appendTo("#motor_temp-cont")
    $('#motor_temp').append(arg1)

});
socket.on('rpm_rl', function(arg1 ) {

  //  console.log(arg1)
    $('#rpm_rl').remove()
    $('<div id="rpm_rl"></div>').appendTo("#rpm_rl-cont")
    $('#rpm_rl').append(arg1) 

});
socket.on('imd_status', function(arg1) {

  //  console.log(arg1)
    $('#imd_status').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#imd_status').addClass(' green'); // Add the 'green' color class
    } else {
      $('#imd_status').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('ams_status', function(arg1) {

    console.log("in")
  //  console.log(arg1)
    $('#ams_status').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ams_status').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ams_status').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('asb', function(arg1) {

  //  console.log(arg1)
    $('#asb').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('bspd', function(arg1) {

  //  console.log(arg1)
    $('#bspd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#bspd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#bspd').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('sd_status', function(arg1) {

  //  console.log(arg1)
    $('#sd_status').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#sd_status').addClass(' green'); // Add the 'green' color class
    } else {
      $('#sd_status').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('ts_off', function(arg1) {

  //  console.log(arg1)
    $('#ts_off').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ts_off').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ts_off').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('sd_button_left', function(arg1) {

  //  console.log(arg1)
    $('#sd_button_left').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#sd_button_left').addClass(' green'); // Add the 'green' color class
    } else {
      $('#sd_button_left').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('sd_button_right', function(arg1) {

  //  console.log(arg1)
    $('#sd_button_right').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#sd_button_right').addClass(' green'); // Add the 'green' color class
    } else {
      $('#sd_button_right').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('asms', function(arg1) {

  //  console.log(arg1)
    $('#asms').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asms').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asms').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('hvd', function(arg1) {

  //  console.log(arg1)
    $('#hvd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#hvd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#hvd').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('inv_off', function(arg1) {

  //  console.log(arg1)
    $('#inv_off').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#inv_off').addClass(' green'); // Add the 'green' color class
    } else {
      $('#inv_off').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('inv_enable', function(arg1) {

  //  console.log(arg1)
    $('#inv_enable').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#inv_enable').addClass(' green'); // Add the 'green' color class
    } else {
      $('#inv_enable').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('60v_dc_link', function(arg1) {

  //  console.log(arg1)
    $('#60v_dc_link').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#60v_dc_link').addClass(' green'); // Add the 'green' color class
    } else {
      $('#60v_dc_link').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('air_minus_state', function(arg1) {

  //  console.log(arg1)
    $('#air_minus_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#air_minus_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#air_minus_state').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('air_minus_supply', function(arg1) {

  //  console.log(arg1)
    $('#air_minus_supply').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#air_minus_supply').addClass(' green'); // Add the 'green' color class
    } else {
      $('#air_minus_supply').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('air_plus_state', function(arg1) {

  //  console.log(arg1)
    $('#air_plus_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#air_plus_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#air_plus_state').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('air_plus_supply', function(arg1) {

  //  console.log(arg1)
    $('#air_plus_supply').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#air_plus_supply').addClass(' green'); // Add the 'green' color class
    } else {
      $('#air_plus_supply').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('precharge_state', function(arg1) {

  //  console.log(arg1)
    $('#precharge_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#precharge_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#precharge_state').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('cockpit_sd', function(arg1) {

  //  console.log(arg1)
    $('#cockpit_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#cockpit_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#cockpit_sd').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('bots_sd', function(arg1) {

  //  console.log(arg1)
    $('#bots_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#bots_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#bots_sd').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('inertial_sd', function(arg1) {

  //  console.log(arg1)
    $('#inertial_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#inertial_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#inertial_sd').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('aero_fans', function(arg1) {

  //  console.log(arg1)
    $('#aero_fans').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#aero_fans').addClass(' green'); // Add the 'green' color class
    } else {
      $('#aero_fans').addClass(' red'); // Add the 'red' color class
    }
});

socket.on('regen', function(arg1) {

  //  console.log(arg1)
    $('#regen').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#regen').addClass(' green'); // Add the 'green' color class
    } else {
      $('#regen').addClass(' red'); // Add the 'red' color class
    }
});

socket.on('bms', function(arg1) {
     
  
  switch(arg1){
    case 0:
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("OK") 
      
      break;
    case 1:  
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Overvoltage") 
      break;
    case 2:  
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Undervoltage") 
      
      
      break;
    case 3:
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Overcurrent charge") 
      
      break;
    case 4:   
    
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Overcurrent discharge") 
      
      break;
    case 5:  
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Overtemp") 
      
      break;
    case 6:
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Undertemp") 
      
      break;
    case 7:  
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Isabelle dead") 
      
      break;
    case 8:
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Communication error") 
  
      break;
    case 9:  
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Slave error") 
      
      break;
    case 10: 
      
      $('#bms').remove()
      $('<div id="bms"></div>').appendTo("#bms-cont")
      $('#bms').append("Humidity error") 
      
      break;   
  }
 
});



socket.on('tsac', function(arg1) { 

  switch(arg1){
    case 0:
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("OK")  
      break;
    case 1:  
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("IMD error")  
      break;
    case 2:  
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("AVI error") 
      break;
    case 3:
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("AIR minus stuck") 
      break;
    case 4:   
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("AIR plus stuck") 
      break;
    case 5:  
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("AIR minus implausibility") 
      break;
    case 6:
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("AIR plus implausibility") 
      break;
    case 7:  
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("PC relay implasibility") 
      break;
    case 8:
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("PC circuit error") 
      break;
    case 9:  
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("DCDC overtemp") 
      break;
    case 10: 
      
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("Elcon hardware failure") 
      break;  
    case 11:
      
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("Overtemp protection") 
      break; 
    case 12:
      
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("AC input voltage wrong") 
      break; 
    case 13:
      
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("Reverse polarity") 
      break; 
    case 14:
      
      $('#tsac').remove()
      $('<div id="tsac"></div>').appendTo("#tsac-cont")
      $('#tsac').append("Communication receive time out") 
      break; 
 
  }
})



socket.on('precharge_combo', function(arg1) {

  //  console.log(arg1)
    $('#precharge_combo').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#precharge_combo').addClass(' green'); // Add the 'green' color class
    } else {
      $('#precharge_combo').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('mission_locked', function(arg1) {

  //  console.log(arg1)
    $('#mission_locked').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#mission_locked').addClass(' green'); // Add the 'green' color class
    } else {
      $('#mission_locked').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('pc_done', function(arg1) {

  //  console.log(arg1)
    $('#pc_done').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#pc_done').addClass(' green'); // Add the 'green' color class
    } else {
      $('#pc_done').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('rtd_pressed', function(arg1) {

  //  console.log(arg1)
    $('#rtd_pressed').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#rtd_pressed').addClass(' green'); // Add the 'green' color class
    } else {
      $('#rtd_pressed').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('rtd_done', function(arg1) {

  //  console.log(arg1)
    $('#rtd_done').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#rtd_done').addClass(' green'); // Add the 'green' color class
    } else {
      $('#rtd_done').addClass(' red'); // Add the 'red' color class
    }

});

