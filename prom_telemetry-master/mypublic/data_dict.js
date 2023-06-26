var data_dict = {
  "total_vs_voltage":1,
  "accu_current":2,
  "accu_dcdc_temp":3,
  "max_cell_voltage":4,
  "min_cell_voltage":5, //
  "max_cell_temp":6,
  "min_cell_temp":7,
  "motor_rpm":8,
  "igbt_temp":9,
  "motor_temp":10,
  "lv_max_cell_voltage":11,
  "lv_min_cell_voltage":12,
  "lv_max_cell_temp":13,
  "tdk1_current":14,
  "tdk2_current":15,
  "break_pressure_fron":16,
  "break_pressure_rear":17,
  "apps":18,
  "requesed_torque":19,
  "actual_torque":20,
  "imd_status" : 21,
  "ams_status" : 22,
  "asb" : 23,
  "bspd" : 24,
  "sd_status" : 25,
  "ts_off" : 26,
  "sd_button_left" : 27,
  "sd_button_right" : 28,
  "asms" : 29,
  "hvd" : 30,
  "inv_off" : 31,
  ">60v_dc_link" : 32,
  "air_minus_state" : 33,
  "air_minus_supply" : 34,
  "air_plus_state" : 35,
  "air_plus_state" : 36,
  "precharge_state" : 37,
  "cockpit_sd" : 38,
  "bots_sd" : 39,
  "inertial_sd" : 40,
  "bms_ok" : 41,
  "overvoltage" : 42,
  "undervoltage" : 43,
  "overcurrent_charge" : 44,
  "overcurrent_discharge" : 45,
  "undertemp" : 46,
  "isabelle_dead" : 47,
  "communication_error" : 48,
  "slave_error" : 49,
  "humidity_error" : 50,
  "precharge_combo" : 51,
  "pc_done" : 52,
  "rtd_pressed" : 53,
  "rtd_done" : 54,
  "tsac_ok" : 55,
  "imd_error" : 56,
  "avi_error" : 57,
  "air_minus_stuck" : 58,
  "air_plus_stuck" : 59,
  "air_minus_implausibility" : 60,
  "air_plus_implausibility" : 61,
  "pc_relay_implausibility" : 62,
  "pc_circuit_error" : 63,
  "dcdc_overtemp" : 64,
  "elcon_hardware_failure" : 65,
  "overtemp_protection" : 66,
  "ac_input_voltage_wrong" : 67,
  "reverse_polarity" : 68,
  "communication_receive_timeout " : 69

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
