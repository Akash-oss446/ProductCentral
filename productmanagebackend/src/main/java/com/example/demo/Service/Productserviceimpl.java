package com.example.demo.Service;


import java.util.List;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.ProductRepository;
import com.example.demo.product.Product;
@Service
public class Productserviceimpl implements  ProductService{
@Autowired
   private ProductRepository productRepo;
    @Override
    
    public Product saveProduct(Product p) {
        return productRepo.save(p);
    }

    @Override
    public List<Product> getallProducts() {
        return productRepo.findAll();
    }

    @Override
    @Cacheable(cacheNames="product",key="#id")
    public Product getProductById(Integer id) {
        System.out.println("get product");
        return productRepo.findById(id).get();
    }

    
   
    @Override
    @CacheEvict(cacheNames="product",key="#id")
    public String deleteProduct(Integer id) {
        System.out.println("deleted");
        Product p1=productRepo.findById(id).get();
        if(p1!=null)
        {
            productRepo.delete(p1);
            return "Product delete success";
        }
        return  "Something wrong";
    }

    @Override
    @CachePut(cacheNames="products",key="#product.id")
    public Product editProduct(Product p,Integer id) {
        Product oldp1=productRepo.findById(id).get();
        oldp1.setProductname(p.getProductname());
        oldp1.setDescription(p.getDescription());
        oldp1.setPrice(p.getPrice());
        oldp1.setStatus(p.getStatus());
        return productRepo.save(oldp1);
    }
}
