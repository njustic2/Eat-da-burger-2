-- Burger Schema =============================================

CREATE TABLE burgers (
`id` INTEGER(10) AUTO_INCREMENT NOT NULL,
`burger_name` VARCHAR(50) NOT NULL,
`devoured` BOOLEAN DEFAULT FALSE NOT NULL,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

SELECT * FROM burgers;
-- === === === === === === === === === === === === === === === ===