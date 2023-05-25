package br.com.acl.model

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import java.io.Serializable
import javax.persistence.*

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
        @OneToMany(mappedBy = "papel", cascade = [CascadeType.PERSIST, CascadeType.MERGE], fetch = FetchType.EAGER)
        @JsonManagedReference
        var papelFuncao: MutableList<PapelFuncaoModel>? = null
){
        constructor() : this(null, "", "", null)
}
