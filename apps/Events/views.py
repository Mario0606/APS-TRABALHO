# from django.shortcuts import render
# from .serializers import EventSerializer
# from rest_framework.response import Response
# from core.models import ConcentrationArea, Keyword
# from ..models import Events
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def create_new_event(request):
#     """"""
#     keyword_objs = []
#     concentration_area_id = ConcentrationArea.objects.get(concentration_area_id=request.data['concentration_area'])

#     print(type(request.data['keywords']))
#     for k_id in request.data['keywords']:
#         kw = Keyword.objects.get(keyword_id=k_id)
#         keyword_objs.append(kw)
#     del request.data['keywords']

#     request.data['concentration_area'] = concentration_area_id
#     try:
#         new_event = Events(**request.data)
#     except TypeError:
#         return Response({"valid": False, "Text": "Json inválido"})
        
#     new_event.save()
#     for k in keyword_objs:
#         new_event.keywords.add(k)
#     return Response({"valid": True, "Text": "Evento Criado com sucesso"})

