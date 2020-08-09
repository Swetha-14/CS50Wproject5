
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("user/<str:username>", views.user_page, name="user"),
    path("following", views.following, name="following"),
    
    # API routes
    path("new", views.new_post, name="new"),
    path("follow/<str:username>", views.follow_user, name="follow"),
    path("edit", views.edit_post, name="edit"),
    path("like", views.like_post, name="like")
]
