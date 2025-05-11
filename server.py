from flask import Flask, jsonify, render_template 
import sqlite3 
import pandas as pd 
from sqlalchemy import create_engine 

def create_connection(db_file):
    """Create a database connection to a SQLite database."""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except sqlite3.Error as e:
        print(e)
    return conn

# Read CSV and create DataFrame
df = pd.read_csv("Company_sales.csv")
connection = create_connection("demo.db")
df.to_sql('Company_sales',connection,if_exists='replace')
connection.close()

db_url='sqlite:///demo.db'

###
engine=create_engine(db_url,echo=True)


app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_payment')
def get_payment():

    query = 'SELECT Payment, COUNT(*) AS Count FROM Company_sales GROUP BY Payment'
    payment_data = pd.read_sql(query, engine)

    classes  = payment_data["Payment"]
    value =payment_data["Count"]   
      
    
    chdata=[]
    
    
   
    for i in range(len(classes)):
       chdata.append({"class":classes[i], "value":int(value[i])})  
    
    return jsonify(chdata)
  

@app.route('/get_control')
def get_control():

    query = 'SELECT Total,Date FROM Company_sales'
    payment_data = pd.read_sql(query, engine)
    
    classes  = payment_data["Date"]
    value =payment_data["Total"]   
      
    contdata = []
   
    for i in range(len(classes)):
      contdata.append({"date":classes[i], "value":int (value[i])})
    
    return jsonify(contdata)

@app.route('/get_datachart')
def get_datachart():


    query = 'SELECT Branch, sum(grossincome) as sum FROM Company_sales GROUP BY Branch'
    payment_data = pd.read_sql(query, engine)
    
    classes  = payment_data["Branch"]
    values =payment_data["sum"]   
       
   
    piedata = []
   
    for i in range(len(classes)):
      piedata.append({"classes":classes[i], "values":int (values[i])})
    
    return jsonify(piedata)
  
@app.route('/get_partchart')
def get_partchart():


    query = 'SELECT Productline, COUNT(*) AS Quantity FROM  Company_sales GROUP BY ProductLine'
    payment_data = pd.read_sql(query, engine)

    value = payment_data["Quantity"]
    
    yclass =payment_data["Productline"]   
       
   
    bardata = []
   
    for i in range(len(yclass)):
      bardata.append({"yclass":yclass[i], "value":int(value[i])})
    
    return jsonify(bardata)
  
@app.route('/get_data')
def get_data():


    query = 'SELECT City, Productline, COUNT(*) AS Quantity FROM  Company_sales GROUP BY City , Productline' 
    payment_data = pd.read_sql(query, engine)

    value = payment_data["Quantity"]
    
    yclass  = payment_data["City"]
       
   
    chartdata = []
   
    for i in range(len(yclass)):
      chartdata.append({"yclass":yclass[i], "value":int(value[i])})
    
    return jsonify(chartdata)
  


if __name__ == '__main__':
    app.run(debug=True)
