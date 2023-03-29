package br.com.acl.repository

import br.com.acl.model.PapelModel
import org.springframework.data.domain.Page
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.awt.print.Pageable
import javax.swing.text.html.parser.Entity

@Repository
interface PapelRepository : JpaRepository<PapelModel, Long> {

}
