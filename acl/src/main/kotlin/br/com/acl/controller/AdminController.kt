package br.com.acl.controller

import io.swagger.v3.oas.annotations.Hidden
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("admin")
class AdminController {


    @GetMapping("/report")
    fun report(@RequestParam name: String?): String {
        return "This is report, Only admin can see it"
    }

    @Hidden
    @GetMapping("/repoasdasdasrt")
    fun teste(@RequestParam name: String?): String {
        return "This is report, Only admin can see it"
    }
}
