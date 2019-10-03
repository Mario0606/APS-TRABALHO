from rest_framework.viewsets import ModelViewSet
from ..models import Professor
from .serializers import ProfessorSerializer

class ProfessorViewSet(ModelViewSet):
    """"""
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer
    filter_fields = ('search_area',)
