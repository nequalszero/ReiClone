# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app



## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Products

- `GET /api/products`
  - accepts category query params to filter results
- `GET /api/products/:id`

### ShoppingCart

- `GET /api/ShoppingCart/:id`
  - accepts customer_id param
- `PATCH /api/results/:id`
  - accepts items params to add/remove
