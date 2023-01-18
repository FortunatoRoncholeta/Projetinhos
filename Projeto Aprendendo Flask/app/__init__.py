from flask import Flask
from flask-sqlalchemy import sqlalchemy


app = Flask(__name__)
# configuração de conecção de banco de dados
app.config['SQLALCHEMY_DATABADE_URI']='sqlite:///storage.db'
db= SQLAlchemy(app)

# modolo/pasta/arquivo
from app.controllers import default

    
