package com.example.bibliotecaApi;

import com.example.bibliotecaApi.entities.Autor;
import com.example.bibliotecaApi.entities.Libro;
import com.example.bibliotecaApi.repository.LibroRepository;
import com.example.bibliotecaApi.service.LibroService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@RunWith(MockitoJUnitRunner.class)
public class LibroServiceTest {

    @InjectMocks
    private LibroService libroService;

    @Mock
    private LibroRepository libroRepository;

    @Test
    public void testFindAll() {
        Autor autor1 = new Autor(1L, "Autor1", "Pais1");
        Autor autor2 = new Autor(2L, "Autor2", "Pais2");

        List<Libro> libros = new ArrayList<>();
        libros.add(new Libro(1L, "Título1", "Categoría1", true, autor1));
        libros.add(new Libro(2L, "Título2", "Categoría2", false, autor2));

        when(libroRepository.findAll()).thenReturn(libros);

        List<Libro> resultado = libroService.findAll();

        assertEquals(2, resultado.size());
        verify(libroRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        // Arrange
        Autor autor1 = new Autor(1L, "Autor1", "Pais1");
        Libro libro = new Libro(1L, "Título1", "Categoría1", true, autor1);
        when(libroRepository.findById(1L)).thenReturn(Optional.of(libro));

        // Act
        Optional<Libro> resultado = libroService.findById(1L);

        // Assert
        assertEquals(libro, resultado.get());
        verify(libroRepository, times(1)).findById(1L);
    }

}
