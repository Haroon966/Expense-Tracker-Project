from django.db import models
from django.contrib.auth.models import User

class Expense(models.Model):
    TRANSACTION_TYPES = [
        ("give", "Give"),
        ("take", "Take"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=4, choices=TRANSACTION_TYPES, default="give")
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.description} - {self.amount} ({self.type})"
