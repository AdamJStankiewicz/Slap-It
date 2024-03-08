from flask import *
from flask_socketio import SocketIO, emit
from fileinput import filename
import requests
import json
import os, os.path


app = Flask(__name__)
socketio = SocketIO(app)

app.config["UPLOAD_FOLDER"] = os.getcwd()+f'/static/posts'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app.postCount = 0
app.postImgs = []
app.postMsgs =[]

@app.route('/', methods=['GET'])
def main():

    #return render_template("index.html")
    path=os.getcwd()+f'/client/build'
    return send_from_directory(directory=path,path='index.html')

@app.route('/',methods=['POST'])
def recievePost():
    if request.method == 'POST':
        f = request.files['nudes']
        f.save(os.path.join(os.getcwd()+f'/static/',f.filename))

        app.postImgs.append('static/'+f.filename)
        app.postCount += 1
        app.postMsgs.append(request.files["msg"])

        print("Recieved file")
        path=os.getcwd()+f'/client/build'
        #return send_from_directory(directory=path,path='index.html')
    
    return "",204

@app.route('/static/<folder>/<file>')
def css(folder,file):
    path = folder+'/'+file
    directory= os.getcwd()+f'/{'client/build/static'}'
    return send_from_directory(directory=directory,path=path)

@app.route('/postDatas',methods=['GET'])
def postDatas():

    postDict = {"postCount" : app.postCount, "postImgs" : app.postImgs,"postMsgs":app.postMsgs}
    return postDict

socketio.run(app,host="0.0.0.0",port=1477, allow_unsafe_werkzeug=True, debug=True)