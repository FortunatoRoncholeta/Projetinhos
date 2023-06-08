

class Jogo:
    def __init__(self,nome,categoria,console,id=None):
        self._id=id
        self._nome=nome
        self._categoria=categoria
        self._console=console

class Usuario:
     def __init__(self,id,nome,senha):
         self._id=id
         self._nome=nome
         self._senha=senha