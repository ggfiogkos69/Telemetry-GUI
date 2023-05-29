import requests
import time
import json
import sys
import serial
#x1 = 0
#x2 = 0
#x3 = 0


def isjson(str) :
    try:
        json.loads(str)
    except ValueError as err :
        return False
    return True

def parsetodatabase(data_json):
    data = ''
    for i,val in enumerate(data_json.keys()) :
            data += str(val)+'='+str(data_json[val])+','

    data = data[:-1]
    return data
def extract_last(mes) :
    global last_recieved

    buffer_string=''
    buffer_string = buffer_string+ mes
    #print(buffer_string)
    if '}' and '{' in buffer_string :
        lines = buffer_string.split('{')

        json = lines[-1].split('}')[-2]
        json = '{' + json + '}'
        #print("JSON:    ",json)
        return json
    else:
        return ''

try:
    serialPort = serial.Serial(port = str(sys.argv[1]), baudrate=sys.argv[2], bytesize=8, timeout=2, stopbits=serial.STOPBITS_ONE)

    while(1) :
        if(serialPort.in_waiting>0):
            serialString = serialPort.readline()
            lastmes = extract_last(str(serialString))
            #print("message   ",lastmes)
            if lastmes != '':
                print(lastmes, flush=True)
                if isjson(lastmes) :
                    inp = json.loads(lastmes)
                    #print("HELLO ",inp["igbt_temp"])
                    res = parsetodatabase(inp)
                    #print(res)
                    #response = requests.post('http://localhost:3000/api/live/push/custom_stream_id', data='sma,host=smar ' + res, headers={'Authorization':'Bearer '+ 'eyJrIjoiMm03c0lXRWY0VGxrM0Vmd2hBelN6NWdtQ3ZSMHZLMTAiLCJuIjoidGVsIiwiaWQiOjF9'})
                    response = requests.post('https://benetousmaragda.grafana.net/api/live/push/custom_stream_id', data='prom,host=prom ' + res, headers={'Authorization':'Bearer '+ 'eyJrIjoiUnM3VWFTT0FKT2s5aTZVT3BvUXg3MktVSkx1aU9BYUIiLCJuIjoicHJvbSIsImlkIjoxfQ=='})
                    #print(response, flush=True)
except Exception as e:
    print("error with port ", flush=True)
    print(str(e), flush=True)



#          status=inp["status"],motor_temp=inp["motor_temp"],iq=inp["iq"], rpm=inp["rpm"], comm_tor=inp["comm_tor"],torque_req=inp["torque_req"],rpm_rr=inp["rpm_rr"],rpm_rl=inp["rpm_rl"], headers={'Authorization':'Bearer '+ 'eyJrIjoiMm03c0lXRWY0VGxrM0Vmd2hBelN6NWdtQ3ZSMHZLMTAiLCJuIjoidGVsIiwiaWQiOjF9'})
 # x1+=1
  #x2+=2
  #x3+=3
  #print(x1,x2,x3)
  #print(response)
  #time.sleep(0.4)
