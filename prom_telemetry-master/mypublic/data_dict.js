var data_dict = {
  // "hall_fr" : ,
  //"hall_fl" : ,
  //"hall_rr" : ,
  //"hall_rl" : ,
  //"total_vs_voltage" :,
  //"accu_current" : ,
  //"wh_consumed" : ,
  //"accu_state_of_charge" : ,
  //"ah_consumed" : ,
 /*
  "max_cell_voltage" : ,
  "min_cell_voltage" : ,
  "max_cell_temp" : ,
  "min_cell_temp" : ,
  "average_cell_temp" : ,
  "max_humidity" : ,
  "accu_dcdc_temp" : ,
  ">60v_dc_link" : ,
  "air-_state" : ,
  "air-_supply" : ,
  "air+_state" : ,
  "air+_supply" : ,
  "imd_error" : ,
  "ams_error" : ,
  "precharge_state" : ,
  "bms_overvoltage" : ,
  "bms_undervolage" : ,
  "bms_overcurrent_charge" : ,
  "bms_overcurrent_discharge" : ,
  "bms_overtemp" : ,
  "bms_undertemp" : ,
  "bms_isabelle_dead" : ,
  "bms_communication_error" : ,
  "bms_slave_error" : ,
  "bms_humidity_error" : ,
  "tsac_ok" : ,
  "tsac_avi_error" : ,
  "tsac_air-_stuck" : ,
  "tsac_air+_stuck" : ,
  "tsac_air-_implausability" : ,
  "tsac_air+_implausability" : ,
  "tsac_pc_relay_implausability" : ,
  "tsac_pc_circuit_error" : ,
  "tsac_dcdc_overtemp" : ,
  "elcon_hardware_failure" : ,
  "tsac_overtemp_protection" : ,
  "tsac_ac_input_voltage_wrong" : ,
  "tsac_reverse_polarity" : ,
  "tsac_communication_receive_timeout" : ,
  */
  //SHUTDOWN
  "bspd_sd" : 1,
  "imd_sd" : 2,
  "ams_sd" : 3,
  "cockpit_sd" : 4,
  "left_sd" : 6,
  "right_sd" : 7,
  "as_sd" : 8,
  "res_sd" : 9,
  "inertia_sd" : 10,
  "bots_sd" : 11,
  "hvd_sd" : 12,
  "tsms_sd" : 13,
  "ebs_sd" : 14,
 /* "" : ,
  "" : ,
  "" : ,
  "" : ,
  "" : ,




  "igbt_temp" : 1,
  "errors" : 2,
  "vout" : 3,
  "iact" : 4,
  "vdc" : 5,
  "status" : 6,
  "motor_temp" : 7,
  "iq" : 8,
  "rpm" : 9,
  "comm_tor" : 10,
  "torque_req" : 11,
  "rpm_rr" : 12,
  "rpm_rl" : 13,
  "app1" : 14,
  "app2" : 15,
  "brake_press_front" : 16,
  "brake_press_rear" : 17,
  "ams_status": 18,
  "imd_status" : 19,
  "bspd_status" : 20,
  "sd_status" : 21,
  "precharge" : 22,
  "aa" : 23,
  "rtd_status" : 24,
  "drs_status" : 25,
  "inv_ok" : 26,
  "curr_lim_reached" : 27,
  "curr_lim_igbt_temp" : 28,
  "curr_lim_motor_temp" : 29,
  "curr_lim_val_warn" : 30,
  "defective_param" : 31,
  "hardware_fault" : 32,
  "faulty_safety_circuit" :33,
  "map": "num",
  "inverter_enable": 34,
  "impl_apps" : 35,
  "impl_brake" : 36,
  "dev_apps" : 37,
  "dev_brake" : 38,
  "RSSI" : 39,
  "packet_loss" : 40,
  "min_cell_voltage" : 50,
  "soc" : 51,

  "brake_bias" : ,
  "oversteer_understeer_metric" : ,
  "slip_ratio" : ,
  "rssi" : ,
  "packet_loss" : ,
  "wrong_crc" : ,
  "packet_received" : ,

  "brake_actual" : ,
  "speed_target" : ,
  "speed_actual" : ,
  "cone_connector" ,
  "ebs_state_unavailable" : ,
  "ebs_state_armed" : ,
  "ebs_state_activated" : ,
  "service_brake_state_disengaged" : ,
  ""
  
*/

}


var container1 = "<div id="
var container2 = "class='left-container container'><div class='sensor1-chart-block block clear' style = 'position:relative;' id='add_to_me'> <button class = 'time_picker' style='float: left' id='currange' onclick='addCode()'>Time: from now-5m to now</button><button class='btn' onclick='fullscreen()' style=' float: right; z-index : 3; background-color:none; color:white;'><i class='fa fa-expand' style='z-index:3; color: white;'></i></button><div class='form-popup' style='position:absolute; z-index:4; top : 40px; left: 1px; ' id='myForm'><form action='/action_page.php' class='form-container'><div class='text'> From </div><input type='time'  id='from'  step='2' required ><div class='text'> To </div><input type='time'  id='to'  step='2' required ><button type='button' class='time_picker' onclick='saveForm()' style='display:inline'>Save</button><button type='button' class='time_picker' onclick='closeForm()' style='display:inline; float:right'>Close</button></form></div><div id='livegraph' ><iframe src='http://localhost:3000/d-solo/WU_FjM8nz/prom?orgId=1&from=now-5m&to=now&theme=dark&panelId="
var container3 =  " id='chart-left' allowfullscreen = 'true' frameBorder='0' width='570' height='300'  style=' overflow-x: hidden; background-color: green; border: none; overflow: hidden; margin:0px !important; padding: 0px !important;'  frameborder='0'></iframe></div></div></div>"
function addCode(panelid) {
  panelid = 2*panelid
    document.getElementById("wrapper").innerHTML += container1+`'${panelid}' `+container2+ `${panelid}' `+ container3;    }
//fullscreen button
/*document.getElementById("myBtn").addEventListener("click", ()=>{
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});*/

function close_bottomcont() {
    document.getElementById("addcontainer").style.display = "none";
  }
  function open_bottomcont() {
      document.getElementById("addcontainer").style.display = "block";
    }
exports.data_dict = data_dict;
