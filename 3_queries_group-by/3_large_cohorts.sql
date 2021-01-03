SELECT cohorts.name as cohort_name, count(students.id) as total_students
FROM cohorts INTER JOIN students ON cohorts.id = cohort_id
GROUP BY cohorts.name
HAVING count(students.id) >= 18
ORDER BY total_students;
