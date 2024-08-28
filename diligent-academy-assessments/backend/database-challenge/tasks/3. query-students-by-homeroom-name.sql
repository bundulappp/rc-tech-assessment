SELECT student.name AS student_name, homeroom.name AS homeroom_name
FROM student
JOIN homeroom ON student.homeroom_id = homeroom.id
WHERE homeroom.name = '9A' OR homeroom.name = '9B';
