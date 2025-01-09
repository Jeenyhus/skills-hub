from django.db import models

# Location Model
class Location(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Trainee Model
class Trainee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    cohort = models.CharField(max_length=100)  # e.g., "1st Quarter 2025"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

# Score Model
class Score(models.Model):
    trainee = models.ForeignKey(Trainee, on_delete=models.CASCADE)
    attendance = models.DecimalField(max_digits=4, decimal_places=2)  # Out of 5
    punctuality = models.DecimalField(max_digits=4, decimal_places=2)  # Out of 5
    energy = models.DecimalField(max_digits=4, decimal_places=2)  # Out of 3
    reliability = models.DecimalField(max_digits=4, decimal_places=2)  # Out of 3
    teamwork = models.DecimalField(max_digits=4, decimal_places=2)  # Out of 3
    timetable = models.DecimalField(max_digits=4, decimal_places=2)  # Out of 5
    numeracy_progress = models.DecimalField(max_digits=5, decimal_places=2)  # Out of 10
    total_score = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    grade = models.CharField(max_length=2, blank=True, null=True)  # e.g., "A+"

    def calculate_total_and_grade(self):
        # Calculate the total and grade
        total = (
            self.attendance +
            self.punctuality +
            self.energy +
            self.reliability +
            self.teamwork +
            self.timetable +
            self.numeracy_progress
        )
        self.total_score = total
        self.grade = self.get_grade(total)
        self.save()

    def get_grade(self, score):
        if 97 <= score <= 100:
            return "A+"
        elif 93 <= score < 97:
            return "A"
        elif 90 <= score < 93:
            return "A-"
        # Add other grade ranges here...
        else:
            return "F"

    def save(self, *args, **kwargs):
        self.calculate_total_and_grade()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.trainee} - {self.grade}"