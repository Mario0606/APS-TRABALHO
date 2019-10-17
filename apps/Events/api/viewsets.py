from rest_framework.viewsets import ModelViewSet
from apps.Events.models import Events, ConcentrationArea, Keyword
from apps.Professor.models import Professor
from .serializers import EventSerializer, PostEventSerializer
from rest_framework.response import Response
from django.core import serializers
import json

class EventViewSet(ModelViewSet):
    """"""
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    filter_fields = ('sigla', 'reviews', 'keywords__keyword', 'start_date', 'concentration_area__area',)

    # def get_queryset(self):
    #     keyword = self.request.query_params.get("keywords", None)
    #     if keyword:
    #         try:
    #             key = Keyword.objects.filter(keyword__iexact=keyword)
    #             qs_json = serializers.serialize('json', key)
    #             print(qs_json)
    #             #return Events.objects.filter(keywords=js)
    #         except Keyword.DoesNotExist:
    #             return Response(404)
    #     return super(EventViewSet, self).get_queryset()

    def create(self, request, *args, **kwargs):
        return Response({'text': 'Não é possível criar evento por essa url'})

    def list(self, request, *args, **kwargs):
        """"""
        if "count" in request.data:
            count = request.data['count']
            events = list(Events.objects.all().order_by('-event_id')[:count].values())
            return Response(events)

        else:
            return super(EventViewSet, self).list(request, *args, **kwargs)

class CreateEventViewSet(ModelViewSet):
    """"""
    queryset = Events.objects.all()
    serializer_class = PostEventSerializer

    def list(self, request, *args, **kwargs):
        return Response(404)
    
    def create(self, request, *args, **kwargs):
        keyword_objs = []
        reviewers_obj = []
        try:
            if 'keywords' in request.data:
                for k_id in request.data['keywords']:
                    kw = Keyword.objects.get(keyword_id=k_id)
                    keyword_objs.append(kw)
                del request.data['keywords']

            if 'reviewers' in request.data:
                for r_id in request.data['reviewers']:
                    kw = Professor.objects.get(id=r_id)
                    reviewers_obj.append(kw)
                del request.data['reviewers']

            concentration_area_obj = ConcentrationArea.objects.get(concentration_area_id=request.data['concentration_area'])
            request.data['concentration_area'] = concentration_area_obj

            Events.objects.get(name__iexact=request.data['name'], start_date=request.data['start_date'])
            return Response({'valid': False, 'text': "Evento já existente"})
        
        except Keyword.DoesNotExist:
            return Response({'valid': False, 'text': 'Keyword não existe'})

        except ConcentrationArea.DoesNotExist:
            return Response({'valid': False, 'text': 'Area de concentração não existe'})

        except Events.DoesNotExist:
            new_event = Events.objects.create(**request.data)
            new_event.keywords.add(*keyword_objs)
            new_event.reviews.add(*reviewers_obj)

        return Response({'valid': True, 'text': 'Event Criado com sucesso'})

    def destroy(self, request, *args, **kwargs):
        return Response(404)
    
    def retrieve(self, request, *args, **kwargs):
        return Response(404)

    def update(self, request, *args, **kwargs):
        return Response(404)
    
    def partial_update(self, request, *args, **kwargs):
        return Response(404)
    
