package br.com.acl.repository

import br.com.acl.model.PapelModel
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PapelRepository : JpaRepository<PapelModel, Long> {
    override fun findAll(pageable: Pageable): Page<PapelModel>
}
