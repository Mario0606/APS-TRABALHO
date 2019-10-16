from rest_framework.viewsets import ModelViewSet
from ..models import Professor
from .serializers import ProfessorSerializer
from rest_framework.response import Response

class ProfessorViewSet(ModelViewSet):
    """"""
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer
    filter_fields = ('search_area',)

    def create(self, request, *args, **kwargs):
        area, created = Professor.objects.update_or_create(
        email=request.data.get('email', None),
        defaults={'email': request.data.get('email', None)})
        if created:
            return Response({"valid": True, 'text': "Professor criado com sucesso"})
        return Response({"valid": False, 'text': "Professor já existente"})
