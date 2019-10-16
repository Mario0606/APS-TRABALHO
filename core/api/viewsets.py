from rest_framework.viewsets import ModelViewSet
from apps.Events.models import ConcentrationArea, Keyword
from apps.Administrador.models import User
from rest_framework.decorators import action
from .serializers import KeywordSerializer, ConcentrationAreaSerializer, LoginSerializer
from rest_framework.response import Response


class KeywordsViewSet(ModelViewSet):
    """"""
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer

    def create(self, request, *args, **kwargs):
        area, created = Keyword.objects.update_or_create(
        keyword=request.data.get('keyword', None),
        defaults={'keyword': request.data.get('keyword', None)})
        if created:
            return Response({"valid": True, 'text': "Keyword criada com sucesso"})
        return Response({"valid": False, 'text': "Keyword já existente"})

class ConcentrationAreaViewSet(ModelViewSet):
    """"""
    queryset = ConcentrationArea.objects.all()
    serializer_class = ConcentrationAreaSerializer

    def create(self, request, *args, **kwargs):
        area, created = ConcentrationArea.objects.update_or_create(
        area=request.data.get('area', None),
        defaults={'area': request.data.get('area', None)})
        if created:
            return Response({"valid": True, 'text': "Area de concentração criada com sucesso"})
        return Response({"valid": False, 'text': "Area de concentração já existente"})

    
class LoginViewSet(ModelViewSet):
    """"""
    queryset = User.objects.all()
    serializer_class = LoginSerializer
    
    def list(self, request, *args, **kwargs):
        pass
    
    def create(self, request, *args, **kwargs):
        pass

    def destroy(self, request, *args, **kwargs):
        pass
    
    def retrieve(self, request, *args, **kwargs):
        pass

    def update(self, request, *args, **kwargs):
        pass
    
    def partial_update(self, request, *args, **kwargs):
        pass

    @action(methods=['post'], detail=False)
    def login(self, request, pk=None):
        data = request.data
        auth = User.objects.filter(email=data['address'], password=data['password'])
        res = {
            "valid": False,
            "reason": "Usuário não existe"
        }
        if auth:
            res = {
                'type': auth[0].type,
                'valid': True
            }
            return Response(res)
        return Response(res)
