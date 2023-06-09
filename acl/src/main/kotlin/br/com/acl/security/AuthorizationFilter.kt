package br.com.acl.security


import br.com.acl.exception.AuthenticationException
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import org.springframework.security.core.userdetails.UserDetailsService

class AuthorizationFilter(
    authenticationManager: AuthenticationManager,
    private val usuarioDetalhesService: UserDetailsService,
    private val jwtUtil: JwtUtil
) : BasicAuthenticationFilter(authenticationManager) {
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val authorization = request.getHeader("Authorization")
        if (authorization != null && authorization.startsWith("Bearer ")) {
            val auth = getAuthentication(authorization.split(" ")[1])
            SecurityContextHolder.getContext().authentication = auth
        }
        chain.doFilter(request, response)
    }

    private fun getAuthentication(token: String): UsernamePasswordAuthenticationToken {
        if (!jwtUtil.isValidToken(token)) {
            throw AuthenticationException("Token Invalido ", "9999")
        }
        val subject = jwtUtil.getSubject(token)
        val usuario = usuarioDetalhesService.loadUserByUsername(subject)
        return UsernamePasswordAuthenticationToken(usuario, null, usuario.authorities)
    }
}
