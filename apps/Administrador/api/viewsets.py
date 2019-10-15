from rest_framework.viewsets import ModelViewSet
from ..models import Administrator
from .serializers import AdministratorSerializer

class AdministratorViewSet(ModelViewSet):
    """"""
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer

    
