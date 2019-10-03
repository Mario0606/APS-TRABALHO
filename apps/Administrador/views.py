from django.http import HttpResponse, JsonResponse
from .forms import EventForm
from ..Events.models import Events, ConcentrationArea
from .serializers import ConcentrationAreaSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def new_concentration_area(request):
    """"""
    serializer = ConcentrationAreaSerializer(data=request.data)
    if serializer.is_valid():
        if ConcentrationArea.objects.filter(area=serializer.data['area']):
            js = {"Valid": False,
                    "reason": "Já existe essa area de concentração"}
            return Response(js)
        return Response({"Valid": True,
                         "Text": "Área de concentração criada com sucesso"})
    return Response(serializer.errors)


def new_keyword(request):
    """"""
    if form.is_valid():
        form.save()
    return HttpResponse(200)
