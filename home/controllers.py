# controllers.py (Django version)

from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
from django.contrib.sessions.backends.db import SessionStore
from datetime import datetime, timedelta
import uuid
import jwt
from .models import User, MentalHealthResponse

def token_required(view_func):
    def wrapper(request, *args, **kwargs):
        token = request.session.get("token")
        if not token:
            return JsonResponse({'message': 'Token is missing!'}, status=401)
        try:
            decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            current_user = User.objects.get(public_id=decoded['public_id'])
        except jwt.ExpiredSignatureError:
            return JsonResponse({'message': 'Token has expired!'}, status=401)
        except (jwt.InvalidTokenError, User.DoesNotExist):
            return JsonResponse({'message': 'Token is invalid or user not found!'}, status=401)
        return view_func(request, current_user=current_user, *args, **kwargs)
    return wrapper

def register_user(data):
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    if User.objects.filter(email=email).exists():
        return False, 'User already exists. Please log in.', None

    user = User(
        public_id=str(uuid.uuid4()),
        name=name,
        email=email,
        password=make_password(password)
    )
    user.save()
    return True, 'Successfully registered. Please log in.', user.id

def login_user(data, secret_key):
    email = data.get('email')
    password = data.get('password')
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return False, 'Invalid email or password'

    if not check_password(password, user.password):
        return False, 'Invalid email or password'

    token = jwt.encode({'public_id': user.public_id, 'exp': datetime.utcnow() + timedelta(days=2)},
                       secret_key, algorithm="HS256")
    return True, token

def get_all_users(current_user):
    return User.objects.all()

def submitassessment(data, user_id):
    try:
        response = MentalHealthResponse.objects.create(
            user_id=user_id,
            age=data["age"],
            gender=data["gender"],
            location=data["location"],
            contact=data["contact"],
            emotional_feeling=data['emotional_feeling'],
            feelings_sadness=data['feelings_sadness'],
            emotional_triggers=data['emotional_triggers'],
            happiness_level=data['happiness_level'],
            stress_sources=data['stress_sources'],
            coping_methods=data['coping_methods'],
            relax_activities=data['relax_activities'],
            overwhelmed_feeling=data['overwhelmed_feeling'],
            social_comfort=data['social_comfort'],
            time_with_others=data['time_with_others'],
            social_support=data['social_support'],
            social_changes=data['social_changes'],
            response_to_situations=data['response_to_situations'],
            optimist_pessimist=data['optimist_pessimist'],
            risk_taking=data['risk_taking'],
            handling_criticism=data['handling_criticism']
        )
        return True, 'Form submitted successfully!'
    except Exception as e:
        print(e)
        return False, 'Some error occurred. Form not submitted.'

def get_all_formdata(current_user):
    return MentalHealthResponse.objects.all()

def get_userdata(current_user):
    form = MentalHealthResponse.objects.filter(user=current_user).first()
    return current_user, form

def delete_user(user_id):
    try:
        user = User.objects.filter(id=user_id).first()
        if user:
            user.delete()
            print(f"User {user_id} deleted successfully.")
        else:
            print(f"User {user_id} not found.")
    except Exception as e:
        print(f"Error deleting user {user_id}: {e}")
