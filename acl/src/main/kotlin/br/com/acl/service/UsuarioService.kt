package br.com.acl.service

import br.com.acl.enums.Errors
import br.com.acl.enums.Status
import br.com.acl.exception.NotFoundException
import br.com.acl.model.UsuarioModel
import br.com.acl.repository.UsuarioRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class UsuarioService {
    @Autowired
    private lateinit var usuarioRepository: UsuarioRepository

    @Autowired
    private lateinit var bCrypt: BCryptPasswordEncoder
    fun findAll(pageable: Pageable): Page<UsuarioModel> = usuarioRepository.findAll(pageable)

    fun findById(id: Int): UsuarioModel =
        usuarioRepository.findById(id).orElseThrow {
            NotFoundException(Errors.ML301.message.format(id), Errors.ML201.code)
        }

    fun create(usuario: UsuarioModel) =
        usuarioRepository.save(usuario.copy(senha = bCrypt.encode(usuario.senha)))


    fun delete(id: Int) {
        if (!usuarioRepository.existsById(id!!))
            throw NotFoundException(Errors.ML301.message.format(id), Errors.ML201.code)
        var usuario = findById(id)
        usuario.status = Status.INATIVO
        usuarioRepository.save(usuario)
    }

    fun update(usuarioModel: UsuarioModel) {
        if (!usuarioRepository.existsById(usuarioModel.id!!))
            throw NotFoundException(Errors.ML301.message.format(usuarioModel.id), Errors.ML301.code)
        usuarioRepository.save(usuarioModel.copy(senha = bCrypt.encode(usuarioModel.senha)))
    }
}
