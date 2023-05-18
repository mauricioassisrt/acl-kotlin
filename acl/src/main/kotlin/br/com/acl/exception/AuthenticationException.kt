package br.com.acl.exception

class AuthenticationException(override val message: String, val errorCode: String): Exception() {

}
