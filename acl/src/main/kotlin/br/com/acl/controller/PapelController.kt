package br.com.acl.controller

import br.com.acl.controller.response.PageResponse
import br.com.acl.controller.response.PapelResponse
import br.com.acl.extension.toPageResponse
import br.com.acl.extension.toResponse
import br.com.acl.service.PapelService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.web.PageableDefault
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.awt.print.Pageable

@RestController
@RequestMapping("/api/papeis/")
class PapelController (){
    @Autowired
    private lateinit var papelService: PapelService
    @GetMapping
    fun findAll(): List<PapelResponse> {
        return papelService.findAll().map{it.toResponse()}
    }
}
