const request = require("supertest")
const app = require("../app");
require("../models/index")                      //! Importante
const Category = require("../models/Category");

const BASE_URL_USERS = '/api/v1/users/login'
const BASE_URL_PRODUCTS = '/api/v1/products'
let TOKEN;
let category;   //! Esto NO lo destruire inmediatamente en el 1er POST
let productId;

beforeAll(async () => {
    const user = {
        email: "rey@gmail.com",
        password: "rey150"
    }

    const res = await request(app)
        .post(BASE_URL_USERS)
        .send(user)

    TOKEN = res.body.token
})

test("POST -> 'BASE_URL_PRODUCTS', should return status code 201 & res.body.title === product.title", async () => {
    const categoryBody = {
        name: "Tech"
    }                                               //! No lo destruire en el mismo Scope
    category = await Category.create(categoryBody)  //! Estudiar esto zzzzzzzz

    const product = {
        title: "xiaomi 12",
        description: "lorepDescript",
        price: 50.50,
        categoryId: category.id
    }

    const res = await request(app)
        .post(BASE_URL_PRODUCTS)
        .send(product)
        .set("Authorization", `Bearer ${TOKEN}`)

    productId = res.body.id     //!

    expect(res.status).toBe(201)                //! Es por el .controller
    expect(res.body.title).toBe(product.title)
})

test("GET -> 'BASE_URL_PRODUCTS', should return status code 200 & res.body.length === 1", async () => {
    const res = await request(app)
        .get(BASE_URL_PRODUCTS)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0]).toBeDefined()       //! ESTUDIAR ESTO
})

test("GET ONE -> 'BASE_URL_PRODUCTS/:id', should return status code 200 & res.body.length === 1", async () => {
    const res = await request(app)
        .get(`${BASE_URL_PRODUCTS}/${productId}`)

    expect(res.status).toBe(200)
    expect(res.body.title).toBe("xiaomi 12")    // Esto es copy/paste de lo que puse en POST
})

test("PUT -> 'BASE_URL_PRODUCTS/:id', should return status code 200 & res.body.length === 1", async () => {
    const product = {
        title: "iphone 12"
    }

    const res = await request(app)
        .put(`${BASE_URL_PRODUCTS}/${productId}`)
        .send(product)
        .set("Authorization", `Bearer ${TOKEN}`)
    //console.log(res.body)

    expect(res.status).toBe(200)
    expect(res.body.title).toBe(product.title)
})

test("DELETE -> 'BASE_URL_PRODUCTS/:id', should return status code 204", async () => {
    const res = await request(app)
        .delete(`${BASE_URL_PRODUCTS}/${productId}`)
        .set("Authorization", `Bearer ${TOKEN}`)

    expect(res.status).toBe(204)

    await category.destroy()    //! Porfin lo destrui   ESTUDARILO
})
