import requests
from requests.structures import CaseInsensitiveDict

url = "https://shape.udoblucher.net/login/?next=/"

headers = CaseInsensitiveDict()

headers["Cookie"] = "csrftoken=ccsNd7maWtn8H7hXvLcpnVEAFklpf2QuyWoT7Haj2wEYfg9gXNsLc3JwRyw9O4uM"
headers["Content-Type"] = "application/x-www-form-urlencoded"
headers["Origin"] = "shape.udoblucher.net"


data = 'csrfmiddlewaretoken=ocIY7ojhlVINZ0kV0NJLI3LXRz33mraxKWE41Y7qrYZDx9cesPZ7xbQT3NeNVtOP&username=u.vonblucher@f5.com&password=f5rocks123&login='


resp = requests.post(url, headers=headers, data=data)

print(resp)


