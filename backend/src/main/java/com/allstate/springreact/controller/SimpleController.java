package com.allstate.springreact.controller;

import com.allstate.springreact.domain.InitialState;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class SimpleController {
    @GetMapping("/testInitialState")
    public InitialState getInitialCountRequest() {
        InitialState state = new InitialState();
        state.setText("Spring-React is wired up!");
        state.setValue(7);
        return state;
    }
}