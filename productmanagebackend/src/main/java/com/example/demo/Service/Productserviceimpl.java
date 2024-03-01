package com.example.demo.Service;


import com.example.demo.Repository.ProductRepository;
import com.example.demo.product.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public Product getProductById(Integer id) {
        return productRepo.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {
        Product p1=productRepo.findById(id).get();
        if(p1!=null)
        {
            productRepo.delete(p1);
            return "Product delete success";
        }
        return  "Something wrong";
    }

    @Override
    public Product editProduct(Product p,Integer id) {
        Product oldp1=productRepo.findById(id).get();
        oldp1.setProductname(p.getProductname());
        oldp1.setDescription(p.getDescription());
        oldp1.setPrice(p.getPrice());
        oldp1.setStatus(p.getStatus());
        return productRepo.save(oldp1);
    }
}
