-- CREATE DATABASE coralid;

USE coralid;

CREATE TABLE zoa
(
	zoa_id INTEGER NOT NULL PRIMARY KEY,
	zoa_main_name VARCHAR(256),
	zoa_face_pattern INTEGER,
	zoa_type INTEGER
);

CREATE TABLE alternate_name
(
	alt_name_id INTEGER NOT NULL PRIMARY KEY,
    alt_name_zoa_id INTEGER,
    zoa_alternate_name VARCHAR(50)
);

CREATE TABLE face_color
(
	face_color_id INTEGER NOT NULL PRIMARY KEY,
    face_color_zoa_id INTEGER,
    face_col VARCHAR(6)
);

CREATE TABLE skirt_color
(
	skirt_color_id INTEGER NOT NULL PRIMARY KEY,
    skirt_color_zoa_id INTEGER,
    skirt_col VARCHAR(6)
);

CREATE TABLE zoa_environment
(
	env_id INTEGER NOT NULL PRIMARY KEY,
    env_zoa_id INTEGER,
    env_par INTEGER,
    env_flow INTEGER
);

ALTER TABLE face_color
ADD CONSTRAINT
FK_zoa_face_color
FOREIGN KEY
(face_color_zoa_id)
REFERENCES
zoa
(zoa_id);

ALTER TABLE skirt_color
ADD CONSTRAINT
FK_zoa_skirt_color
FOREIGN KEY
(skirt_color_zoa_id)
REFERENCES
zoa
(zoa_id);

ALTER TABLE alternate_name
ADD CONSTRAINT
FK_zoa_alt_name
FOREIGN KEY
(alt_name_zoa_id)
REFERENCES
zoa
(zoa_id);

ALTER TABLE zoa_environment
ADD CONSTRAINT
FK_zoa_env
FOREIGN KEY
(env_zoa_id)
REFERENCES
zoa
(zoa_id);