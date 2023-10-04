namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for Java:
        * Object-oriented programming
        * Java syntax
        * Data structures and algorithms`;
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return `No available teacher`;
            }
        }
    }
}