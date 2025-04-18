from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
# from .controllers import (
#     register_user, login_user, get_all_users, 
#     token_required, submitassessment, get_all_formdata, 
#     get_userdata, delete_user
# )

# @require_http_methods(["GET"])
def home(request):
    return render(request, 'index.html')

# @require_http_methods(["GET", "POST"])
# def signup(request):
#     if request.method == 'POST':
#         success, message, userId = register_user(request.POST)
#         if success:
#             messages.success(request, message)
#             return redirect('assessmentform', userId=userId)
#         else:
#             messages.error(request, message)
#     return render(request, 'signup_signin.html')

# @require_http_methods(["GET", "POST"])
# def login_view(request):
#     if request.method == 'POST':
#         success, result = login_user(request.POST, request.settings.SECRET_KEY)
#         if success:
#             messages.success(request, 'Logged in successfully!')
#             return redirect('home')
#         else:
#             messages.error(request, result)
#     return render(request, 'signup_signin.html')

# @token_required
# def logout_view(request, current_user):
#     request.session['token'] = ''
#     return redirect('home')

# @token_required
# def users_view(request, current_user):
#     users = get_all_users(current_user)
#     return render(request, 'users.html', {'user': users})

# @require_http_methods(["GET", "POST"])
# def assessmentform(request, userId):
#     if request.method == 'POST':
#         success, message = submitassessment(request.POST, userId)
#         if success:
#             messages.success(request, message)
#             return render(request, 'signup_signin.html')
#         else:
#             delete_user(userId)
#             messages.error(request, message)
#             return redirect('assessmentform', userId=userId)
#     return render(request, 'Form.html', {'userId': userId})

# @token_required
# def getformdata(request, current_user):
#     formdata = get_all_formdata(current_user)
#     return render(request, 'users.html', {'user': formdata})

# @token_required
# def profile(request, current_user):
#     user, form = get_userdata(current_user)
#     return render(request, 'home.html', {'user': user, 'userpersonal': form})

def features(request):
    return render(request, 'features.html')

def about(request):
    return render(request, 'about_us.html')

def analysis(request):
    return render(request, 'mood_analysis.html')

def game(request):
    return render(request, 'game.html')

def slider(request):
    return render(request, 'slider.html')

def meditation(request):
    return render(request, 'meditation_page.html')

def articles(request):
    return render(request, 'article.html')