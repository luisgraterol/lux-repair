
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
  
  
-- Agregar Marcas
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
INSERT INTO Marca (id, Nombre) VALUES (999, 'OTROS');


-- AGREGAR MODELOS
INSERT INTO Modelo (id, Nombre, Marca) VALUES (1, 'Aveo', 1);
