from django.contrib import admin
from .models import Farmer,SeedCompanies,Seeds,Message

# Register your models here.
class FarmersAdmin(admin.ModelAdmin):
    list_display=('first_name','last_name','address','phonenumber','id_no','code')
    search_details=('first_name','last_name','address','phonenumber','id_no','code')

class SeedCompaniesAdmin(admin.ModelAdmin):
    list_display=('company_name','location','seed_variety')
    search_details=('company_name','location','seed_variety')

class SeedsAdmin(admin.ModelAdmin):
    list_display=('seed_variety','quantity')
    search_details=('seed_variety','quantity')

class MessageAdmin(admin.ModelAdmin):
    list_display=('customerId','msg_status','message')
    search_details=('customerId','msg_status','message')


admin.site.register(Farmer,FarmersAdmin)
admin.site.register(SeedCompanies,SeedCompaniesAdmin)
admin.site.register(Seeds,SeedsAdmin)
admin.site.register(Message,MessageAdmin)
