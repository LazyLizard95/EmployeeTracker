INSERT INTO departments (name)
VALUES
('Sales'),
('Development'),
('Design'),
('Production'),
('Releases'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000.00, 1),
('Designer', 90000.00, 3),
('Coder', 1000000.00, 2),
('Lawyer', 200000.00, 6),
('Q&A', 70000.00, 5),
('Artist', 100000.00, 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jim', 'Bone', 1, 3),
('Jordan', 'Boyman', 2, NULL),
('Thomas', 'Gola', 3, 3),
('Stinky', 'Cheese', 2, 2);