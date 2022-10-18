from datetime import datetime
from django.db import models

# Create your models here.

class Farmer(models.Model):
    first_name=models.CharField(null=True,max_length=100)
    last_name=models.CharField(null=True,max_length=10)
    address = models.CharField(null=True,max_length=100)
    phonenumber =models.CharField (max_length=12)
    id_no=models.CharField(null=True,max_length=8)
    code=models.CharField(null=True,max_length=4)

class SeedCompanies(models.Model):
    COMPANY_CHOICES=(
        ('ADC Molo','ADC Molo'),
        ('KARLO,Tigoni','KARLO,Tigoni'),
        ('Kisima Farm','Kisima Farm'),
        ('Agrico East Africa','Agrico East Africa'),
        ('Fresh Crop Limited','Fresh Crop Limited'),
        ('Singus Enterprise ','Singus Enterprise '),
        ('Egerton University Unit','Egerton University Unit'),
        ('GTIL (Apical cuttings and minitubers only','Apical cuttings and minitubers only'),
        ('Aberdare Technology Limited','Aberdare Technology Limited'),
        ('Gene Biotech seeds LTD','Gene Biotech seeds LTD'),
        ('Sigen Hortipruse Ltd','Sigen Hortipruse Ltd'),
        ('Kevian Kenya seeds (Kirinyaga seeds)','Kevian Kenya seeds (Kirinyaga seeds)'),
        ('Savannah Fresh Hort. Farmers Cooperative Society Ltd','Savannah Fresh Hort. Farmers Cooperative Society Ltd'),
        ('Mahindra and Mahindra s.Africa Ltd','Mahindra and Mahindra s.Africa Ltd'),
        ('Baraka Agricultural College (Nakuru)','Baraka Agricultural College (Nakuru)'),
    )
    company_name = models.CharField(null=True,choices=COMPANY_CHOICES,max_length=100)
    location = models.CharField(null=True,max_length=100)
    SEED_CHOICES=(
        ('Shangi','Shangii'),
        ('Dutch robijn', 'Dutch robijn'),
        ('Sherekea', 'Sherekea'),
        ('Konjo','Konjo'),
        ('Lady Amarilla','Lady Amarilla'),
        ('Musica','Musica'),
    )
    seed_variety = models.CharField(null=True,choices=SEED_CHOICES,max_length=100)

class Seeds(models.Model):
    SEED_CHOICES=(
        ('Shangii','Shangii'),
        ('Dutch robijn', 'Dutch robijn'),
        ('Sherekea', 'Sherekea'),
        ('Konjo','Konjo'),
        ('Lady Amarilla','Lady Amarilla'),
        ('Musica','Musica'),
    )
    seed_variety = models.CharField(null=True,choices=SEED_CHOICES,max_length=100)
    cost_per_Kg =models.IntegerField(null=True)
    quantity=models.CharField(null=True,max_length=10)

class Message(models.Model):
    customerId=models.CharField(null=True,max_length=20)
    msg_status=models.CharField(null=True,max_length=20)
    message=models.TextField(null=True,max_length=100)
    

