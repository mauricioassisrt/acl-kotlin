create table usuario
(
    id   int auto_increment primary key,
    email varchar(255) null,
    nome  varchar(255) null,
    senha varchar(255) null,
    status varchar(100) null,
    papel_id int not null,
    FOREIGN KEY (papel_id) REFERENCES  papel(id)
);

