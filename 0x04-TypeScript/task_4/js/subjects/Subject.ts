namespace Subjects {
    export abstract class Subject {
        protected teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }

        abstract getRequirements(): string;
        abstract getAvailableTeacher(): string;
    }
}