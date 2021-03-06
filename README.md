# @analyticsrequired/trainer

## Scripts

- `build`: Builds to `dist/index.js`
- `start`: Start server without building
- `start:cold`: Start build then start server
- `start:dev`: Runs `start:cold` on code changes
- `test`: Runs all tests
- `preview`: Shows the files that will be bundled with `publish`
- `knex`: The knex cli
- `knex:latest`: Run migrations to latest
- `knex:reset`: Delete database and rerun migrations to latest

## Endpoints

### /train

#### GET

Get all training events. Pass `document`, `classification` and/or `belongs` as query string parameters to filter results.

#### POST

Create training event.

##### Body Example

```json
{
  "document": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "classification": "spam",
  "belongs": false
}
```
