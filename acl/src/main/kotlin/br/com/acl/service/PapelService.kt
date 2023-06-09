package br.com.acl.service

import br.com.acl.enums.Errors
import br.com.acl.exception.NotFoundException
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

    fun findAll(pageable: Pageable): Page<PapelModel> =
        papelRepository.findAll(pageable)


    fun findById(id: Long): PapelModel =
        papelRepository.findById(id).orElseThrow {
            NotFoundException(Errors.ML201.message.format(id), Errors.ML201.code)
        }

    fun create(papel: PapelModel) = papelRepository.save(papel)
    fun delete(id: Long) {
        if (!papelRepository.existsById(id!!))
            throw NotFoundException(Errors.ML201.message.format(id), Errors.ML201.code)
        papelRepository.delete(findById(id))
    }

    fun update(papelModel: PapelModel) {
        if (!papelRepository.existsById(papelModel.id!!))
            throw NotFoundException(Errors.ML201.message.format(papelModel.id), Errors.ML201.code)

        papelRepository.save(papelModel)
    }
}
