package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "user")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="customer_name")
    private String customerName;

    @Column(name="customer_type")
    private String customerType;

    // Getters
    public Long getId() {
        return this.id;
    }
    public String getCustomerName() {
        return this.customerName;
    }
    public String getCustomerType() {
        return this.customerType;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }
}
