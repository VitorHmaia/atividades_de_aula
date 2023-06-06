--Criar entidade Departamentos
CREATE TABLE departamentos (
	idDept int PRIMARY KEY,
	siglaDept VARCHAR(3) NOT NULL,
	nomeDept VARCHAR(30) NOT NULL
);

--Visualiza toda tabela 
SELECT * FROM departamentos;

--Altera o nome das colunas
ALTER TABLE departamentos RENAME COLUMN nomeDept TO nome_dpt;

--Criar Entidade Curso
CREATE TABLE cursos (
	id_curso int PRIMARY KEY,
	id_dpt INT REFERENCES departamentos,
	sigla_curso VARCHAR(3) NOT NULL,
	nome_curso VARCHAR(30) NOT NULL
);

--Visualiza toda tabela 
SELECT * FROM cursos;

--Criar Entidade Curso
CREATE TABLE discplinas (
	id_disc int PRIMARY KEY,
	id_curso INT REFERENCES cursos,
	sigla_disc VARCHAR(4) NOT NULL,
	nome_disc VARCHAR(60) NOT NULL,
	optativa BOOLEAN DEFAULT FALSE
);

--Visualiza toda tabela 
SELECT * FROM discplinas;

--ALTERA O TAMANHO DA COLUNA nome_curso
ALTER TABLE cursos ALTER COLUMN nome_curso TYPE VARCHAR(50);

--Criar tabela (entidade) alunos
CREATE TABLE alunos (
	ra int PRIMARY KEY,
	cpf VARCHAR(14) NOT NULL UNIQUE, 
	nome_aluno VARCHAR(50) NOT NULL,
	nascim DATE CHECK (AGE(CURRENT_DATE, nascim)>='14 years'),
	status BOOLEAN DEFAULT TRUE
);

--Visualiza toda tabela 
SELECT * FROM alunos;

--Criar entidade disciplinas_alunos
CREATE TABLE discplinas_alunos(
	id_disciplinas_alunos INT PRIMARY KEY,
	id_disc INT REFERENCES discplinas,
	ra INT REFERENCES alunos,
	data_matricula DATE
);

--Visualiza toda tabela 
SELECT * FROM discplinas_alunos;

