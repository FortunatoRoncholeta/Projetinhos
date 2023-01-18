from flask import Flask, render_template, request, session, redirect,flash
from dao import JogoDao, UsuarioDao
from flask_mysqldb import MySQL
from models import Jogo,Usuario
#render_template permite carregar um arquivo
#requeste recurso pra pegar dados do formulario
#redirect redireciona para a rota

app = Flask(__name__)
app.secret_key='lp2'

app.config['MYSQL_HOST'] = '127.0.0.1' 
app.config['MYSQL_USER'] = 'root' 
app.config['MYSQL_PASSWORD'] = 'ifsuldeminas'
app.config['MYSQL_DB'] = 'jogoteca' 
app.config['MYSQL_PORT'] = 3306

db = MySQL(app)
jogo_dao=JogoDao(db)
usuario_dao=UsuarioDao(db)	


@app.route('/')
def index():
    lista= jogo_dao.listar()
    return render_template('lista.html', titulo="Lista de jogos", jogos=lista)

@app.route('/novo')
def novo():
    if 'usuario_logado' not in session or session['usuario_logado']==None:
        return redirect('/login?proxima=novo')
    return render_template('novo.html',titulo="cadastrando jogo")

@app.route('/criar', methods=['POST',])
def criar():
    nome = request.form['nome']
    categoria = request.form['categoria']
    console = request.form['console']
    jogo = Jogo(nome,categoria,console)

    jogo_dao.salvar(jogo)
    return redirect('/')
    
@app.route('/login')
def login():
    proxima=request.args.get('proxima')
    if proxima ==None:
        proxima=''
    return render_template('login.html',proxima=proxima)


@app.route('/autenticar', methods=['POST',])
def autenticar():
    usuario = usuario_dao.busca_por_id(request.form['usuario'])
    if usuario:
        if usuario._senha == request.form['senha']: 
            session['usuario_logado']=request.form['usuario']
            flash(request.form['usuario']+ ' logou com sucesso!')   
            proxima_pagina=request.form['proxima']
            if proxima_pagina == '':
                return redirect('/')
            else:
                return redirect('/{}'.format(proxima_pagina))
    
    flash('Nao logado')
    return redirect('/login')

@app.route('/logout')
def logout():
     session['usuario_logado']= None
     flash('nada logado')
     return render_template('login.html')
if __name__ == '__main__':
    app.run(debug=True)

