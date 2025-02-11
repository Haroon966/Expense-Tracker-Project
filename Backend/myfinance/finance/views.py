from rest_framework import generics
from .models import User, Expense, Income, Debt, Credit
from .serializers import UserSerializer, ExpenseSerializer, IncomeSerializer, DebtSerializer, CreditSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ExpenseList(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class ExpenseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class IncomeList(generics.ListCreateAPIView):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class IncomeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class DebtList(generics.ListCreateAPIView):
    queryset = Debt.objects.all()
    serializer_class = DebtSerializer

class DebtDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Debt.objects.all()
    serializer_class = DebtSerializer

class CreditList(generics.ListCreateAPIView):
    queryset = Credit.objects.all()
    serializer_class = CreditSerializer

class CreditDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Credit.objects.all()
    serializer_class = CreditSerializer
