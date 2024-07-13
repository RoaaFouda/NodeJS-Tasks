### Question 1

1. Static properties
```js
class student {
 static count=0;

 constructor(name, grade, score){
  this.name = name;
  this.grade = grade;
  this.score = score;
  student.count++;
 }

 static getNumberOfStudents(){
  return student.count;
 }

}


const person = new student('Haya', '3rd', 99);
const person2 = new student('Haya', '3rd', 99);

console.log(student.getNumberOfStudents());
```

2. Private properties
```js
class student {
 #superSecretWord;

 constructor(name, grade, score, superSecretWord){
  this.name = name;
  this.grade = grade;
  this.score = score;
  this.#superSecretWord = superSecretWord;
 }

  getSuperSecretWord(){
  return this.#superSecretWord;
 }

}


const person = new student('Haya', '3rd', 99, "Leviosar");
console.log(person.superSecretWord); // => undefined
console.log(person.getSuperSecretWord()); // => Leviosar
```


3. Setters and Getters
```js
class student {
  
 constructor(name, grade, score){
  this.name = name;
  this.grade = grade;
  this.score = score;
 }

  get Score(){
  return this.score;
 }

  set newGrade(grade){
    this.grade = grade;
    this.score = 0;
  }

}


const person = new student('Haya', 3, 99);
console.log(person.score); // => 99
person.newGrade = 4;
console.log(person.score); // => 0
```


4. Method Chaining
```js
class student {

 constructor(name, grade, score){
  this.name = name;
  this.grade = grade;
  this.score = score;
  this.classes = ["math", "English", "physics"];
 }

  updateScore(newScore){
    this.score = newScore;
    return this;
  }

  AddClass(newClass){
    this.classes.push(newClass);
    return this;
  }

  getScore(){
    return this.score;
  }

}


const person = new student("Haya", "4th", 100);
console.log(person.updateScore(88).AddClass("Programming"));
```
### Question 2
 
    ```js
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce: () => {
                console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
            }
        }

        player.introduce();
    ```
* Since the function inside the object is an arrow function then the `this` keyword will be referring to the global object "window" which will
cause this code to uotput undefined.

    ```js
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce() {
                console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
            }
        }

        player.introduce();
    ```
* In this context, `this` will be referring to the player object.

     ```js
        function introduce() {
            console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
        }
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce
        }

        player.introduce();
     ```
* here, `this` will also be referring to the player object, because it was called as a method of that object.

     ```js
        function introduce() {
            console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
        }
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez"
        }

        introduce();
        introduce.call(player);
    ```
* In the first function call, `this` will be referring to the global object "window". In the second call since we're using the `call` method, then `this` will be referring to the player object as it was passed to the `call` function as an argument.