package br.com.acl.service

import br.com.acl.model.PapelModel
import br.com.acl.repository.PapelRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class PapelService {
    @Autowired
    private lateinit var papelRepository: PapelRepository

    fun findAll(pageable: Pageable): Page<PapelModel> {
        return papelRepository.findAll(pageable)
    }
}
