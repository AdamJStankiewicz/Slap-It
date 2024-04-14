from flask import *
from flask_socketio import SocketIO, emit
from fileinput import filename
import requests
import json
import os, os.path


app = Flask(__name__)
socketio = SocketIO(app)

app.config["UPLOAD_FOLDER"] = os.getcwd()+f'/static/posts'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

app.postCount = 0
app.posts = []

app.postImgs = []
app.postMsgs = []
app.ratios = []

@app.route('/', methods=['GET'])
def main():
    path=os.getcwd()+f'/client/build'
    return send_from_directory(directory=path,path='index.html')

@app.route('/main', methods=['GET','POST'])
def board():
    if request.method == 'POST':
        print(app.posts)
        if request.form['vote'] == "up":
            id = int(request.form['id'])
            app.ratios[id] += 1
            print("Upvote, new L/D: ", app.ratios[id])
        if request.form['vote'] == "down":
            id = int(request.form['id'])
            app.ratios[id] -= 1
            print("Downvote, new L/D: ", app.ratios[id])

    path=os.getcwd()+f'/client/build'
    return send_from_directory(directory=path,path='index.html')

@app.route('/',methods=['GET','POST'])
def recievePost():
    if request.method == 'POST':
        print("Data recieved")
        f = request.files['nudes']
        f.save(os.path.join(os.getcwd()+f'/static/',f.filename))

        app.postCount += 1
        app.postImgs.append('static/'+f.filename)
        app.postMsgs.append(request.form["msg"])
        app.ratios.append(0)

        print("Recieved file")
        path=os.getcwd()+f'/client/build'
        
    
    return redirect("/main",code=302)

@app.route('/static/<folder>/<file>')
def css(folder,file):
    path = folder+'/'+file
    directory= os.getcwd()+f'/{'client/build/static'}'
    return send_from_directory(directory=directory,path=path)

@app.route('/postDatas',methods=['GET'])
def postDatas():
    postDict = {"postCount" : app.postCount, "postImgs" : app.postImgs,"postMsgs":app.postMsgs,"postRatios" : app.ratios}
    return postDict

socketio.run(app,host="0.0.0.0",port=1477, allow_unsafe_werkzeug=True, debug=True)