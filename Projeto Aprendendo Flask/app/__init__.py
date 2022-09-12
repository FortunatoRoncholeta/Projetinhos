from flask import Flask
from flask-sqlalchemy import sqlalchemy


app = Flask(__name__)
db= SQLAlchemy(app)

# modolo/pasta/arquivo
from app.controllers import default

    
