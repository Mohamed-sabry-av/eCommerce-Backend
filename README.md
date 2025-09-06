# eCommerce-Backend

This is a Node.js backend for an eCommerce application. It provides RESTful APIs for managing users, products, product categories, and user roles. The project uses Express.js and MongoDB.

## Features
- User authentication with JWT
- CRUD operations for products and categories
- User roles management
- File upload support (multer)

## Project Structure
```
index.js
package.json
Auth/
  jwt.js
  passAuth.js
config/
  db.config.js
  multer.config.js
controllers/
  ProductCategoryController.js
  ProductController.js
  UserController.js
  UserRoleController.js
controlles/
  UserController.js
imgs/
  ... (image files)
models/
  ProdectModel.js
  ProductCategorModel.js
  UserModel.js
  UserRoleModel.js
router/
  ProductRouter.js
  ProudctCategoryRouter.js
  UserRoleRouter.js
  UserRouter.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Mohamed-sabry-av/eCommerce-Backend.git
   cd eCommerce-Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your MongoDB connection in `config/db.config.js`.

### Running the Server
```sh
node index.js
```

The server will start on the port specified in your configuration.

## API Endpoints
- `/api/products` - Product management
- `/api/categories` - Category management
- `/api/users` - User management
- `/api/roles` - User role management

## Authentication
- JWT-based authentication is implemented in `Auth/jwt.js` and `Auth/passAuth.js`.

## File Uploads
- File uploads are handled using multer. See `config/multer.config.js`.

## License
This project is licensed under the MIT License.
