package br.com.acl.exception

class NotFoundException(override val message: String, val errorCode: String) : Exception() {

}
