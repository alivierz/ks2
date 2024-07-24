## Como generar la DB

La base de datos se generara directamente en DBeaver creando una nueva conexion y alli una db nueva con el nombre \_management

## Generar la tabla

el query usado en DBeaver para generar la tabla es el siguiente

CREATE TABLE users (
id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
name varchar,
email varchar UNIQUE,
createdAt timestamp,
updatedAt timestamp
);

## variables necesarias

y las variables de entorno son las siguientes

DB_NAME = \_management
DB_USER = postgres
DB_PASS = claveDeUsuario
PORT =adicional si se quiere usar un puerto especifico
