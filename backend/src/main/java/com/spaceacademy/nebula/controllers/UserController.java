package com.spaceacademy.nebula.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/nebula")
public class UserController {

    @GetMapping("/home")
    public String home() {
        return "Você trabalho no Google? Porque você tem tudo que eu procuro. - Gandhi, Mahatma";
    }
}
