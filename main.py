from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URL'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class Post(db.Model):
    pass

@app.route("/")
@app.route("/index.html")
@app.route("/mainpg")
def index():
    return render_template("index.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
