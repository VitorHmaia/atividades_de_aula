--------DEPARTAMENTOS--------
ALTER TABLE departamentos ALTER COLUMN nome_dpt TYPE varchar (50);

--POVOANDO A ENTIDADE DEPARTAMENTOS
INSERT INTO departamentos VALUES (1, 'CST', 'Curso Superior em Tecnologia');
INSERT INTO departamentos VALUES (2, 'CT', 'Curso Técnico');

INSERT INTO departamentos VALUES 
(3, 'CAI', 'Curso de Aprendizagem Industrial'),
(4, 'FIC', 'Formação Inicial e Continuada');
SELECT * FROM departamentos ORDER BY id_dpt DESC;

--CONTAGEM DE LINHAS--
SELECT COUNT(*) FROM departamentos;

--CONTAGEM DE LINHAS EXCETO NULL--
SELECT COUNT ('any') FROM departamentos;

INSERT INTO cursos VALUES 
(1, 1, 'ADS', 'Tecnólogo em Análise e Desenvolvimento de Sistemas'),
(2, 1, 'MEC', 'Tecnólogo em Mecatrônica'),
(3, 2, 'DEV', 'Técnico em Desenvolvimento de Sistemas'),
(4, 2, 'MEC', 'Técnico em Mecatrônica'),
(5, 3, 'EME', 'Eletricista de Manutenção Eletroeletrônico'),
(6, 3, 'MES', 'Mecânico de Usinagem'),
(7, 3, 'ADM', 'Administração'),
(8, 4, 'CLP', 'Controladores Lógicos Programáveis'),
(9, 4, 'EXC', 'Excel'),
(10, 4, 'PBI', 'Power BI'),
(11, 4, 'ROB', 'Robótica Industrial'),
(12, 4, 'EIN', 'Eletricista Instalador'),
(13, 4, 'HDR', 'Hidráulica'),
(14, 4, 'PNE', 'Pneumática'),
(15, 4, 'FER', 'Ferramenteiro');

SELECT sigla_curso, nome_curso FROM cursos ORDER BY id_curso;

SELECT COUNT ('any') FROM cursos;

SELECT sigla_dpt, nome_curso FROM cursos INNER JOIN
departamentos ON departamentos.id_dpt = cursos.id_dpt; 


SELECT sigla_dpt, nome_curso FROM cursos INNER JOIN
departamentos USING (id_dpt); 

--Exibe o departamento e a contagem dos cursos para cada sigla
SELECT sigla_dpt, COUNT(nome_curso) 
FROM cursos NATURAL INNER JOIN departamentos AS sub
GROUP BY sub.sigla_dpt;



