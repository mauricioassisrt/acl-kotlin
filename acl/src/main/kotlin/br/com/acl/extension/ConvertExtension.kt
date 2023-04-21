package br.com.acl.extension

import br.com.acl.controller.request.PostPapelRequest
import br.com.acl.controller.request.PutPapelRequest
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
fun PutPapelRequest.toPapelModel(papelModel: PapelModel): PapelModel {
    return PapelModel(
        id = papelModel.id,
        nome = this.nome ?: papelModel.nome,
        descricao = this.descricao ?: papelModel.descricao
    )
}

fun PostPapelRequest.toPapelModel(): PapelModel {
    return PapelModel(
        nome = this.nome,
        descricao = this.descricao,
    )
}
