package br.com.acl.security

import br.com.acl.enums.Status
import br.com.acl.model.PapelModel
import br.com.acl.model.UsuarioModel
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class UserCustomerDetails(val customerModel: UsuarioModel) : UserDetails {
    val id: Int = customerModel.id!!
    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        val authority = SimpleGrantedAuthority(customerModel.papel!!.nome)
        return mutableListOf(authority)
    }
    override fun getPassword(): String = customerModel.senha!!
    override fun getUsername(): String = customerModel.id.toString()
    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isCredentialsNonExpired(): Boolean = true
    override fun isEnabled(): Boolean = customerModel.status == Status.ATIVO
}
