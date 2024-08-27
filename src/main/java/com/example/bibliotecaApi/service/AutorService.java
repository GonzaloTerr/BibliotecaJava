package com.example.bibliotecaApi.service;

import com.example.bibliotecaApi.entities.Autor;
import com.example.bibliotecaApi.repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorService {

    @Autowired
    private AutorRepository autorRepository;


    public List<Autor> findAll() {
        return autorRepository.findAll();
    }
}
