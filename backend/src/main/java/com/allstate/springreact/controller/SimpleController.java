package com.allstate.springreact.controller;

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
}