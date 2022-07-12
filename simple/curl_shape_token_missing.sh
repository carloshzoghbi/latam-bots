#!/usr/bin/env bash

args=("$@")
TIMES=${args[0]}
#TIMES=1
COUNTER=0
TARGET_IP=${args[1]}


while [  $COUNTER -lt $TIMES ]; do
    let COUNTER=COUNTER+1
    echo "## Attack run number: $COUNTER"
    curl "https://${TARGET_IP}/login/?next=/" \
    -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
    -H 'Accept-Language: en-US,en;q=0.9,pt;q=0.8' \
    -H 'Cache-Control: no-cache' \
    -H 'Connection: keep-alive' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'Cookie: csrftoken=E2beIGRCIbXuNVVFVgH9L6Wry5e2IkGPguCWEOaWlf8exoG3ETGUQ63rJII6ZmxJ' \
    -H "Origin: ${TARGET_IP}" \
    -H 'Pragma: no-cache' \
    -H 'Referer: https://shape.udoblucher.net/login/?next=/' \
    -H 'Sec-Fetch-Dest: document' \
    -H 'Sec-Fetch-Mode: navigate' \
    -H 'Sec-Fetch-Site: same-origin' \
    -H 'Sec-Fetch-User: ?1' \
    -H 'Upgrade-Insecure-Requests: 1' \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36 - LATAM F5 LAB' \
    -H 'sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "macOS"' \
    --data-raw 'csrfmiddlewaretoken=X33fhV2tkQfgPz59Tl5YQyRSW5Hw7GWhzvuXd3lNXUq0z2QxCY4JVyYS7IbAoINb&username=u.vonblucher%40f5.com&password=f5rocks123&login=' \
    --compressed
done
