/////////////// MODELOS Y ENDPOINTS: ///////////////
////// La marca "✅" indica que fue testeado el Endpoint
////// ENTREGA  - test() 21/21     //En login hice 2 test()
////// OPCIONAL - test() 3/3 
o	Users ------------------------------------------
    □	Campos
        •	firstName
        •	lastName
        •	email
        •	password
        •	phone
    □	Endpoints
        •	GET /users (privado)🔐 ✅
        •	POST  /users (público) ✅
        •	DELETE  /users/:id (privado)🔐 ✅
        •	PUT   /users/:id (privado)🔐 ✅
        •	POST  /users/login (público) ✅✅
o	Category ---------------------------------------
    	Campos
        •	name
    	Endpoints
        •	GET /categories (público) ✅
        •	POST  /categories (privado)🔐 ✅
        •	DELETE /categories (privado)🔐 ✅
o	Product ----------------------------------------
    □	Campos
        •	title
        •	description
        •	categoryId
        •	price
    □	Endpoints
        •	GET /products (público) ✅✅ (GET y GET con filtro)
        •	POST  /products (privado)🔐 ✅
        •	GET /products/:id (público)	✅
        •	DELETE /products/:id (privado)🔐 ✅
        •	PUT /products/:id (privado)🔐 ✅
        •	POST  /products/:id/images (privado)🔐 ✅
o	ProductImg	------------------------------------
    □	Campos
        •	url
        •	filename
        •	productId
    □	Endpoints
        •	GET /product_images (privado)🔐 ✅
        •	POST /product_images (privado)🔐 ✅
        •	DELETE /product_images (privado)🔐 ✅
o	Cart ------------------------------------------
    □	Campos
        •	userId
        •	productId
        •	quantity
    □	Endpoints
        •	GET /cart (privado)🔐 – Debe traer los productos en el carrito del usuario logueado. ✅
        •	POST /cart (privado)🔐 – Debe añadir los productos deseados por el usuario logueado en el carrito. ✅
        •	DELETE /cart (privado)🔐 – Debe eliminar los productos del usuario logueado en el carrito. ✅
        •	PUT /cart (privado)🔐 – Debe poder actualizar quantity, es decir la cantidad de productos. ✅
o	Purchase ---------------------------------------
    □	Campos
        •	userId
        •	productId
        •	quantity
    □	Endpoints
        •	GET /purchase (privado)🔐 – Debe traer las compras del usuario logueado. ✅
        •	POST /purchase (privado)🔐 – Debe tomar los productos del carrito del usuario logueado, pasarlos por la tabla Purchase y eliminarlos de Cart. ✅
