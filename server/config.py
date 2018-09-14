import os
#basedir = os.path.abspath(os.path.dirname(__file__))

MYSQL_DATABASE_USER = 'react_user'
MYSQL_DATABASE_PASSWORD = 'mypassword'
MYSQL_DATABASE_DB = 'showrooms'
MYSQL_DATABASE_HOST = 'localhost'



FB_KEY = "240977626602542|jKZ-43wguhzjCOAzQr47ejnsHWw"
GOOGLE_KEY = 'AIzaSyCllQLgmbRKIeD9XMYflsBqEzPLwKzcVnQ'


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = 'this-really-needs-to-be-changed'


class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
