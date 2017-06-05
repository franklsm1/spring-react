package com.allstate.springreact.controller;

import com.allstate.springreact.domain.InitialState;
import com.google.common.collect.ImmutableMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
class SimpleController {

    @GetMapping("/test")
    public Map<String, String> getTestRequest() {
        return ImmutableMap.of("text", "Spring-React is wired up!");
    }

    @GetMapping("/testInitialState")
    public InitialState getInitialCountRequest() {
        InitialState state = new InitialState();
        state.setText("Spring-React is wired up!");
        state.setValue(7);
        return state;
    }
}