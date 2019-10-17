from rest_framework.viewsets import ModelViewSet
from ..models import Administrator
from .serializers import AdministratorSerializer
from rest_framework.response import Response


class AdministratorViewSet(ModelViewSet):
    """"""
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer

    def create(self, request, *args, **kwargs):
        request.data['type'] = "Administrator"
        area, created = Administrator.objects.update_or_create(
        email=request.data.get('email', None),
        defaults=request.data)
        if created:
            return Response({"valid": True, 'reason': "Administrador criado com sucesso"})
        return Response({"valid": False, 'reason': "Administrador já existente"})

    
