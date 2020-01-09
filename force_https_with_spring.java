package com.redfirehose.wss.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class MvcConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {

    // Useful when your program is running on an untrusted network and there is no other mechanism handling HTTP to HTTPS redirects.
    // This example assumes your project has a valid SSL certificate and is properly configured to use it.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.portMapper().http(80).mapsTo(443);
        http.requiresChannel().anyRequest().requiresSecure();
    }
}