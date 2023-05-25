package br.com.acl.model

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*


@Entity
@Table(name = "papel_funcao")
data class PapelFuncaoModel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int?,

    @ManyToOne
    @JoinColumn(name = "papel_id")
    @JsonBackReference
    val papel: PapelModel? = null,

    @OneToOne
    @JoinColumn(name = "funcao_id")
    @JsonManagedReference
    val funcao: FuncaoModel? = null
){
    constructor() : this(null, null, null)
}
