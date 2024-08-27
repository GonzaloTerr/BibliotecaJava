package com.example.bibliotecaApi.controller;

import com.example.bibliotecaApi.entities.Autor;
import com.example.bibliotecaApi.service.AutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/autores")
public class AutorController {
    @Autowired
    private AutorService autorService;

    @GetMapping
    public List<Autor> getAllAutores() {
        return autorService.findAll();
    }

}
