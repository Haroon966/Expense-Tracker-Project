from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('expenses/', views.ExpenseList.as_view()),
    path('expenses/<int:pk>/', views.ExpenseDetail.as_view()),
    path('incomes/', views.IncomeList.as_view()),
    path('incomes/<int:pk>/', views.IncomeDetail.as_view()),
    path('debts/', views.DebtList.as_view()),
    path('debts/<int:pk>/', views.DebtDetail.as_view()),
    path('credits/', views.CreditList.as_view()),
    path('credits/<int:pk>/', views.CreditDetail.as_view()),
]
