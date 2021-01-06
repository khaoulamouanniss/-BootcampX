const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'yayaiyad',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});

pool.connect();

const queryString =  `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`;

const cohortName = process.argv[2] || 'JUL02';

const values = [cohortName];
pool.query(queryString, values)
.then(res => {
  console.log('line 44')
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));

