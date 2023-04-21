package br.com.acl.controller.request

import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty

data class PostPapelRequest(
    @field: NotBlank(message = "Nome deve ser informado")
    var nome: String,
    @field: NotEmpty(message = "Descrição deve ser informada")
    var descricao: String,
)
