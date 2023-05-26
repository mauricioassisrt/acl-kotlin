package br.com.acl.service

import br.com.acl.exception.AuthenticationException
import br.com.acl.repository.UsuarioRepository
import br.com.acl.security.UsuarioDetalhes
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class UsuarioDetalhesService(
    private val usuarioRepository: UsuarioRepository
) : UserDetailsService {
    override fun loadUserByUsername(id: String): UserDetails {
        val customer = usuarioRepository.findById(id.toInt())
            .orElseThrow { AuthenticationException("Usuário não encontrado", "999") }
        return UsuarioDetalhes(customer)
    }
}
