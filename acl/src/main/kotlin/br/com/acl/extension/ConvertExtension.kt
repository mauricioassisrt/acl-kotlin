package br.com.acl.extension

import br.com.acl.controller.response.PageResponse
import br.com.acl.controller.response.PapelResponse
import br.com.acl.model.PapelModel
import org.springframework.data.domain.Page

fun PapelModel.toResponse(): PapelResponse {
    return PapelResponse(
            id = this.id,
            nome = this.nome,
            descricao = this.descricao
    )
}
fun <T> Page<T>.toPageResponse(): PageResponse<T> {
    return PageResponse(
            this.content,
            this.number,
            this.totalElements,
            this.totalPages
    )
}
