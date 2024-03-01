import axios from 'axios';
const API_URL="http://localhost:8080";
class ProductService
{
 saveProduct(product)
 {
    return axios.post(API_URL+ "/saveProduct",product);
 }
 getAllProduct()
 {
    return axios.get(API_URL +"/display")
 }
 getProductById(id)
 {
    return axios.get(API_URL +"/" +id);
 }
 deleteProduct(id)
 {
    return axios.get(API_URL+"/deleteProduct/"+id);
 }
 editProduct(product)
 {
    return axios.post(API_URL+"display/editProduct/"+product.id,product);
 }
}
export default new ProductService();