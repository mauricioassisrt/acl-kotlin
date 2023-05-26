INSERT INTO `papel` (`id`,`nome`, `descricao`)
VALUES (1, 'ROLE_ADMIN','Administrador do sistema');


INSERT INTO `funcao` (`id`, `nome`, `descricao`)
VALUES (2, 'USUARIO_FIND_BY_ID', 'Visualiza um usuário especifico'),
       (3, 'USUARIO_FIND_ALL', 'BuscaRetorna todos os usuários'),
       (4, 'USUARIO_DELETE', 'Apaga um usuário'),
       (5, 'USUARIO_POST', 'Salva um usuário'),
       (6, 'USUARIO_PUT', 'Altera um Usuário especifico'),
       (7, 'PAPEL_FIND_BY_ID', 'Visualiza um PAPEL especifico'),
       (8, 'PAPEL_FIND_ALL', 'BuscaRetorna todos os PAPEIS'),
       (9, 'PAPEL_DELETE', 'Apaga um PAPEL'),
       (10, 'PAPEL_POST', 'Salva um PAPEL'),
       (11, 'PAPEL_PUT', 'Aletra um PAPEL');

INSERT INTO `papel_funcao` (`id`, `papel_id`, `funcao_id`)
VALUES (3, 1, 2),
       (4, 1, 3),
       (5, 1, 4),
       (6, 1, 5),
       (7, 1, 6),
       (8, 1, 7),
       (9, 1, 8),
       (10, 1, 9),
       (11, 1, 10),
       (12, 1, 11);
