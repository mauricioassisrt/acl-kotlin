package br.com.acl.controller

import br.com.acl.controller.request.PostPapelRequest
import br.com.acl.controller.request.PutPapelRequest
import br.com.acl.controller.response.PageResponse
import br.com.acl.controller.response.PapelResponse
import br.com.acl.extension.toPageResponse
import br.com.acl.extension.toPapelModel
import br.com.acl.extension.toResponse
import br.com.acl.security.preauthorize.*
import br.com.acl.service.PapelService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.data.web.PageableDefault
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid


@RestController
@RequestMapping("/api/papeis/")
class PapelController() {
    @Autowired
    private lateinit var papelService: PapelService

    @PapelFindById
    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): PapelResponse = papelService.findById(id).toResponse()

    @PapelFindAll
    @GetMapping
    fun findAll(@PageableDefault(page = 0, size = 10) pageable: Pageable): PageResponse<PapelResponse> =
        papelService.findAll(pageable).map { it.toResponse() }.toPageResponse()

    @PapelPost
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@RequestBody @Valid papel: PostPapelRequest) = papelService.create(papel.toPapelModel())

    @PapelDelete
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: Long) = papelService.delete(id)

    @PapelPut
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun update(@PathVariable id: Long, @RequestBody @Valid papel: PutPapelRequest) =
        papelService.update(papel.toPapelModel(papelService.findById(id)))

}
