CREATE TABLE funcao
(
    id        INT PRIMARY KEY AUTO_INCREMENT,
    nome      VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE papel_funcao
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    papel_id INT NOT NULL,
    funcao_id INT NOT NULL,
    FOREIGN KEY (papel_id) REFERENCES papel(id),
    FOREIGN KEY (funcao_id) REFERENCES funcao(id)
);
