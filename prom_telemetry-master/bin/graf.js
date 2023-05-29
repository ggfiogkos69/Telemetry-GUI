const { exec } = require("child_process");
const process1 = require('process');
var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;


                        exec("./grafana-server", (error, stdout1, stderr) => {
                            if (error) {
                                console.log(`error: ${error.message}`);
                                return;
                            }
                            if (stderr) {
                                console.log(`l stderr: ${stderr}`);
                                return;
                            }

                                console.log(`stdout: ${stdout1}`);
                            });



            }



          }



})();

something();
