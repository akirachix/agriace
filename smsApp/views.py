# from datetime import datetime
import requests

# from django.conf import settings
# from agriApp.models import *


from africastalking.Service import AfricasTalkingException
# from django.shortcuts import render

# # Create your views here.
# # Initialize Africa's Talking/sdk
# username = 'sandbox'
# api_key = '3a4ef629c9f1856acd0a5d6ff16d840b422dba9dbc810a6e070f5ea9e7b982ce'


# AfricasTalkingException.initialize(username, api_key)

# AfricasTalkingException.initialize(
#     username='[sandbox]',
#     api_key='[3a4ef629c9f1856acd0a5d6ff16d840b422dba9dbc810a6e070f5ea9e7b982ce]'
# )
# sms = AfricasTalkingException.SMS



# def send_sms(user, message, recipients):
#     """
#     Send sms
#     """
#     recipients = recipients
#     message = message
#     time_sent = datetime.now()
#     #
#     if len(message) > 160:
#         raise Exception("Ensure your message has less that 160 characters")

#     try:
#         # buy a Dedicated Short Code to get a sender ID
#         # response = sms.send(message, recipients, sender)
#         response = sms.send(message, recipients)

#         # save the sms info to the db
#         sms_info_obj = Seeds(
#             time_sent=time_sent,
#             message_text=message,
#             africastalking_response=response['SMSMessageData']['Message'],
#             user=user,
#             success=True)
#         sms_info_obj.save()

#         # save the messages sent
#         contact_list = Farmer.objects.all()
#         message_obj_list = []

#         for i in response['SMSMessageData']['Recipients']:
#             # check for contact
#             if contact_list.filter(phone_number__exact=i["number"]).exists:
#                 # if we have the contact saved...
#                 message_obj_list.append(
#                     Message(
#                         message_info=sms_info_obj,
#                         message_id=i["messageId"],
#                         contact=contact_list.get(phone_number__exact=i["number"]),
#                         cost=i["cost"],
#                         status_code=i["statusCode"],
#                         number=i["number"]
#                     ))
#             else:
#                 # create & save contact
#                 contact_obj = Farmer(
#                     first_name="First Name",
#                     last_name="Doe",
#                     phone_number=i["number"])
#                 contact_obj.save()
#                 #
#                 #
#                 # save message
#                 message_obj_list.append(
#                     Message(
#                         message_info=sms_info_obj,
#                         message_id=i["messageId"],
#                         contact=contact_obj,
#                         cost=i["cost"],
#                         number=i["number"],
#                         status_code=i["statusCode"], ))

#         # save the list objects into the database in one query
#         Message.objects.bulk_create(message_obj_list)

#     except requests.exceptions.ConnectionError as e:
#         # save the sms info to the db
#         sms_info_obj = Seeds(
#             time_sent=time_sent,
#             message_text=message,
#             africastalking_response=e,
#             user=user,
#             success=False)
#         sms_info_obj.save()
#         raise Exception("Network Connection Error")
#     except requests.HTTPError as e:
#         # save the sms info to the db
#         sms_info_obj = Seeds(
#             time_sent=time_sent,
#             message_text=message,
#             africastalking_response=e,
#             user=user,
#             success=False)
#         sms_info_obj.save()
#         raise Exception("HTTP Network Error")
#     except Exception as e:
#         # save the sms info to the db
#         sms_info_obj = Seeds(
#             time_sent=time_sent,
#             message_text=message,
#             africastalking_response=e,
#             user=user,
#             success=False)
#         sms_info_obj.save()
#         raise e
#     else:
#         return response

# class send_sms():
#     # def send(self):
#         #TODO: Send message
#         def sending(self):
#             # Set the numbers in international format
#             recipients = ["+254796715990"]
#             # Set your message
#             message = "Hello Farmer, Welcome to AgriAce!"
#             # Set your shortCode or senderId
#             sender = "5577"
#             try:
#                 response = self.sms.send(message, recipients, sender)
#                 print (response)


#             except Exception as e:
#                 print (f'Houston, we have a problem: {e}')
#                 send_sms().sending()
# pass #delete this code

import africastalking
class SMS:
    def __init__(self):
        self.username = "agriace"
        self.api_key = "6aa2557c2b30a330d9ca8d6fc1a13e946b7126c249ebc21ec9033a79500cf491"
        # Initialize the SDK
        africastalking.initialize(self.username, self.api_key)
        # Get the SMS service
        self.sms = africastalking.SMS
    def send(self):
        recipients = ["+256787955445"]
        # Set your message
        message ='Hello Farmer, Welcome to AgriAce! Press 1 to Order Seeds';
        # Set your shortCode or senderId
        # sender = "4632"
        try:
            response = self.sms.send(message, recipients)
            print (response)
        except Exception as e:
            print ('Encountered an error while sending: %s' % str(e))
if __name__ == '__main__':
     SMS().send()
