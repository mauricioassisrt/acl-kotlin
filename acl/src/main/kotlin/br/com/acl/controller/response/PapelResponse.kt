package br.com.acl.controller.response

import br.com.acl.model.PapelFuncaoModel

class PapelResponse (
        var id: Long?,
        var nome: String?,
        var descricao: String?,
        var papelFuncao: MutableList<PapelFuncaoModel>?
)
