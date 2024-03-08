# Entrega de Optimización y Custom Error

Este proyecto se centra en demostrar la implementación de técnicas de optimización y personalización de errores en una aplicación web. 
Utilizando GZIP para la compresión y mejorando la experiencia del usuario a través de errores personalizados, esta aplicación ofrece un entorno de prueba para estas estrategias. 
Una característica notable es la capacidad de generar 100 productos aleatorios usando la librería faker.js, además de permitir la creación de productos con validación de datos de entrada.

## Descripción

El propósito de este proyecto es explorar y demostrar cómo la optimización mediante compresión y la personalización de los mensajes de error pueden mejorar la eficiencia y la usabilidad de una aplicación web. 
La aplicación permite a los usuarios interactuar con un endpoint específico para crear productos propios "/api/products/" y un enpoint que traera 100 productos creados utilizando datos ficticios generados por faker.js. 

### Características

- **Optimización con GZIP:** Mejora la velocidad de respuesta de la aplicación mediante la compresión de los datos enviados y recibidos.
- **Custom Error:** Mejora la experiencia del usuario mediante la provisión de mensajes de error claros y útiles cuando la entrada no cumple con los requisitos esperados.
- **Generación de Datos Ficticios:** Utiliza faker.js para crear 100 productos aleatorios, facilitando la prueba y demostración de la funcionalidad sin necesidad de entrada manual.

## Comenzando

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local para desarrollo y pruebas.

### Instalación

1. Inicia la aplicación con `npm run start`, lo que también habilitará la compresión GZIP.

## Uso

Una vez que la aplicación está en ejecución, puedes interactuar con ella de la siguiente manera:

- **Generar 100 Productos Aleatorios:** Accede al endpoint `api/productos/mockingproducts` para generar automáticamente productos con datos proporcionados por faker.js.
- **Crear un Producto Manualmente:** Intenta crear un producto enviando un `POST` request con `title`, `description`, y `price` al endpoint de creación de productos "api/products". Si omites alguno de estos campos, la aplicación demostrará su capacidad de manejo de errores personalizados, devolviendo un mensaje específ
