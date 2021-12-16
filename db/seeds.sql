INSERT INTO departments (name)
VALUES
('Sales'),
('Development'),
('Design');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000.00, 1),
('Designer', 90000.00, 1),
('Coder', 1000000.00, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jim', 'Bone', 1, 3),
('Jordan', 'Boyman', 2, NULL),
('Thomas', 'Gola', 3, 3),
('Stinky', 'Cheese', 2, 2);