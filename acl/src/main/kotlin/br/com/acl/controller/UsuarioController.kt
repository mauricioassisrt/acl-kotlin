package br.com.acl.controller

import br.com.acl.controller.request.PostUsuarioRequest
import br.com.acl.controller.request.PutUsuarioRequest
import br.com.acl.controller.response.PageResponse
import br.com.acl.controller.response.UsuarioResponse
import br.com.acl.extension.toPageResponse
import br.com.acl.extension.toUsuarioModel
import br.com.acl.extension.toResponse
import br.com.acl.security.UserCanOnlyAccessTheirOwnResource
import br.com.acl.service.PapelService
import br.com.acl.service.UsuarioService
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
@RequestMapping("/api/usuarios/")
class UsuarioController() {
    @Autowired
    private lateinit var usuarioService: UsuarioService

    @Autowired
    private lateinit var papelService: PapelService


    @GetMapping("{id}")
    fun findById(@PathVariable id: Int): UsuarioResponse = usuarioService.findById(id).toResponse()

    @UserCanOnlyAccessTheirOwnResource
    @GetMapping
    fun findAll(@PageableDefault(page = 0, size = 10) pageable: Pageable): PageResponse<UsuarioResponse> {
        return usuarioService.findAll(pageable).map { it.toResponse() }.toPageResponse()
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@RequestBody @Valid usuario: PostUsuarioRequest) {
        val papel = papelService.findById(usuario.papelId.toLong())
        usuarioService.create(usuario.toUsuarioModel(papel))
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: Int) = usuarioService.delete(id)

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun update(@PathVariable id: Int, @RequestBody @Valid usuario: PutUsuarioRequest) {
        val usuarioExist = usuarioService.findById(id)
        usuarioService.update(usuario.toUsuarioModel(usuarioExist))
    }
}
