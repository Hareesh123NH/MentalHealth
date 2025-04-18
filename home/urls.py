from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    # path('signup/', views.signup, name='signup'),
    # path('login/', views.login_view, name='login'),
    # path('logout/', views.logout_view, name='logout'),cx
    # path('users/', views.users_view, name='users'),
    # path('assessmentform/<int:userId>/', views.assessmentform, name='assessmentform'),
    # path('formdata/', views.getformdata, name='formdata'),
    # path('profile/', views.profile, name='profile'),
    path('features/', views.features, name='features'),
    path('about/', views.about, name='about'),
    path('analysis/', views.analysis, name='analysis'),
    path('game/', views.game, name='game'),
    path('slider/', views.slider, name='slider'),
    path('meditation/', views.meditation, name='meditation'),
    path('articles/', views.articles, name='articles'),
]