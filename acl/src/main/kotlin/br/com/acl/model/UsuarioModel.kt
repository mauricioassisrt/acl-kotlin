package br.com.acl.model

import br.com.acl.enums.Status
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "usuario")
data class UsuarioModel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,

    @Column
    var nome: String? = null,

    @Column
    var email: String? = null,

    @Column
    @Enumerated(EnumType.STRING)
    var status: Status? = null,

    @Column
    val senha: String? = null,

    @ManyToOne
    @JoinColumn(name = "papel_id")
    var papel: PapelModel? = null
) {
    constructor() : this(null, "", "", Status.INATIVO, "", null)
}
