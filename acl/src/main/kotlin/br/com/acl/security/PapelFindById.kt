package br.com.acl.security

import org.springframework.security.access.prepost.PreAuthorize

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@PreAuthorize("hasAuthority('PAPEL_FIND_BY_ID') ")
annotation class PapelFindById
