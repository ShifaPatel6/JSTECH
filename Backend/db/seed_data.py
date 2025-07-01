import sqlite3

conn = sqlite3.connect("db/products.db")
cursor = conn.cursor()

# Initialize schema
with open("db/schema.sql") as f:
    cursor.executescript(f.read())

# Insert sample data
products = [
    ("tshirt.jpg", "Red Shirt", 29.99, "/catalog_img/tshirt.jpg", "mens wear"),
    ("ring.jpg", "Blue Jeans", 59.99, "/catalog_img/ring.jpg", "jwellery"),
    ("led.jpeg", "LED", 89.99, "/catalog_img/led.jpeg", "electronics")
]

cursor.executemany("INSERT INTO products VALUES (?, ?, ?, ?, ?)", products)
conn.commit()
conn.close()
# Close the database connection