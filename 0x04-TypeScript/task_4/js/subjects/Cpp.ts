namespace Subjects {
    export class Cpp extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for Cpp:
        * Basic programming concepts
        * Data structures and algorithms
        * Object-oriented programming
        * C++ syntax`;
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return `No available teacher`;
            }
        }
    }
}