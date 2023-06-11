package br.com.acl.security

import br.com.acl.controller.request.LoginRequest
import br.com.acl.controller.response.SuccessResponse
import br.com.acl.exception.AuthenticationException
import br.com.acl.repository.UsuarioRepository
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import org.springframework.http.HttpStatus
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import java.lang.Exception
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class AuthenticationFilter(
        authenticationManager: AuthenticationManager,
        private val userRepository: UsuarioRepository,
        private val jwtUtil: JwtUtil
) : UsernamePasswordAuthenticationFilter(authenticationManager) {

    override fun attemptAuthentication(request: HttpServletRequest, response: HttpServletResponse): Authentication {
        try {
            val loginRequest = jacksonObjectMapper().readValue(request.inputStream, LoginRequest::class.java)
            val id = userRepository.findByEmail(loginRequest.email)?.id
            val authToken = UsernamePasswordAuthenticationToken(id, loginRequest.senha)
            return authenticationManager.authenticate(authToken)
        } catch (ex: Exception) {
            throw AuthenticationException("Falha ao autenticar", "999")
        }
    }

    override fun successfulAuthentication(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain?, authResult: Authentication) {
        val id = (authResult.principal as UsuarioDetalhes).id
        var usuario =  userRepository.findById(id)
        val token = jwtUtil.generateToken(id, usuario.get())
        response.contentType = "application/json"
        response.status = HttpServletResponse.SC_OK

        val responseSuccess = SuccessResponse(
            HttpStatus.OK.value(),
            "Bearer $token",
        )
        response.outputStream.print(jacksonObjectMapper().writeValueAsString(responseSuccess))
        response.addHeader("Authorization", "Bearer $token")
    }

}
