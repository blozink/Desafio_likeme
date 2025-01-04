# Desafio_likeme
 Se realiza el primer desafio de like me
 ejecturar en el terminal en postgres el database
 
 CREATE DATABASE likeme;
\c likeme;
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);

