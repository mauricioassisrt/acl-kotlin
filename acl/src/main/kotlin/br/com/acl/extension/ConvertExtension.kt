package br.com.acl.extension

import br.com.acl.controller.request.PostPapelRequest
import br.com.acl.controller.request.PostUsuarioRequest
import br.com.acl.controller.request.PutPapelRequest
import br.com.acl.controller.request.PutUsuarioRequest
import br.com.acl.controller.response.PageResponse
import br.com.acl.controller.response.PapelResponse
import br.com.acl.controller.response.UsuarioResponse
import br.com.acl.enums.Status
import br.com.acl.model.PapelModel
import br.com.acl.model.UsuarioModel
import org.springframework.data.domain.Page

fun PapelModel.toResponse(): PapelResponse {
    return PapelResponse(
            id = this.id,
            nome = this.nome,
            descricao = this.descricao
    )
}
fun UsuarioModel.toResponse(): UsuarioResponse {
    return UsuarioResponse(
        id = this.id,
        nome = this.nome,
        senha = this.senha,
        email = this.email,
        status = this.status,
        papel = this.papel
        )
}
fun PutUsuarioRequest.toUsuarioModel(usuarioModel: UsuarioModel): UsuarioModel {
    return UsuarioModel(
        id = usuarioModel.id,
        nome = this.nome,
        email = this.email,
        status = this.status,
        senha = this.senha,
        papel = usuarioModel.papel
    )
}
fun PostUsuarioRequest.toUsuarioModel(papelModel: PapelModel): UsuarioModel {
    return UsuarioModel(
        nome = this.nome,
        email = this.email,
        status = Status.ATIVO,
        senha = this.senha,
        papel = papelModel
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
