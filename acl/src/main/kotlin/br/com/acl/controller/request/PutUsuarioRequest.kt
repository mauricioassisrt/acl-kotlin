package br.com.acl.controller.request

import br.com.acl.enums.Status
import com.fasterxml.jackson.annotation.JsonAlias
import java.math.BigDecimal
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty


data class PutUsuarioRequest(
    var id: Int,
    var nome: String,
    var email: String,
    var senha: String,
    @JsonAlias("papel_id")
    var papelId: Int,
    var status: Status,
)
