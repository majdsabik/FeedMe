import axios from "axios";

const BASE_URL = "http://localhost:5555";

/* export function getCartData(cart) {
  return axios
    .post("/api/cart", { cart })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
} */

<<<<<<< HEAD
export function getProducts() {
  return axios.get("/api/menu").then((response) => {
=======
export function getCartData(cart) {
  return axios
    .post('/api/cart', { cart })
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
}

export function getProducts() {
  return axios.get('/api/menu').then(response => {
>>>>>>> ba489b3c780d3053e2d16c3268c57c72561600dc
    console.log(response.data);
    return response.data;
  });
}

<<<<<<< HEAD
export function getSubOrders() {
  return axios.get("/api/suborders").then((response) => {
=======
// export function placeOrder(cart){
//     return axios
//     .post('/api/order',{cart})
//     .then(response => {
//         response.data;

export function getSubOrders(restaurantPrefix) {
  return axios.post('/api/suborders', { restaurantPrefix }).then(response => {
>>>>>>> ba489b3c780d3053e2d16c3268c57c72561600dc
    return response.data;
  });
}

export function placeOrder(order) {
  return axios
    .post("/api/cart/order", { order })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
