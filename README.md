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

Desafio#1 Se implementa 
1. Habilitar los cors en el servidor utilizando el paquete de npm. (2 puntos)
2. Usar el paquete pg para conectarse e interactuar con la base de datos. (2 puntos)
3. Crear una ruta GET con Express para devolver los registros de una tabla alojada en
PostgreSQL. (3 puntos)
4. Crear una ruta POST con Express que reciba y almacene en PostgreSQL un nuevo
registro. (3 puntos)

Desafio #2 Se implementa (revisar index.js)
1. Agregar una ruta PUT en una API REST y utilizarla para modicar registros en una
tabla alojada en PostgreSQL (4 puntos)
2. Agregar una ruta DELETE en una API REST y utilizarla para eliminar registros en una
tabla alojada en PostgreSQL (4 puntos)
3. Capturar los posibles errores en una consulta SQL realizada con el paquete pg
usando la sentencia try catch (2 puntos)

