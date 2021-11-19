-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ssafy_pjt
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ssafy_pjt` ;

-- -----------------------------------------------------
-- Schema ssafy_pjt
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ssafy_pjt` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
USE `ssafy_pjt` ;

-- -----------------------------------------------------
-- Table `ssafy_pjt`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ssafy_pjt`.`user` ;

CREATE TABLE IF NOT EXISTS `ssafy_pjt`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(200) NULL,
  `password` VARCHAR(200) NULL,
  `nickname` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
