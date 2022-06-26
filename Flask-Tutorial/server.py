from distutils.log import debug
from flask import Flask, render_template, request
app = Flask(__name__)


notes = []

@app.route('/', methods=['GET', 'POST'])
def hello():
    if request.method=="POST" :
        notes.append({'title' : request.form['todo_title'], 'desc' : request.form['desc']})
    return render_template("index.html", notes = notes)

@app.route('/products')
def products():
    return "<h1>This is product page</h1>"


if __name__=="__main__" :
    app.run(debug=True)