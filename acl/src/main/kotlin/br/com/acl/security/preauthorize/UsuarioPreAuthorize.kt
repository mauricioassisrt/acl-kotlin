package br.com.acl.security.preauthorize

import org.springframework.security.access.prepost.PreAuthorize

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('USUARIO_FIND_BY_ID') ")
annotation class UsuarioFindById

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('USUARIO_FIND_ALL') ")
annotation class UsuarioFindAll

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('USUARIO_DELETE') ")
annotation class UsuarioDelete

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('USUARIO_POST') ")
annotation class UsuarioPost

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('USUARIO_PUT') ")
annotation class UsuarioPut
