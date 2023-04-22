package br.com.acl.controller.response

import br.com.acl.enums.Status
import br.com.acl.model.PapelModel

class UsuarioResponse (
        var id: Int? = null,
        var nome: String? = null,
        var senha: String? = null,
        var email: String? = null,
        var status: Status? = null,
        var papel: PapelModel? = null
)
