from models import Jogo,Usuario

SQL_DELETE_JOGO='delete from jogo where id= %s'
SQL_CRIA_JOGO = 'INSERT into jogo (nome,categoria,console) values(%s,%s,%s)'
SQL_ATUALIZA_JOGO = 'UPDATE jogo SET nome=%s,categoria=%s,console=%s where id=%s'
SQL_BUSCA_JOGO_ID = 'SELECT id,nome,categoria,console from jogo' 
SQL_BUSCA_USUARIO_POR_ID = 'SELECT id,nome,senha from usuario where id=%s'	
class JogoDao:
    def __init__(self,db):
        self.__db=db

    def salvar(self,jogo):
        cursor = self.__db.connection.cursor()

        if(jogo._id):
            cursor.execute(SQL_ATUALIZA_JOGO,(jogo._nome,jogo._categoria,jogo._console,jogo._id))
        else:
            cursor.execute(SQL_CRIA_JOGO,(jogo._nome,jogo._categoria,jogo._console))
            cursor._id= cursor.lastrowid

        self.__db.connection.commit()
        return jogo


    def listar(self):
        cursor = self.__db.connection.cursor()
        cursor.execute(SQL_BUSCA_JOGO_ID)
        jogos = traduz_jogos(cursor.fetchall())
        return jogos


def traduz_jogos(jogos):
    def cria_jogo_com_tupla(tupla):
        return Jogo(tupla[1], tupla[2], tupla[3], id=tupla[0])
    return list(map(cria_jogo_com_tupla,jogos))

def traduz_usuario(tupla):
    return Usuario(tupla[0], tupla[1], tupla[2])

class UsuarioDao:
    def __init__(self,db):
        self.__db=db

    def busca_por_id(self,id):
        cursor = self.__db.connection.cursor()
        cursor.execute(SQL_BUSCA_USUARIO_POR_ID, (id,))	
        dados = cursor.fetchone()
        usuario = traduz_usuario(dados) if dados else None
        return usuario
       