from rest_framework.viewsets import ModelViewSet
from apps.Events.models import Events, ConcentrationArea, Keyword
from .serializers import EventSerializer, PostEventSerializer
from rest_framework.response import Response


class EventViewSet(ModelViewSet):
    """"""
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    filter_fields = ('sigla', 'reviews', 'keywords', 'start_date',)

    def create(self, request, *args, **kwargs):
        return Response({'text': 'Não é possível criar evento por essa url'})

    def list(self, request, *args, **kwargs):
        """"""
        print(request.data)
        if "count" in request.data:
            count = request.data['count']
            events = list(Events.objects.all().order_by('-event_id')[:count].values())
            print('test')
            print('test2')
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
        try:
            if 'keywords' in request.data:
                for k_id in request.data['keywords']:
                    kw = Keyword.objects.get(keyword_id=k_id)
                    keyword_objs.append(kw)
                del request.data['keywords']

            concentration_area_obj = ConcentrationArea.objects.get(concentration_area_id=request.data['concentration_area'])
            request.data['concentration_area'] = concentration_area_obj

            Events.objects.get(name=request.data['name'], start_date=request.data['start_date'])
            return Response({'text': "Evento já existente"})
        
        except Keyword.DoesNotExist:
            return Response({'text': 'Keyword não existe'})

        except ConcentrationArea.DoesNotExist:
            return Response({'text': 'Keyword não existe'})

        except Events.DoesNotExist:
            new_event = Events.objects.create(**request.data)
            new_event.keywords.add(*keyword_objs)

        return Response({'text': 'Event Criado com sucesso'})

    def destroy(self, request, *args, **kwargs):
        return Response('404')
    
    def retrieve(self, request, *args, **kwargs):
        return Response(404)

    def update(self, request, *args, **kwargs):
        return Response(404)
    
    def partial_update(self, request, *args, **kwargs):
        return Response(404)
    
