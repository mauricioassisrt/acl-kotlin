package br.com.acl.controller.response

import org.springframework.security.core.GrantedAuthority


data class SuccessResponse (
    var httpCode: Int,
    var token: String,
    var authorities: MutableCollection<out GrantedAuthority>
)
