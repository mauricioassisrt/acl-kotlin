package br.com.acl.exception

class BadRequestException(override val message: String, val errorCode: String) : Exception() {}
