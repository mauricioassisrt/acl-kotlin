package br.com.acl.controller.response

import br.com.acl.controller.response.FieldErrorResponse

data class ErrorResponse (
    var httpCode: Int,
    var message: String,
    var internalCode: String,
    var erros: List<FieldErrorResponse>?
)
