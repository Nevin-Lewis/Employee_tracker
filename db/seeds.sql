INSERT INTO department (id, dep_name)
VALUES (1, "Management"),
       (2, "Clinical Staff"),
       (3, "Practioners"),
       (4, "Scheduling"),
       (5, "Physical Therapy");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Physician", 240000, 3),
       (2, "PA-C", 112000, 3),
       (3, "Medical Assistant", 48000, 2),
       (4, "Medical Scribe", 36000, 2),
       (5, "Area Manager", 60000, 1),
       (6, "Group Manager", 80000, 1),
       (7, "Clinical Scheduling", 40000, 4),
       (8, "Surgery Scheduling", 44000, 4),
       (9, "Physical Therapis", 84000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jane", "Smith, MD", 1, NULL),
       (2, "Grant", "Jones, PA-C", 2, NULL),
       (3, "Monica", "Lewis", 5, NULL),
       (4, "Emily", "Henze", 3, 3),
       (5, "Joey", "Haas", 4, 3),
       (6, "Bianca", "Ruiz", 8, 9),
       (7, "Luis", "Canas", 9, NULL),
       (8, "Stephanie", "Nash", 7, 3),
       (9, "Tom", "Grant", 6, NULL);