package br.com.acl.controller

import br.com.acl.controller.response.PageResponse
import br.com.acl.controller.response.PapelResponse
import br.com.acl.extension.toPageResponse
import br.com.acl.extension.toResponse
import br.com.acl.service.PapelService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.data.web.PageableDefault
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/papeis/")
class PapelController (){
    @Autowired
    private lateinit var papelService: PapelService
    @GetMapping
    fun findAll(@PageableDefault(page= 0, size = 10)  pageable: Pageable): PageResponse<PapelResponse> {
        return papelService.findAll(pageable).map{it.toResponse()}.toPageResponse()
    }
}
