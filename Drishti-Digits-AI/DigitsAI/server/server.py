from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def hello_world():
    return request.get_json()

if __name__=="__main__" :
    app.run(debug=True)