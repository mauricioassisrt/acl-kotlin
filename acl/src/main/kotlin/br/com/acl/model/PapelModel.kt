package br.com.acl.model

import java.io.Serializable
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "papel")
data class PapelModel(
        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,

        @Column(name = "nome")
        var nome: String? = null,

        @Column(name = "descricao")
        var descricao: String? = null,

){
        constructor() : this(null, "", "")
}
