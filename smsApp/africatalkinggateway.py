

import urllib.request, urllib.parse, urllib.error
import json

class AfricasTalkingGatewayException(Exception):
    pass

class AfricasTalkingGateway:

    def __init__(self, username_, apiKey_):
        self.username    = username_
        self.apiKey      = apiKey_
        self.environment = 'sandbox' if username_ is 'sandbox' else 'prod'
        
        self.HTTP_RESPONSE_OK       = 200
        self.HTTP_RESPONSE_CREATED  = 201
        
        # Turn this on if you run into problems. It will print the raw HTTP response from our server
        self.Debug                  = True

    def generateAuthToken(self):
        parameters = { 'username'    : self.username }
        url      = self.getGenerateAuthTokenUrl()
        response = self.sendJSONRequest(url, json.dumps(parameters))
        if self.responseCode == self.HTTP_RESPONSE_CREATED:
              response = self.sendJSONRequest(url, json.dumps(parameters))
        if self.responseCode == self.HTTP_RESPONSE_CREATED:
            return json.loads(response)
        raise AfricasTalkingGatewayException(response)

    # Messaging methods
    def sendMessage(self, to_, message_, from_ = None, bulkSMSMode_ = 1, enqueue_ = 0, keyword_ = None, linkId_ = None, retryDurationInHours_ = None, authToken_ = None):
        if len(to_) == 0 or len(message_) == 0:
            raise AfricasTalkingGatewayException("Please provide both to_ and message_ parameters")
        
        parameters = {'username' : self.username,
                      'to': to_,
                      'message': message_,
                      'bulkSMSMode':bulkSMSMode_}
        
        if not from_ is None :
            parameters["from"] = from_

        if enqueue_ > 0:
            parameters["enqueue"] = enqueue_
        if not keyword_ is None:
                parameters["keyword"] = keyword_
            
        if not linkId_ is None:
            parameters["linkId"] = linkId_

        if not retryDurationInHours_ is None:
            parameters["retryDurationInHours"] =  retryDurationInHours_

        response = self.sendRequest(self.getSmsUrl(), parameters, authToken_)
        
        if self.responseCode == self.HTTP_RESPONSE_CREATED:
            decoded = json.loads(response)
            recipients = decoded['SMSMessageData']['Recipients']
			
            if len(recipients) > 0:
                return recipients
				
            raise AfricasTalkingGatewayException(decoded['SMSMessageData']['Message'])
        
        raise AfricasTalkingGatewayException(response)


    def fetchMessages(self, lastReceivedId_ = 0):
        url = "%s?username=%s&lastReceivedId=%s" % (self.getSmsUrl(), self.username, lastReceivedId_)
        response = self.sendRequest(url)
		
        if self.responseCode == self.HTTP_RESPONSE_OK:
            decoded = json.loads(response)
            return decoded['SMSMessageData']['Messages']
        raise AfricasTalkingGatewayException(response)

