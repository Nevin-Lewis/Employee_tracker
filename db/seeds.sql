INSERT INTO department (id, dep_name)
VALUES (1, "Management"),
       (2, "Clinical Staff"),
       (3, "Practioners"),
       (4, "Scheduling"),
       (5, "Physical Therapy");

INSERT INTO roles (id, title, department_id, salary)
VALUES (1, "Physician", 3, 240000),
       (2, "PA-C", 3, 112000),
       (3, "Medical Assistant", 2, 48000),
       (4, "Medical Scribe", 2, 36000),
       (5, "Area Manager", 1, 60000),
       (6, "Group Manager", 1, 80000),
       (7, "Clinical Scheduling", 4, 40000),
       (8, "Surgery Scheduling", 4, 44000),
       (9, "Physical Therapis", 5 ,84000);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jane", "Smith, MD", 1, null),
       (2, "Grant", "Jones, PA-C", 2, null),
       (3, "Monica", "Lewis", 5, null),
       (4, "Emily", "Henze", 3, 3),
       (5, "Joey", "Haas", 4, 3),
       (9, "Tom", "Grant", 6, null),
       (6, "Bianca", "Ruiz", 8, 9),
       (7, "Luis", "Canas", 9, null),
       (8, "Stephanie", "Nash", 7, 3);
