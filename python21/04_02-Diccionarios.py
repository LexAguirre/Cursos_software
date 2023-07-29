def get_student_average(students):
    class_total_grades = 0
    class_total_students = len(students)

    for student in students:
        length = len(student["grades"])
        grades_sum = sum(student["grades"])
        average = grades_sum / length
        average = round(average,2)
        class_total_grades += average

        student["average"] = average

    class_average = class_total_grades / class_total_students
    class_average = round(class_average,2)
    results = {
        "class_average": class_average,
        "students": []
    }
    
    for student in students:
        results["students"].append({
            "name": student["name"],
            "average": student["average"]
        })

    return results

promedio = get_student_average([
    {
        "name": "Pedro",
        "grades": [90, 87, 88, 90],
    },
    {
        "name": "Jose",
        "grades": [99, 71, 88, 96],
    },
    {
        "name": "Maria",
        "grades": [92, 81, 80, 96],
    },
])

print(promedio)
