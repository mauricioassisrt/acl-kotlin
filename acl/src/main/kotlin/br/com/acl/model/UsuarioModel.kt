package br.com.acl.model

import br.com.acl.enums.Status
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "usuario")
data class CustomerModel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,

    @Column
    var nome: String,

    @Column
    var email: String,

    @Column
    @Enumerated(EnumType.STRING)
    var status: Status,

    @Column
    val senha: String,

    @ManyToOne
    @JoinColumn(name = "papel_id")
    var papel: PapelModel? = null

): Serializable
