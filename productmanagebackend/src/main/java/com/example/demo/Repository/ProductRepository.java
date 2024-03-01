package com.example.demo.Repository;

import com.example.demo.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository  extends JpaRepository <Product,Integer> {
}
