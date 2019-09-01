function Student(first, last, id, english, maths, science) {
    this.fName = first;
    this.lName = last;
    this.id = id;
    this.markE = english;
    this.markM = maths;
    this.markS = science;
    this.calculateAverage = function () {
        return (this.markE + this.markM + this.markS) / 3;
    }
    this.displayDetails = function () {
        document.write("Student Id: " + this.id + "<br />");
        document.write("Name: " + this.fName + " " + this.lName + "<br />");
        var avg = this.calculateAverage();
        document.write("Average Marks: " + avg + "<br /><br />");
    }
}
var st1 = new Student("Jamila", "fatima", 15, 85, 79, 90);
var st2 = new Student("areeba", "riaz", 23, 75, 80, 82);
var st3 = new Student("arfa", "ali", 4, 93, 89, 90);
var st4 = new Student("soofia", "ali", 11, 55, 63, 45);
st1.displayDetails();
st2.displayDetails();
st3.displayDetails();
st4.displayDetails();


function arduino(name,designer,compny,uses){
return{
    name:"name",
    designer:"designer",
    compny:"compny",
    uses:"uses",
    feature: function(){
        console.log(`this arduino ${this.name} is made by ${this.compny} that is use for${this.uses} `);
    }
}
}

function makeabaya(name,style,color,brand,price){
return{
    name: "name",
    styyle:"style",
    color:"color",
    brand:"brand",
    price:"price",
    advantages :function(){
        console.log(`this abaya${this.name}has ${this.color} its brand is${this.brand} its price${this.price}`)
    }

}
}

