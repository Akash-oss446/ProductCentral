package com.example.demo.Controller;

import com.example.demo.Service.ProductService;
import com.example.demo.product.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RestController
public class ProductController {
    @Autowired
    private ProductService productService;
    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Product p)
    {
      return  new ResponseEntity<>(productService.saveProduct(p), HttpStatus.CREATED);
    }
    @GetMapping("/display")
    public  ResponseEntity<?> getAllProduct()
    {
        return new ResponseEntity<>(productService.getallProducts(),HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public  ResponseEntity<?> getProductById(@PathVariable Integer id)
    {
        return  new ResponseEntity<>(productService.getProductById(id),HttpStatus.OK);
    }
    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id)
    {
       productService.deleteProduct(id);
       return  new ResponseEntity<>(productService.deleteProduct(id),HttpStatus.OK);
    }
    @PostMapping("/display/editProduct/{id}")
    public  ResponseEntity<?> edit(@RequestBody Product p)
    {
        return  new ResponseEntity<>(productService.saveProduct(p),HttpStatus.CREATED);
    }

}
