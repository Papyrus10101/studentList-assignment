let student = [ 
    { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },

    { name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },


    { name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },

    { name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];


function studentWithHighestMarks(array) {
    
    let highestMark = 0;
    let highestStudent = "";

    array.forEach((student) => {
        let mark = student.marks.reduce ((acc, val)=> acc + val , 0);
        if  (mark > highestMark){
            highestMark = mark
            highestStudent = student.name
        }

    });

        return;
    // return student name
    }
    
    studentWithHighestMarks(student)

function minimumValue(array) {
    let minimumValue = array.reduce(function(acc, cV) {
    return acc < cV ? acc : cV;
    }, Infinity);
    
    
    return; 
    // return a number
    }
 
minimumValue([20, -2, 4, -11, 0, 25])



function lengthOfString(string) {
        
    let stringCount = string.length;
    
    return;
    
    // return a number
}

lengthOfString("helloworld")