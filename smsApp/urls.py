import requests

url = "https://api.africastalking.com/version1/messaging"

payload='agriace'
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
  'apiKey': '6aa2557c2b30a330d9ca8d6fc1a13e946b7126c249ebc21ec9033a79500cf491'

}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)