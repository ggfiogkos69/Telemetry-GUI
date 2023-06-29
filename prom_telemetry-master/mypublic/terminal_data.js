
var socket = io.connect(); //create a socket

socket.on('min_cell_voltage', function(arg1 ) {

  //  console.log(arg1)
    $('#min_cell_voltage').remove()
    $('<div id="min_cell_voltage"></div>').appendTo("#MCV-cont")
    $('#min_cell_voltage').append(arg1)

});
socket.on('max_cell_temp', function(arg1 ) {

  //  console.log(arg1)
    $('#max_cell_temp').remove()
    $('<div id="max_cell_temp"></div>').appendTo("#mct-cont")
    $('#max_cell_temp').append(arg1)

});
socket.on('igbt_temp', function(arg1 ) {

  //  console.log(arg1)
    $('#igbt_temp').remove()
    $('<div id="igbt_temp"></div>').appendTo("#it-cont")
    $('#igbt_temp').append(arg1)

});
socket.on('motor_temp', function(arg1 ) {

  //  console.log(arg1)
    $('#motor_temp').remove()
    $('<div id="motor_temp"></div>').appendTo("#mt-cont")
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
  $('#bms_ok').removeClass('red green')  
  $('#overvoltage').removeClass('red green')  
  $('#undervoltage').removeClass('red green'); 
  $('#overcurrent_charge').removeClass('red green');  
  $('#overcurrent_discharge').removeClass('red green');
  $('#overtemp').removeClass('red green');  
  $('#undertemp').removeClass('red green');
  $('#isabelle_dead').removeClass('red green');
  $('#communication_error').removeClass('red green');
  $('#slave_error').removeClass('red green');
  $('#humidity_error').removeClass('red green');    

  switch(arg1){
    case 0:
      $('#bms_ok').addClass(' green');  
      break;
    case 1:  
      $('#overvoltage').addClass(' green');
      break;
    case 2:  
      $('#undervoltage').addClass(' green');
      break;
    case 3:
      $('#overcurrent_charge').addClass(' green');
      break;
    case 4:   
      $('#overcurrent_discharge').addClass(' green');
      break;
    case 5:  
      $('#overtemp').addClass(' green');
      break;
    case 6:
      $('#undertemp').addClass(' green');
      break;
    case 7:  
      $('#isabelle_dead').addClass(' green');
      break;
    case 8:
      $('#communication_error').addClass(' green');
      break;
    case 9:  
      $('#slave_error').addClass(' green');
      break;
    case 10: 
      $('#humidity_error').addClass(' green');
      break;   
  }
  if(!$('#bms_ok').contains('live-icon green')){
    $('#bms_ok').addClass('red');
  }
  if(!$('#overvoltage').contains('live-icon green')){
    $('#overvoltage').addClass('red');
  }
  if(!$('#overcurrent_charge').contains('live-icon green')){
    $('#overcurrent_charge').addClass('red');
  }
  if(!$('#overcurrent_discharge').contains('live-icon green')){
    $('#overcurrent_discharge').addClass('red');
  }
  if(!$('#overtemp').contains('live-icon green')){
    $('#overtemp').addClass('red');
  }
  if(!$('#undertemp').contains('live-icon green')){
    $('#undertemp').addClass('red');
  }
  if(!$('#isabelle_dead').contains('live-icon green')){
    $('#isabelle_dead').addClass('red');
  }
  if(!$('#communication_error').contains('live-icon green')){
    $('#communication_error').addClass('red');
  }
  if(!$('#slave_error').contains('live-icon green')){
    $('#slave_error').addClass('red');
  }
  if(!$('#humidity_error').contains('live-icon green')){
    $('#humidity_error').addClass('red');
  }
});



socket.on('tsac', function(arg1) {
  $('#tsac_ok').removeClass('red green')  
  $('#imd_error').removeClass('red green')  
  $('#avi_error').removeClass('red green'); 
  $('#air_minus_stuck').removeClass('red green');  
  $('#air_plus_stuck').removeClass('red green');
  $('#air_minus_implausibility').removeClass('red green');  
  $('#air_plus_implausibility').removeClass('red green');
  $('#pc_relay_implausibility').removeClass('red green');
  $('#pc_circuit_error').removeClass('red green');
  $('#dcdc_overtemp').removeClass('red green');
  $('#elcon_hardware_failure').removeClass('red green');
  $('#overtemp_protection').removeClass('red green');
  $('#ac_input_voltage_wrong').removeClass('red green');
  $('#reverse_polarity').removeClass('red green');
  $('#communication_receive_timeout').removeClass('red green');    

  switch(arg1){
    case 0:
      $('#tsac_ok').addClass(' green');  
      break;
    case 1:  
      $('#imd_error').addClass(' green');
      break;
    case 2:  
      $('#avi_error').addClass(' green');
      break;
    case 3:
      $('#air_minus_stuck').addClass(' green');
      break;
    case 4:   
      $('#air_plus_stuck').addClass(' green');
      break;
    case 5:  
      $('#air_minus_implausibility').addClass(' green');
      break;
    case 6:
      $('#air_plus_implausibility').addClass(' green');
      break;
    case 7:  
      $('#pc_relay_implausibility').addClass(' green');
      break;
    case 8:
      $('#pc_circuit_error').addClass(' green');
      break;
    case 9:  
      $('#dcdc_overtemp').addClass(' green');
      break;
    case 10: 
      $('#elcon_hardware_failure').addClass(' green');
      break;  
    case 11:
      $('#overtemp_protection').addClass(' green');
      break; 
    case 12:
      $('#ac_input_voltage_wrong').addClass(' green');
      break; 
    case 13:
      $('#reverse_polarity').addClass(' green');
      break; 
    case 14:
      $('#communication_receive_timout').addClass(' green');
      break; 
  }
  if(!$('#tsac_ok').contains('live-icon green')){
    $('#tsac_ok').addClass('red');
  }
  if(!$('#imd_error').contains('live-icon green')){
    $('#imd_error').addClass('red');
  }
  if(!$('#avi_error').contains('live-icon green')){
    $('#avi_error').addClass('red');
  }
  if(!$('#air_minus_stuck').contains('live-icon green')){
    $('#air_minus_stuck').addClass('red');
  }
  if(!$('#air_plus_stuck').contains('live-icon green')){
    $('#air_plus_stuck').addClass('red');
  }
  if(!$('#air_plus_implausibility').contains('live-icon green')){
    $('#air_plus_implausibility').addClass('red');
  }
  if(!$('#air_minus_implausibility').contains('live-icon green')){
    $('#air_minus_implausibility').addClass('red');
  }
  if(!$('#pc_relay_implausibility').contains('live-icon green')){
    $('#pc_relay_implausibility').addClass('red');
  }
  if(!$('#pc_circuit_error').contains('live-icon green')){
    $('#pc_circuit_error').addClass('red');
  }
  if(!$('#dcdc_overtemp').contains('live-icon green')){
    $('#dcdc_ovetemp').addClass('red');
  }
  if(!$('elcon_hardware_failure').contains('live-icon green')){
    $('#elcon_hardware_failure').addClass('red');
  }
  if(!$('#overtemp_protection').contains('live-icon green')){
    $('#overtemp_protection').addClass('red');
  }
  if(!$('#ac_input_voltage_wrong').contains('live-icon green')){
    $('#ac_input_voltage_wrong').addClass('red');
  }
  if(!$('#reverse_polarity').contains('live-icon green')){
    $('#reverse_polarity').addClass('red');
  }
  if(!$('#communication_receive_timeout').contains('live-icon green')){
    $('#communication_receive_timeout').addClass('red');
  }
});



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

