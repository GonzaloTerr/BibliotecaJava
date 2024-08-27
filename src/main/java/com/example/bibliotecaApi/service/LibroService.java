package com.example.bibliotecaApi.service;

import com.example.bibliotecaApi.entities.Libro;
import com.example.bibliotecaApi.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LibroService {
    @Autowired
    private LibroRepository libroRepository;

    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

    public Optional<Libro> findById(Long id) {
        return libroRepository.findById(id);
    }

    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }

    public void deleteById(Long id) {
        libroRepository.deleteById(id);
    }

    public List<Libro> findByAutorId(Long idAutor) {
        return findAll().stream()
                .filter(libro -> libro.getAutor().getId().equals(idAutor))
                .collect(Collectors.toList());
    }

    public List<String> findDistinctCategorias() {
        return libroRepository.findAll()
                .stream()
                .map(Libro::getCategoria)
                .distinct()
                .toList();
    }


    public List<Libro> findByCategoria(String categoria) {
        return libroRepository.findByCategoria(categoria);
    }
}
