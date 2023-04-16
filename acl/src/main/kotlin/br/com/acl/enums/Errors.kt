package br.com.acl.enums


enum class Errors(val code: String, val message: String) {
    ML000("ML-000", "Acess denied"),
    ML001("ML-001" , "Invalid Request"),
    ML201("ML-201", "Papel [%s] não existe")
}
