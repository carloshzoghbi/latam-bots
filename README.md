# LAB Shape - LATAM

## In order to analyze the results of this LAB you must have access to the PR1 Dashboard and select the - Shape PS-Team - Enterprise ##

Please clone this REPO locally in order to follow the instructions. 
- NPM is required; (can be installed using homebrew)
- Python3 is required; (can be installed using homebrew)




1. Advanced Bots

    Bot created using Puppeteer 

    INSTRUCTIONS 

     1. Go to Advanced dir 
     2. run command -> npm install package.json ## requires NodeJS installed
     3. Update the file credentials/cred.txt accordingly ## empty lines will make the Bot throw an error
     4. To run the Bot
        4.1 - Sigle request - type: node bot_single.js
        4.2 - Multiple requests - type: node bot_multiple.js ## it will use the cred.txt to build the array starts the Logins

    ### The PROXY argument is empty as it isn't in use. If you have multiple proxies to forward the traffic to, you can pass it in the cred.txt and update the code to use the proxy configuration

2. Medium 

    Bot created using Selenium

    INSTRUCTIONS

    1st time

    1. Go to medium dir
    2. run command -> python3 -m venv .venv
    3. run command -> source .venv/bin/activate
    4. run command -> pip install pip --upgrade
    5. run command -> pip install -r requirements.txt
    6. run command -> cp chromedriver .venv/bin/

    #### The files usernames.txt & passwords.txt must be updated accordingly respecting the actual format

    6. run command -> python bot_medium.py

    2nd time on
    
    1. Go to medium dir
    2. run command -> source .venv/bin/activate
    3. run command -> python bot_medium.py

3. Simple

    Bot using Curl and Python requests

    INSTRUCTIONS

    1. Go to Simple dir
    2. There 3 types of low-level Bots (scripts)
        2.1 - curl_shape_token_missing.sh refers to a curl command to send requests without Shape Telemetry
        2.2 - curl_shape_token_reuse.sh refers to a curl command to send requests reusing Shape Telemetry 
        2.3 - py_token_missing.py refers to a python request to send request without Shape Temetry
    
    3. The sintax to run Bots 2.1 and 2.2 is ## sh script_name.sh # url (eg. sh curl_shape_token_reuse.sh 10 shape.udoblucher.net) - It will send 10 authentication requests to the URL 

    4. To run the python script for the 1st time, run the following commands:

    1st time

        4.1 python3 -m .venv venv
        4.2 source .venv/bin/activate
        4.3 pip install pip --upgrade
        4.4 pip install -r requirements.txt

        4.5 python py_token_missing.py

        4.6 deactivate # returns to the main OS environment 

    2nd time on
    
        1. source .venv/bin/activate
        2. python py_token_missing.py

#Enjoy
