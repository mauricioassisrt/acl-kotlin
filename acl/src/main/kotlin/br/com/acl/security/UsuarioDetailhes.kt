package br.com.acl.security

import br.com.acl.enums.Status
import br.com.acl.model.UsuarioModel
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class UsuarioDetailhes(private val usuarioModel: UsuarioModel) : UserDetails {
    val id: Int = usuarioModel.id!!
    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        val authority = SimpleGrantedAuthority(usuarioModel.papel!!.nome)
        return mutableListOf(authority)
    }
    override fun getPassword(): String = usuarioModel.senha!!
    override fun getUsername(): String = usuarioModel.id.toString()
    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isCredentialsNonExpired(): Boolean = true
    override fun isEnabled(): Boolean = usuarioModel.status == Status.ATIVO
}
