package br.com.acl.controller.request

import com.fasterxml.jackson.annotation.JsonAlias
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty

data class PostUsuarioRequest(
    @field: NotBlank(message = "Nome deve ser informado")
    var nome: String,
    @field: NotBlank(message = "Email deve ser informado")
    var email: String,
    @field: NotBlank(message = "Senha deve ser informado")
    var senha: String,
    @JsonAlias("papel_id")
    var papelId: Int

    )
