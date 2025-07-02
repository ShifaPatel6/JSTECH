import os
import sqlite3

db_path = os.path.abspath("db/products.db")
conn = sqlite3.connect(db_path)

cursor.execute("SELECT * FROM products WHERE id = 'kurti.jpg'")
row = cursor.fetchone()

if row:
    print("✅ Found:", row)
else:
    print("❌ NOT FOUND: kurti.jpg")

conn.close()
