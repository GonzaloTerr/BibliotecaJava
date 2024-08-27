package com.example.bibliotecaApi.repository;

import com.example.bibliotecaApi.entities.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Long> {
    @Query("SELECT l FROM Libro l WHERE l.categoria = :categoria")
    List<Libro> findByCategoria(String categoria);
}
