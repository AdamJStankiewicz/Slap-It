from flask import *
from flask_socketio import SocketIO, emit
from fileinput import filename
import requests
import json

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/', methods=['GET','POST'])
def main():
    uploadedFile = False
    if request.method == 'POST':
        #if request.form['words']:
           # print("Recieved data: ", request.form)
           # return redirect(url_for('front'))
        f = request.files['nudes']
        f.save(f.filename)
        print("Recieved file")
        uploadedFile = True

    return render_template("index.html", fileUploaded = uploadedFile)


socketio.run(app,host="0.0.0.0",port=1477, allow_unsafe_werkzeug=True, debug=True)