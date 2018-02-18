
-- Este query configura los foreign keys correspondientes a la herencia entre Usuario, Empleado y Cliente
-- Solo deben correr este query una vez antes de correr la applicacion

USE luxrepairDB;

-- Herencia de Empleado a Usuario
ALTER TABLE `luxrepairDB`.`Empleado` 
ADD CONSTRAINT `id_Empleado`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Usuario` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Herencia de Cliente a Usuario
ALTER TABLE `luxrepairDB`.`Cliente` 
ADD CONSTRAINT `id_Cliente`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Usuario` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Herencia de Gerente a Empleado
ALTER TABLE `luxrepairDB`.`Gerente` 
ADD CONSTRAINT `id_Gerente`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Empleado` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Herencia de Mecanico a Empleado
ALTER TABLE `luxrepairDB`.`Mecanico` 
ADD CONSTRAINT `id_Mecanico`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Empleado` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Herencia de Administrador a Empleado
ALTER TABLE `luxrepairDB`.`Administrador` 
ADD CONSTRAINT `id_Administrador`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Empleado` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Setup de Claves Foraneas de la Marca y el Modelo en la tabla Vehiculo
ALTER TABLE `luxrepairDB`.`Vehiculo` 
ADD COLUMN `Marca` INT(11) NOT NULL AFTER `Activo`,
ADD COLUMN `Modelo` INT(11) NOT NULL AFTER `Marca`,
ADD INDEX `Marca_idx` (`Marca` ASC),
ADD INDEX `Modelo_idx` (`Modelo` ASC);
ALTER TABLE `luxrepairDB`.`Vehiculo` 
ADD CONSTRAINT `Marca`
  FOREIGN KEY (`Marca`)
  REFERENCES `luxrepairDB`.`Marca` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `Modelo`
  FOREIGN KEY (`Modelo`)
  REFERENCES `luxrepairDB`.`Modelo` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Setup de Clave Foranea de la Marca en la tabla Modelo
ALTER TABLE `luxrepairDB`.`Modelo` 
ADD CONSTRAINT `fk_Marca`
  FOREIGN KEY (`Marca`)
  REFERENCES `luxrepairDB`.`Marca` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  
-- Agregar Marcas de Vehiculos
INSERT INTO Marca (id, Nombre) VALUES (1, 'Alfa Romeo');
INSERT INTO Marca (id, Nombre) VALUES (2, 'Aston Martin');
INSERT INTO Marca (id, Nombre) VALUES (3, 'Audi');
INSERT INTO Marca (id, Nombre) VALUES (4, 'Chery');
INSERT INTO Marca (id, Nombre) VALUES (5, 'Chevrolet');
INSERT INTO Marca (id, Nombre) VALUES (6, 'Dodge');
INSERT INTO Marca (id, Nombre) VALUES (7, 'Ferrari');
INSERT INTO Marca (id, Nombre) VALUES (8, 'Ford');
INSERT INTO Marca (id, Nombre) VALUES (9, 'Honda');
INSERT INTO Marca (id, Nombre) VALUES (10, 'Lamborghini');
INSERT INTO Marca (id, Nombre) VALUES (11, 'Lexus');
INSERT INTO Marca (id, Nombre) VALUES (12, 'Mazda');
INSERT INTO Marca (id, Nombre) VALUES (13, 'Mercedez Benz');
INSERT INTO Marca (id, Nombre) VALUES (14, 'Mitsubishi');
INSERT INTO Marca (id, Nombre) VALUES (15, 'Nissan');
INSERT INTO Marca (id, Nombre) VALUES (16, 'Toyoya');
INSERT INTO Marca (id, Nombre) VALUES (17, 'Volvo');
INSERT INTO Marca (id, Nombre) VALUES (999, 'Otros');


-- Agregar Modelos de Vehiculos
INSERT INTO Modelo (id, Nombre, Marca) VALUES (1, '488', 7);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (2, '458 Spider',	7);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (3, '4Runner', 16);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (4, 'Accord', 9);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (5, 'Aventador', 10);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (6, 'Aveo', 5);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (7, 'C-Class', 13);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (8, 'Camaro', 5);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (9, 'Challenger', 6);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (10, 'Charger', 6);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (11, 'Civic', 9);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (12, 'Durango', 6);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (13, 'E-Class', 13);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (14, 'Eclipse Cross', 14);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (15, 'Explorer', 8);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (16, 'F150', 8);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (17, 'FJ Cruiser', 16);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (18, 'Gran Tiger', 4);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (19, 'Guilia', 1);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (20, 'HS', 11);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (21, 'Huracán', 10);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (22, 'IS', 11);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (23, 'J50', 7);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (24, 'LS', 11);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (25, 'Mazda3', 12);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (26, 'Mazda6', 12);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (27, 'Montero', 14);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (28, 'Murano', 15);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (29, 'Mustang', 8);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (30, 'MX-5', 12);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (31, 'Orinoco', 4);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (32, 'Outlander', 14);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (33, 'Pathfinder', 15);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (34, 'R8', 3);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (35, 'Rapide S', 2);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (36, 'Ridgeline', 9);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (37, 'RS 6', 3);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (38, 'S-Class', 13);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (39, 'S90', 17);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (40, 'Sequoia', 16);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (41, 'Silverado', 5);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (42, 'Stelvio Quadrifoglio', 1);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (43, 'Stelvio TI', 1);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (44, 'Tiggo', 4);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (45, 'Titan', 15);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (46, 'TTS', 3);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (47, 'Urus', 10);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (48, 'V40 Cross Country', 17);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (49, 'Vanquish', 2);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (50, 'Vulcan', 2);
INSERT INTO Modelo (id, Nombre, Marca) VALUES (51, 'XC90', 17);
