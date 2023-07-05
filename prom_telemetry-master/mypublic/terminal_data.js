
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

socket.on('inv_inv_ok', function(arg1) {

    console.log(arg1)
    $('#inv_inv_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#inv_inv_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#inv_inv_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });

socket.on('accu_bms_error_code', function(arg1) {
     
  
  switch(arg1){
    case 0:
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("OK") 
      
      break;
    case 1:  
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Overvoltage") 
      break;
    case 2:  
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Undervoltage") 
      
      
      break;
    case 3:
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Overcurrent charge") 
      
      break;
    case 4:   
    
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Overcurrent discharge") 
      
      break;
    case 5:  
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Overtemp") 
      
      break;
    case 6:
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Undertemp") 
      
      break;
    case 7:  
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Isabelle dead") 
      
      break;
    case 8:
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Communication error") 
  
      break;
    case 9:  
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Slave error") 
      
      break;
    case 10: 
      
      $('#accu_bms_error_code').remove()
      $('<div id="accu_bms_error_code"></div>').appendTo("#accu_bms_error_code-cont")
      $('#accu_bms_error_code').append("Humidity error") 
      
      break;   
  }
 
});



socket.on('accu_tsac_error_code', function(arg1) { 

  switch(arg1){
    case 0:
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("OK")  
      break;
    case 1:  
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("IMD error")  
      break;
    case 2:  
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("AVI error") 
      break;
    case 3:
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("AIR minus stuck") 
      break;
    case 4:   
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("AIR plus stuck") 
      break;
    case 5:  
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("AIR minus implausibility") 
      break;
    case 6:
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("AIR plus implausibility") 
      break;
    case 7:  
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("PC relay implasibility") 
      break;
    case 8:
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("PC circuit error") 
      break;
    case 9:  
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("DCDC overtemp") 
      break;
    case 10: 
      
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("Elcon hardware failure") 
      break;  
    case 11:
      
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("Overtemp protection") 
      break; 
    case 12:
      
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("AC input voltage wrong") 
      break; 
    case 13:
      
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("Reverse polarity") 
      break; 
    case 14:
      
      $('#accu_tsac_error_code').remove()
      $('<div id="accu_tsac_error_code"></div>').appendTo("#accu_tsac_error_code-cont")
      $('#accu_tsac_error_code').append("Communication receive time out") 
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

socket.on('inv_inv_enable', function(arg1) {

  console.log(arg1)
  $('#inv_inv_enable').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_inv_enable').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_inv_enable').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_curr_lim_reached', function(arg1) {

  console.log(arg1)
  $('#inv_curr_lim_reached').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_curr_lim_reached').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_curr_lim_reached').addClass(' red'); // Add the 'red' color class
  }
  console.log( $('#inv_curr_lim_reached'))
});
socket.on('inv_curr_peak_val_warn', function(arg1) {

  console.log(arg1)
  $('#inv_curr_peak_val_warn').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_curr_peak_val_warn').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_curr_peak_val_warn').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_defective_param', function(arg1) {

  console.log(arg1)
  $('#inv_defective_param').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_defective_param').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_defective_param').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_hardware_fault', function(arg1) {

  console.log(arg1)
  $('#inv_hardware_fault').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_hardware_fault').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_hardware_fault').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_faulty_safety_circuit', function(arg1) {

  console.log(arg1)
  $('#inv_faulty_safety_circuit').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_faulty_safety_circuit').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_faulty_safety_circuit').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_can_time_out_exceeded', function(arg1) {

  console.log(arg1)
  $('#inv_can_time_out_exceeded').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_can_time_out_exceeded').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_can_time_out_exceeded').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_bad_encoder_signal', function(arg1) {

  console.log(arg1)
  $('#inv_bad_encoder_signal').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_bad_encoder_signal').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_bad_encoder_signal').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_overvoltage', function(arg1) {

  console.log(arg1)
  $('#inv_overvoltage').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_overvoltage').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_overvoltage').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_overcurrent', function(arg1) {

  console.log(arg1)
  $('#inv_overcurrent').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_overcurrent').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_overcurrent').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_current_measure_fault', function(arg1) {

  console.log(arg1)
  $('#inv_current_measure_fault').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_current_measure_fault').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_current_measure_fault').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_ballast_circuit_overload', function(arg1) {

  console.log(arg1)
  $('#inv_ballast_circuit_overload').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_ballast_circuit_overload').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_ballast_circuit_overload').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_faulty_run_signal_emi', function(arg1) {

  console.log(arg1)
  $('#inv_faulty_run_signal_emi').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_faulty_run_signal_emi').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_faulty_run_signal_emi').addClass(' red'); // Add the 'red' color class
  }
  
});socket.on('inv_inactive_rfe', function(arg1) {

  console.log(arg1)
  $('#inv_inactive_rfe').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_inactive_rfe').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_inactive_rfe').addClass(' red'); // Add the 'red' color class
  }
  
});

socket.on('inv_power_supply_missing_or_too_low', function(arg1) {

  console.log(arg1)
  $('#inv_power_supply_missing_or_too_low').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_power_supply_missing_or_too_low').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_power_supply_missing_or_too_low').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_output_voltage_limit_reached', function(arg1) {

  console.log(arg1)
  $('#inv_output_voltage_limit_reached').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_output_voltage_limit_reached').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_inv_ok').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_overcurrent_200', function(arg1) {

  console.log(arg1)
  $('#inv_overcurrent_200').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_overcurrent_200').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_overcurrent_200').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('inv_ballast_circuit_overload_87', function(arg1) {

  console.log(arg1)
  $('#inv_ballast_circuit_overload_87').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#inv_ballast_circuit_overload_87').addClass(' green'); // Add the 'green' color class
  } else {
    $('#inv_ballast_circuit_overload_87').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('res_e_stop', function(arg1) {

  console.log(arg1)
  $('#res_e_stop').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#res_e_stop').addClass(' green'); // Add the 'green' color class
  } else {
    $('#res_e_stop').addClass(' red'); // Add the 'red' color class
  }
  
});socket.on('res_k2_switch_status', function(arg1) {

  console.log(arg1)
  $('#res_k2_switch_status').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#res_k2_switch_status').addClass(' green'); // Add the 'green' color class
  } else {
    $('#res_k2_switch_status').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('res_k3_button_status', function(arg1) {

  console.log(arg1)
  $('#res_k3_button_status').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#res_k3_button_status').addClass(' green'); // Add the 'green' color class
  } else {
    $('#res_k3_button_status').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('vcu_precharge_done', function(arg1) {

  console.log(arg1)
  $('#vcu_precharge_done').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#vcu_precharge_done').addClass(' green'); // Add the 'green' color class
  } else {
    $('#vcu_precharge_done').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('vcu_r2d_done', function(arg1) {

  console.log(arg1)
  $('#vcu_r2d_done').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#vcu_r2d_done').addClass(' green'); // Add the 'green' color class
  } else {
    $('#vcu_r2d_done').addClass(' red'); // Add the 'red' color class
  }
  
});socket.on('vcu_as_status', function(arg1) {

  console.log(arg1)
  $('#vcu_as_status').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#vcu_as_status').addClass(' green'); // Add the 'green' color class
  } else {
    $('#vcu_as_status').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_r2d_pressed', function(arg1) {

  console.log(arg1)
  $('#dash_r2d_pressed').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_r2d_pressed').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_r2d_pressed').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_aux2_pressed', function(arg1) {

  console.log(arg1)
  $('#dash_aux2_pressed').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_aux2_pressed').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_aux2_pressed').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_regen_on', function(arg1) {

  console.log(arg1)
  $('#dash_regen_on').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_regen_on').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_regen_on').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_aero_fans_on', function(arg1) {

  console.log(arg1)
  $('#dash_aero_fans_on').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_aero_fans_on').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_aero_fans_on').addClass(' red'); // Add the 'red' color class
  }
  
});socket.on('dash_pc_combo', function(arg1) {

  console.log(arg1)
  $('#dash_pc_combo').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_pc_combo').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_pc_combo').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_mission_locked', function(arg1) {

  console.log(arg1)
  $('#dash_mission_locked').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_mission_locked').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_mission_locked').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_power_limiter', function(arg1) {

  console.log(arg1)
  $('#dash_power_limiter').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_power_limiter').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_power_limiter').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_traction_def', function(arg1) {

  console.log(arg1)
  $('#dash_traction_def').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_traction_def').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_traction_def').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('dash_mission', function(arg1) {

  console.log(arg1)
  $('#dash_mission').removeClass('red green')
  console.log()
  if (arg1 == 1) {
    $('#dash_mission').addClass(' green'); // Add the 'green' color class
  } else {
    $('#dash_mission').addClass(' red'); // Add the 'red' color class
  }
  
});
socket.on('ccu_pumps_on', function(arg1) {

    console.log(arg1)
    $('#ccu_pumps_on').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ccu_pumps_on').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ccu_pumps_on').addClass(' red'); // Add the 'red' color class
    }
    
  });socket.on('ccu_motor_temp_too_high', function(arg1) {

    console.log(arg1)
    $('#ccu_motor_temp_too_high').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ccu_motor_temp_too_high').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ccu_motor_temp_too_high').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('ccu_device_temp_too_high', function(arg1) {

    console.log(arg1)
    $('#ccu_device_temp_too_high').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ccu_device_temp_too_high').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ccu_device_temp_too_high').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('ccu_motor_temp_limit_reached', function(arg1) {

    console.log(arg1)
    $('#ccu_motor_temp_limit_reached').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ccu_motor_temp_limit_reached').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ccu_motor_temp_limit_reached').addClass(' red'); // Add the 'red' color class
    }
    console.log( $('#ccu_motor_temp_limit_reached'))
  });

  socket.on('ccu_device_temp_limit_reached', function(arg1) {

    console.log(arg1)
    $('#ccu_device_temp_limit_reached').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ccu_device_temp_limit_reached').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ccu_device_temp_limit_reached').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_pc_combo_ok', function(arg1) {

    console.log(arg1)
    $('#asb_pc_combo_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_pc_combo_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_pc_combo_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });

  socket.on('asb_brake_pressure_front_low', function(arg1) {

    console.log(arg1)
    $('#asb_brake_pressure_front_low').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_pressure_front_low').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_pressure_front_low').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('inv_inv_ok', function(arg1) {

    console.log(arg1)
    $('#inv_inv_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#inv_inv_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#inv_inv_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_ebs_relay_closed_error', function(arg1) {

    console.log(arg1)
    $('#asb_ebs_relay_closed_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_ebs_relay_closed_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_ebs_relay_closed_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_asms_on_error', function(arg1) {

    console.log(arg1)
    $('#asb_asms_on_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_asms_on_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_asms_on_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_computer_error', function(arg1) {

    console.log(arg1)
    $('#asb_computer_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_computer_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_computer_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_res_error', function(arg1) {

    console.log(arg1)
    $('#asb_res_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_res_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_res_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_as_status_error', function(arg1) {

    console.log(arg1)
    $('#asb_as_status_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_as_status_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_as_status_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_service_brake_error', function(arg1) {

    console.log(arg1)
    $('#asb_service_brake_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_service_brake_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_service_brake_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_service_brake_error', function(arg1) {

    console.log(arg1)
    $('#asb_ebs_pressure_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_ebs_pressure_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_ebs_pressure_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_manual_begin', function(arg1) {

    console.log(arg1)
    $('#asb_manual_begin').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_begin').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_begin').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_manual_asms_off', function(arg1) {

    console.log(arg1)
    $('#asb_manual_asms_off').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_asms_off').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_asms_off').addClass(' red'); // Add the 'red' color class
    }
    
  });

  socket.on('asb_manual_service_brake_unavailable', function(arg1) {

    console.log(arg1)
    $('#asb_manual_service_brake_unavailable').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_service_brake_unavailable').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_service_brake_unavailable').addClass(' red'); // Add the 'red' color class
    }
    
  });

  socket.on('asb_manual_ebs_pressure_low', function(arg1) {

    console.log(arg1)
    $('#asb_manual_ebs_pressure_low').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_ebs_pressure_low').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_ebs_pressure_low').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_manual_mission_error', function(arg1) {

    console.log(arg1)
    $('#asb_manual_mission_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_mission_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_mission_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_manual_asms_off_error', function(arg1) {

    console.log(arg1)
    $('#asb_manual_asms_off_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_asms_off_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_asms_off_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_manual_service_brake_unavailable_error', function(arg1) {

    console.log(arg1)
    $('#asb_manual_service_brake_unavailable_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_service_brake_unavailable_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_service_brake_unavailable_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_manual_ebs_pressure_low_error', function(arg1) {

    console.log(arg1)
    $('#asb_manual_ebs_pressure_low_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_manual_ebs_pressure_low_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_manual_ebs_pressure_low_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_as_relay_sdc', function(arg1) {

    console.log(arg1)
    $('#asb_as_relay_sdc').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_as_relay_sdc').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_as_relay_sdc').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_asms_on', function(arg1) {

    console.log(arg1)
    $('#asb_asms_on').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_asms_on').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_asms_on').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_vn_200_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_vn_200_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_vn_200_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_vn_200_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_vn_300_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_vn_300_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_vn_300_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_vn_300_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_camera_left_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_camera_left_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_camera_left_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_camera_left_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('can2usb_camera_right_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_camera_right_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_camera_right_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_camera_right_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
   socket.on('can2usb_clock_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_clock_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_clock_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_clock_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_camera_inference_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_camera_inference_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_camera_inference_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_camera_inference_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_velocity_estimation_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_velocity_estimation_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_velocity_estimation_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_velocity_estimation_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('can2usb_slam_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_slam_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_slam_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_slam_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
   socket.on('can2usb_mpc_controller_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_mpc_controller_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_mpc_controller_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_mpc_controller_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_path_planning_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_path_planning_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_path_planning_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_path_planning_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });


  socket.on('can2usb_pi_pp_controller_ok', function(arg1) {

    console.log(arg1)
    $('#can2usb_pi_pp_controller_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_pi_pp_controller_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_pi_pp_controller_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_steering_ctrl_enab', function(arg1) {

    console.log(arg1)
    $('#can2usb_steering_ctrl_enab').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_steering_ctrl_enab').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_steering_ctrl_enab').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('can2usb_ins_mode', function(arg1) {

    console.log(arg1)
    $('#can2usb_ins_mode').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_ins_mode').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_ins_mode').addClass(' red'); // Add the 'red' color class
    }
    
  });


   socket.on('can2usb_steering_ctrl_error_code', function(arg1) {

    console.log(arg1)
    $('#can2usb_steering_ctrl_error_code').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#can2usb_steering_ctrl_error_code').addClass(' green'); // Add the 'green' color class
    } else {
      $('#can2usb_steering_ctrl_error_code').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_ebs_state', function(arg1) {

    console.log(arg1)
    $('#asb_ebs_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_ebs_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_ebs_state').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_service_brake_state', function(arg1) {

    console.log(arg1)
    $('#asb_service_brake_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_service_brake_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_service_brake_state').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('asb_init_check_started', function(arg1) {

    console.log(arg1)
    $('#asb_init_check_started').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_init_check_started').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_init_check_started').addClass(' red'); // Add the 'red' color class
    }
    
  });
   socket.on('asb_init_check_ended', function(arg1) {

    console.log(arg1)
    $('#asb_init_check_ended').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_init_check_ended').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_init_check_ended').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_heartbeat', function(arg1) {

    console.log(arg1)
    $('#asb_heartbeat').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_heartbeat').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_heartbeat').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_autonomous_begin', function(arg1) {

    console.log(arg1)
    $('#asb_autonomous_begin').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_autonomous_begin').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_autonomous_begin').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_heartbeat_ack', function(arg1) {

    console.log(arg1)
    $('#asb_heartbeat_ack').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_heartbeat_ack').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_heartbeat_ack').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('asb_heartbeat_error', function(arg1) {

    console.log(arg1)
    $('#asb_heartbeat_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_heartbeat_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_heartbeat_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
   socket.on('asb_ebs_proper_pressure', function(arg1) {

    console.log(arg1)
    $('#asb_ebs_proper_pressure').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_ebs_proper_pressure').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_ebs_proper_pressure').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_brake_tr_f_front_ok', function(arg1) {

    console.log(arg1)
    $('#asb_brake_tr_f_front_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_tr_f_front_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_tr_f_front_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_brake_tr_f_rear_ok', function(arg1) {

    console.log(arg1)
    $('#asb_brake_tr_f_rear_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_tr_f_rear_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_tr_f_rear_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_pc_combo_ok', function(arg1) {

    console.log(arg1)
    $('#asb_pc_combo_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_pc_combo_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_pc_combo_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('asb_brake_pressure_front_low', function(arg1) {

    console.log(arg1)
    $('#asb_brake_pressure_front_low').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_pressure_front_low').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_pressure_front_low').addClass(' red'); // Add the 'red' color class
    }
    
  });



  socket.on('asb_brake_pressure_front_high', function(arg1) {

    console.log(arg1)
    $('#asb_brake_pressure_front_high').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_pressure_front_high').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_pressure_front_high').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_brake_pressure_rear_low', function(arg1) {

    console.log(arg1)
    $('#asb_brake_pressure_rear_low').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_pressure_rear_low').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_pressure_rear_low').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_brake_pressure_rear_high', function(arg1) {

    console.log(arg1)
    $('#asb_brake_pressure_rear_high').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_pressure_rear_high').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_pressure_rear_high').addClass(' red'); // Add the 'red' color class
    }
    
  });

  socket.on('asb_ebs_proper_pressure', function(arg1) {

    console.log(arg1)
    $('#asb_ebs_proper_pressure').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_ebs_proper_pressure').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_ebs_proper_pressure').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('asb_brake_tr_f_front_ok', function(arg1) {

    console.log(arg1)
    $('#asb_brake_tr_f_front_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_tr_f_front_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_tr_f_front_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_brake_tr_f_rear_ok', function(arg1) {

    console.log(arg1)
    $('#asb_brake_tr_f_rear_ok').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_brake_tr_f_rear_ok').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_brake_tr_f_rear_ok').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('vcu_bspd_error', function(arg1) {

    console.log(arg1)
    $('#vcu_bspd_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#vcu_bspd_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#vcu_bspd_error').addClass(' red'); // Add the 'red' color class
    }
    
  });



   socket.on('vcu_asb_error', function(arg1) {

    console.log(arg1)
    $('#vcu_asb_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#vcu_asb_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#vcu_asb_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
   socket.on('asb_res_error', function(arg1) {

    console.log(arg1)
    $('#asb_res_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_res_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_res_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_imd_error', function(arg1) {

    console.log(arg1)
    $('#accu_imd_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_imd_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_imd_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_ams_error', function(arg1) {

    console.log(arg1)
    $('#accu_ams_error').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_ams_error').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_ams_error').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('dash_bots_sd', function(arg1) {

    console.log(arg1)
    $('#dash_bots_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#dash_bots_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#dash_bots_sd').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('dash_cockpit_sd', function(arg1) {

    console.log(arg1)
    $('#dash_cockpit_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#dash_cockpit_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#dash_cockpit_sd').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('dash_inertia_sd', function(arg1) {

    console.log(arg1)
    $('#dash_inertia_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#dash_inertia_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#dash_inertia_sd').addClass(' red'); // Add the 'red' color class
    }
    
  });


   socket.on('vcu_sd_closed', function(arg1) {

    console.log(arg1)
    $('#vcu_sd_closed').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#vcu_sd_closed').addClass(' green'); // Add the 'green' color class
    } else {
      $('#vcu_sd_closed').addClass(' red'); // Add the 'red' color class
    }
    
  });


  socket.on('asb_sd_button_right', function(arg1) {

    console.log(arg1)
    $('#asb_sd_button_right').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_sd_button_right').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_sd_button_right').addClass(' red'); // Add the 'red' color class
    }
    
  });

   socket.on('accu_over_60v_dclink', function(arg1) {

    console.log(arg1)
    $('#accu_over_60v_dclink').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_over_60v_dclink').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_over_60v_dclink').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_air_m_state', function(arg1) {

    console.log(arg1)
    $('#accu_air_m_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_air_m_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_air_m_state').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_air_m_supp', function(arg1) {

    console.log(arg1)
    $('#accu_air_m_supp').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_air_m_supp').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_air_m_supp').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_air_p_state', function(arg1) {

    console.log(arg1)
    $('#accu_air_p_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_air_p_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_air_p_state').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_air_p_supp', function(arg1) {

    console.log(arg1)
    $('#accu_air_p_supp').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_air_p_supp').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_air_p_supp').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_precharge_state', function(arg1) {

    console.log(arg1)
    $('#accu_precharge_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_precharge_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_precharge_state').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('accu_ts_active', function(arg1) {

    console.log(arg1)
    $('#accu_ts_active').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#accu_ts_active').addClass(' green'); // Add the 'green' color class
    } else {
      $('#accu_ts_active').addClass(' red'); // Add the 'red' color class
    }
    
  });
  socket.on('asb_sd_button_left', function(arg1) {

    console.log(arg1)
    $('#asb_sd_button_left').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#asb_sd_button_left').addClass(' green'); // Add the 'green' color class
    } else {
      $('#asb_sd_button_left').addClass(' red'); // Add the 'red' color class
    }
    
  });

