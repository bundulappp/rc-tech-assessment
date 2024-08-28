CREATE TABLE homeroom (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

ALTER TABLE student
ADD COLUMN homeroom_id INT,
ADD FOREIGN KEY (homeroom_id) REFERENCES homeroom(id);

INSERT INTO homeroom (name) VALUES 
('9A'),
('9B');