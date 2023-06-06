
CREATE TABLE teste(
	idTeste int primary key, 
	nome varchar(50)
);

--Altera a tabela
ALTER TABLE teste
	ADD idade int,
	add cpf varchar(14);
	
ALTER TABLE teste ALTER COLUMN nome type varchar (60);

--Apaga a tabela
DROP TABLE teste;

--Mostra todos valores da tabela
SELECT * FROM teste;

--Insere novos elementos
INSERT INTO teste VALUES(1, 'Joao', 30, '9999.00000-0');

INSERT INTO teste (nome, idteste, idade, cpf) VALUES
('Maria', 2, 20, '9998.00000-X');

INSERT INTO teste (nome, idteste, idade, cpf) VALUES
('Pedro', 3, 18, '9988.00000-3');

INSERT INTO teste (nome, idteste, idade, cpf) VALUES
('Karina', 4, 31, '9977.00006-5');

--update com where
UPDATE teste SET nome='Pedro', idade=19, cpf='222.222.222-X'
WHERE idteste = 2;

--atualizar valores com expressão
UPDATE teste SET idade=idade+3
