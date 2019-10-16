from rest_framework.viewsets import ModelViewSet
from ..models import Student
from .serializers import StudentSerializer

class StudentViewSet(ModelViewSet):
    """"""
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        area, created = Student.objects.update_or_create(
        email=request.data.get('email', None),
        defaults={'email': request.data.get('email', None)})
        if created:
            return Response({"valid": True, 'text': "Estudante criado com sucesso"})
        return Response({"valid": False, 'text': "Estudante já existente"})

