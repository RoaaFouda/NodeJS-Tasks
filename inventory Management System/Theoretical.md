# Theoretical Questions:

1. Explain the difference between primitive types and reference types in JavaScript.
* Primitive types are like numbers, strings and booleans. They are stored directly in the stack adn they have a fixed aize.
* Reference types are like arrays and objects they don't have a fixed size and therefore, aren't stored in the stack. They are stored in the heap
and in the stack thres's a pointer to where they are in the heap.

2. Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.
* in function declaration you can call the function before its definetion bacause it's entirly hoisted. It's code is as follows:

``` 
greet();
function greet() {
       console.log("Hai");
}

```

* In funcion expression, the function is part of a bigger expression like assigning it to a variable, then only the variable is hoisted. The function itself isn't hoisted which means that it can't be called bafore it's created. It's code is as follows:

```

var hai = function(){
    console.log("Holaa");
}
hai();

```

3. Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?
A pure function is one that is deterministic which means that it gives the same output every time the same input is passed to it and it only modifies variables or any other elements that were created in it. it doesn't have effect on anything outside of it except what it returns.

4. Write down the array methods that you have studied and classify them to destructive and not destructive.
* Map --> Not Destructive
* Filter --> Not Destructive
* Reduce --> Not Destructive
* Sort --> Destructive
* Splice --> Destructive
