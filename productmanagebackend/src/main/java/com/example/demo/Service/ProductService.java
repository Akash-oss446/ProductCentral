package com.example.demo.Service;

import com.example.demo.product.Product;

import java.util.List;

public interface ProductService {
    public Product saveProduct (Product p);
    public List<Product> getallProducts();
    public Product getProductById(Integer id);
    public String deleteProduct(Integer id);
    public Product editProduct(Product p,Integer id);


}
