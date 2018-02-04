
-- Este query configura los foreign keys correspondientes a la herencia entre Usuario, Empleado y Cliente
-- Solo deben correr este query una vez antes de correr la applicacion

USE luxrepairDB;

-- Herencia de Empleado y Cliente a Usuario
ALTER TABLE `luxrepairDB`.`Empleado` 
ADD CONSTRAINT `id_Empleado`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Usuario` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `luxrepairDB`.`Cliente` 
ADD CONSTRAINT `id_Cliente`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Usuario` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Herencia de Gerente, Mecanico y Administrador a Empleado
ALTER TABLE `luxrepairDB`.`Gerente` 
ADD CONSTRAINT `id_Gerente`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Empleado` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `luxrepairDB`.`Mecanico` 
ADD CONSTRAINT `id_Mecanico`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Empleado` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `luxrepairDB`.`Administrador` 
ADD CONSTRAINT `id_Administrador`
  FOREIGN KEY (`id`)
  REFERENCES `luxrepairDB`.`Empleado` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
