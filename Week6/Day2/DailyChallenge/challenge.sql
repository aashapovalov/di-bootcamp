Q1
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)


Subquery result: (NULL)

So condition is: ft.id NOT IN (NULL)
That becomes UNKNOWN for every row (including 5,6,7,NULL) → nothing passes WHERE.

Predicted output: 0
Actual output: 0

Q2
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5)


Subquery result: (5)

Row-by-row:

5 NOT IN (5) → FALSE (excluded)

6 NOT IN (5) → TRUE (included)

7 NOT IN (5) → TRUE (included)

NULL NOT IN (5) → UNKNOWN (excluded)

Predicted output: 2
Actual output: 2

Q3
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab)


Subquery result: (5, NULL)

Because the list contains NULL, for values not equal to 5:

6 NOT IN (5, NULL) → (6<>5 is TRUE) AND (6<>NULL is UNKNOWN) → UNKNOWN → excluded

7 NOT IN (5, NULL) → UNKNOWN → excluded
Also:

5 NOT IN (5, NULL) → FALSE

NULL NOT IN (5, NULL) → UNKNOWN

Predicted output: 0
Actual output: 0

Q4
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)


Subquery result: (5) (NULL filtered out)

Same logic as Q2.

Predicted output: 2
Actual output: 2

Final answers (actual outputs)

Q1 = 0

Q2 = 2

Q3 = 0

Q4 = 2