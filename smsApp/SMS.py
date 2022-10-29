import africastalking

# TODO: Initialize Africa's Talking
username = 'SANDBOX'
api_key = 'cd8a63e52d2c3a28031440cf84cb10f4031fc720b2347745ae399a7764cc432f'
africastalking.initialize(username, api_key)

africastalking.initialize(
    username='[SANDBOX]',
    api_key='[cd8a63e52d2c3a28031440cf84cb10f4031fc720b2347745ae399a7764cc432f]'
)

sms = africastalking.SMS

class send_sms():

    def send(self):
        
        #TODO: Send message
        def sending(self):
            # Set the numbers in international format
            recipients = ["+254793769696"]
            # Set your message
            message = "WELCOME TO aGRIaCE!";
            # Set your shortCode or senderId
            sender = "1737"
            try:
                response = self.sms.send(message, recipients, sender)
                print (response)
            except Exception as e:

                    send_sms().sending()
 