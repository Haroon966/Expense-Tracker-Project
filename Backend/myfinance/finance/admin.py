from django.contrib import admin
from .models import Expense  # Import your model

@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ("description", "amount", "type", "date", "user")  # Fields shown in the admin panel
    search_fields = ("description", "user__username")  # Enable search functionality
    list_filter = ("type", "date")  # Add filters for better navigation
