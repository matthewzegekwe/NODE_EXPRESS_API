# NODE_EXPRESS_API

# Express.js REST API

## Overview

This is a simple REST API built with Express.js, providing CRUD operations for managing a collection of items in an in-memory datastore.

## Features

* Retrieve all items
* Retrieve a single item by ID
* Create a new item
* Update an item by ID
* Delete an item by ID

## Prerequisites

* [Node.js](https://nodejs.org/) installed on your system.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Server**

   ```bash
   node server.js
   ```

   The server will start at `http://localhost:3000`.

4. **Test the API**
   Use a tool like [Postman](https://www.postman.com/) to send requests to the API.

## API Endpoints

### 1. `GET /`

**Description:** Root route returning a welcome message.

**Response:**

```json
"Hello, World!"
```

### 2. `GET /items`

**Description:** Retrieve all items.

**Response Example:**

```json
[
  {
    "id": 1,
    "name": "Sample Item",
    "description": "This is a sample item."
  }
]
```

### 3. `GET /items/:id`

**Description:** Retrieve a single item by ID.

**Response Example:**

```json
{
  "id": 1,
  "name": "Sample Item",
  "description": "This is a sample item."
}
```

**Error Response:**

* **404 Not Found**

  ```json
  { "error": "Item not found" }
  ```

### 4. `POST /items`

**Description:** Create a new item.

**Request Body:**

```json
{
  "name": "New Item",
  "description": "Description of the new item."
}
```

**Response Example:**

```json
{
  "id": 2,
  "name": "New Item",
  "description": "Description of the new item."
}
```

**Error Response:**

* **400 Bad Request**

  ```json
  { "error": "Name and description are required" }
  ```

### 5. `PUT /items/:id`

**Description:** Update an item by ID.

**Request Body:**

```json
{
  "name": "Updated Item",
  "description": "Updated description."
}
```

**Response Example:**

```json
{
  "id": 1,
  "name": "Updated Item",
  "description": "Updated description."
}
```

**Error Responses:**

* **400 Bad Request**

  ```json
  { "error": "Name and description are required" }
  ```
* **404 Not Found**

  ```json
  { "error": "Item not found" }
  ```

### 6. `DELETE /items/:id`

**Description:** Delete an item by ID.

**Response:**

* **204 No Content**

**Error Response:**

* **404 Not Found**

  ```json
  { "error": "Item not found" }
  ```

## Error Handling

* **400 Bad Request** for invalid data.
* **404 Not Found** for missing resources.
* **500 Internal Server Error** for unexpected issues.

## Example Usage with Postman

1. **GET /items:**

   * Method: `GET`
   * URL: `http://localhost:3000/items`

2. **POST /items:**

   * Method: `POST`
   * URL: `http://localhost:3000/items`
   * Body:

     ```json
     {
       "name": "Sample",
       "description": "This is a test item."
     }
     ```

3. **PUT /items/1:**

   * Method: `PUT`
   * URL: `http://localhost:3000/items/1`
   * Body:

     ```json
     {
       "name": "Updated Sample",
       "description": "This is an updated test item."
     }
     ```

4. **DELETE /items/1:**

   * Method: `DELETE`
   * URL: `http://localhost:3000/items/1`

---

## License

This project is licensed under the MIT License.
