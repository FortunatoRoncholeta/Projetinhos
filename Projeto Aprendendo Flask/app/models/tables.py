import email
from app import db

class User(db.Model):
    __tablename__="users"

    id=db.column(db.Integer, primary_key=True)
    username = db.column(db.String, unique=True)
    password= db.column(db.String)
    name=db.column(db.String)
    email=db.email(db.String,unique=True)


    def __init__(self,username,password,name,email):
        self.username=username
        self.password=password
        self.name=name
        self.email=email
      
    def __rpr__(self):
        return "<User %r>" % self.username



class Post(db.Model):
    __tablename__ = "posts"

    id = db.column(db.Integer, primary_key=True)
    content=db.column(db.Text)
    id_user=db.Column(db.Integer,db.ForeignKey('users.id'))


    user=db.relationship('User',foreign_keys=user_id)


    def __init__(self,content,user_id):
        self.content=content
        self.user_id=user_id

    def __repr__(self):
        return "<Post %r>" % self.id

    class Follow(db.Model):
        __tablename__="follow"

        id=db.column(db.Integer,primary_key=True)
        user_id=db.column(db.Integer,db.ForeignKey('users.id'))
        follower_id=db.column(db.Integer,db.ForeignKey('users.id'))

        user=db.relationsship('User',foreign_keys=user_id)
        follower=db.relationship('User', foreign_keys=follower_id)