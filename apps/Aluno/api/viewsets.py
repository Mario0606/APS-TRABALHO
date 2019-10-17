from rest_framework.viewsets import ModelViewSet
from ..models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response

class StudentViewSet(ModelViewSet):
    """"""
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        request.data['type'] = "Student"
        area, created = Student.objects.update_or_create(
        email=request.data.get('email', None),
        defaults=request.data)
        if created:
            return Response({"valid": True, 'reason': "Estudante criado com sucesso"})
        return Response({"valid": False, 'reason': "Estudante já existente"})

