namespace Subjects {
    export class React extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for React:
        * HTML and CSS
        * JavaScript
        * React concepts and syntax`;
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return `No available teacher`;
            }
        }
    }
}