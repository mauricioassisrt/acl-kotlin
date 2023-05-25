package br.com.acl.model

import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "funcao")
data class FuncaoModel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null,

    @Column(name = "nome", nullable = false)
    val nome: String? = null,

    @Column(name = "descricao", nullable = false)
    val descricao: String? = null,

    ) {
    constructor() : this(null, null, null)

    override fun toString(): String {
        return "FuncaoModel(nome='$nome', descricao='$descricao')"
    }
}
