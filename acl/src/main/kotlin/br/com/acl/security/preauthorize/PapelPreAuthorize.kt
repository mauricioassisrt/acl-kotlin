package br.com.acl.security.preauthorize

import org.springframework.security.access.prepost.PreAuthorize

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('PAPEL_FIND_BY_ID') ")
annotation class PapelFindById

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('PAPEL_FIND_ALL') ")
annotation class PapelFindAll

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('PAPEL_DELETE') ")
annotation class PapelDelete

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('PAPEL_POST') ")
annotation class PapelPost

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('PAPEL_PUT') ")
annotation class PapelPut
