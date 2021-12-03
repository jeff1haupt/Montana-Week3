const student = {
    name: "Jeff Smith",
    email: "tsmith05471@gmail.com",
    phone: "555-444-3232",
    gradeLevel: "Junior",
    contactStudent: function () {
        console.log(this.name + " can be reached at " + this.email + " or " + this.phone);
    }
}

const student1NickName = "Nicky"

const student2 = {
    name: "Neil Smith",
    email: "nsmith0909@gmail.com",
    phone: "444-555-3232",
    gradeLevel: "Senior",
    contactStudent: function () {
        console.log(this.name + " can be reached at " + this.email + " or " + this.phone);
    }
};
student2.contactStudent();
console.log(student2);
console.log(student.name);

console.log(student["email"]);

student.names = "Kim Tyler";
console.log(student);

const student3 = {};
student3.name = "Joe Smith";
student3.parentName = "Lisa Smith";
console.log(student3);