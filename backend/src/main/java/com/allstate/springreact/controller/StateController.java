package com.allstate.springreact.controller;

import com.allstate.springreact.domain.InitialState;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class StateController {
    private Counter counter;

    @Autowired
    public StateController(MeterRegistry registry) {
       /*
          This value is already exposed under the 'http_server_requests_seconds_count' metric,
          but I wanted to show how to wire up a counter if desired
        */
        counter = Counter.builder("initial-endpoint-call-count").register(registry);
    }

    @GetMapping("/state")
    public InitialState getInitialCountRequest() {
        counter.increment();
        InitialState state = new InitialState();
        state.setText("Spring-React is wired up!");
        state.setValue(7);
        return state;
    }
}