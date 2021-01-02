SELECT students.name, students.start_date, cohorts.name, cohorts.start_date
FROM students JOIN cohorts ON students.cohort_id = cohorts.id
WHERE students.start_date != cohorts.start_date
ORDER BY cohorts.start_date;
