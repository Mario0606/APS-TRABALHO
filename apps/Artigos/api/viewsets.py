from rest_framework.viewsets import ModelViewSet
from apps.Professor.models import Professor
from apps.Professor.api.serializers import ProfessorSerializer
from apps.Events.models import Events
from apps.Administrador.models import User
from ..models import Author, Article
from .serializers import AuthorSerializer, ArticlesSerializer, PostArticleSerializer
from rest_framework.response import Response
from rest_framework.filters import SearchFilter


class AuthorViewSet(ModelViewSet):
    """"""
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class ArticleViewSet(ModelViewSet):
    """"""
    queryset = Article.objects.all()
    serializer_class = ArticlesSerializer
    filter_fields = ('reviewer', 'event', 'authors', 'status', 'user_submit',)

    def create(self, request, *args, **kwargs):
        return Response({'text': 'Não é possível criar evento por essa url'})
    
    def partial_update(self, request, *args, **kwargs):
        to_upd = []
        if ("reviewer" in request.data or "status" in request.data) and (len(request.data) <= 3):
            if "reviewer" in request.data:
                try:
                    reviewer = Professor.objects.get(id=request.data['reviewer'])
                    request.data['reviewer'] = reviewer
                    to_upd.append('reviewer')
                except User.DoesNotExist:
                    return Response({'text': 'Professor não existe'})
            if "status" in request.data:
                to_upd.append('status')
            update_article = Article(**request.data)
            update_article.save(update_fields=to_upd)
            return Response({"text": "Artigo atualizado com sucesso"})

        else:
            return super(ArticleViewSet, self).partial_update(request, *args, **kwargs)


class CreateArticleViewSet(ModelViewSet):
    """"""
    queryset = Article.objects.all()
    serializer_class = PostArticleSerializer

    def list(self, request, *args, **kwargs):
        return Response(404)
    
    def create(self, request, *args, **kwargs):
        try:
            if 'authors' in request.data:
                authors = []
                for author in request.data['authors']:
                    author, created = Author.objects.update_or_create(
                        name=author['name'], email=author['email'])
                    authors.append(author)
                del request.data['authors']
            user_obj = User.objects.get(id=request.data['user_submit'])
            event = Events.objects.get(event_id=request.data['event'])
            request.data['user_submit'] = user_obj
            request.data['event'] = event
            new_article = Article.objects.create(**request.data)
            new_article.authors.add(*authors)
            return Response({'text': 'Artigo criado com sucesso'})
        
        except User.DoesNotExist:
            return Response({'text': 'Usuário não existe'})

        except Events.DoesNotExist:
            return Response({'text': 'Evento não existe'})

    def destroy(self, request, *args, **kwargs):
        return Response('404')
    
    def retrieve(self, request, *args, **kwargs):
        return Response(404)

    def update(self, request, *args, **kwargs):
        return Response(404)
    
    def partial_update(self, request, *args, **kwargs):
        return Response(404)
    
