import { Cpp, Java, React, cTeacher } from "./subjects";

function printSubjectInfo(subject: Subjects.Subject, teacher: Subjects.Teacher) {
    console.log(subject.constructor.name);
    subject.setTeacher(teacher);
    const requirements = subject.getRequirements();
    const teacherAvailable = subject.getAvailableTeacher();

    console.log(requirements);
    console.log(teacherAvailable);
}

printSubjectInfo(Cpp, cTeacher);
printSubjectInfo(Java, cTeacher);
printSubjectInfo(React, cTeacher);