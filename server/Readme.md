# 📦 Inventory Management System - Product CRUD API

This is a RESTful API built using **Node.js**, **Express.js**, and **MongoDB** (with **Mongoose**) to manage a list of products in an inventory system.

---

## 📌 Features

- ✅ Create, read, update, and delete products
- 🔐 Enforces unique `productCode`
- 📊 Validates non-negative values for `quantity`, `buyPrice`, and `sellPrice`
- ⚠️ Comprehensive error handling

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose ODM
- dotenv (for environment variables)
- nodemon (for auto-reload during development)

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Snehaaa-Kri/InventoryManagement.git
cd InventoryManagement/server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root

```env
CORS_ORIGIN=http://localhost:5000
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
```

> Replace `<username>`, `<password>`, and `<cluster>` with your MongoDB credentials.

### 4. Create `src/constants/index.js` and define:

```js
export const DB_NAME = "InventoryManagement";
```

### 5. Start the development server

```bash
npm run dev
```

Server will run on: `http://localhost:5000`

---

## Product Schema

```js
{
  productCode: String, // unique
  batchCode: String,
  productName: String,
  quantity: Number,     // non-negative
  buyPrice: Number,     // non-negative
  sellPrice: Number     // non-negative
}
```

---

## API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| POST   | `/products`     | Add a new product        |
| GET    | `/products`     | List all products        |
| GET    | `/products/:id` | Get a product by ID      |
| PUT    | `/products/:id` | Update a product         |
| DELETE | `/products/:id` | Delete a product         |

---

## Validations

- `productCode` must be **unique**
- `quantity`, `buyPrice`, and `sellPrice` must be **non-negative numbers**

---

## Sample API Usage (Postman / curl)

### Add Product
**POST** `/products`
![Create product](/server/public/assets/apiResponses/create.jpg)

### Update Product
**PUT** `/products/<id>`
![Update product](/server/public/assets/apiResponses/update.jpg)

### Delete Product
**DELETE** `/products/<id>`
![Delete product](/server/public/assets/apiResponses/delete.jpg)

### Get Product by ID
**GET** `/products/<id>`
![Get product by identifier](/server/public/assets/apiResponses/getById.jpg)

### Get All Products
**GET** `/products`
![Get all products](/server/public/assets/apiResponses/getAll.jpg)

---

## ⚠️ Error Handling

- Duplicate product code → `409 Conflict`
- Product not found → `404 Not Found`
- Invalid input values → `400 Bad Request`

---

## 👩‍💻 Author

**Sneha Kumari**  
_Backend Developer Assessment — Craftique Studios_