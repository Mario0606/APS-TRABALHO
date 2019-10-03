# from apps.Administrador.models import User
# from apps.Professor.models import Professor
# from apps.Aluno.models import Student
# from apps.Administrador.serializers import CreateUserSerializer, CreateUserLoginSerializer
# from rest_framework.response import Response
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def auth(request):
#     """"""
#     serializer = CreateUserLoginSerializer(data=request.data)
#     if serializer.is_valid():
#         login = serializer.data['email']
#         password = serializer.data['password']
#         auth = User.objects.filter(email=login, password=password)
#         res = {
#             "auth": False,
#             "reason": "Usuário não existe"
#         }
#         if auth:
#             res = {
#                 'type': auth[0].type,
#                 'auth': True
#             }
#             return Response(res)
#         return Response(res)
#     return Response(serializer.errors)

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def create_new_account(request):
#     """"""    
#     serializer = CreateUserSerializer(data=request.data)
#     if serializer.is_valid():
#         if User.objects.filter(email=serializer.data['email']):
#             js = {"Valid": False,
#                     "reason": "Já existe conta cadastrada com esse email"}
#             return Response(js)
#         if request.data['matricule']:
#             del request.data['tittle']
#             del request.data['search_area']
#             new_user = Student(**request.data)
#         else:
#             del request.data['matricule']
#             new_user = Professor(**request.data)
#         new_user.save()
#         return Response({"Valid": True,
#                          "Text": "Usuário Criado com sucesso"})
#     return Response(serializer.errors)

