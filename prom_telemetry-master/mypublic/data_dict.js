var data_dict = {

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
  "soc" : 51
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
