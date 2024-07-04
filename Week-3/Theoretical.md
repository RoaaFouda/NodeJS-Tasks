#Theoretical Questions

## Question 1
Compare between the three types of quantifiers in regular expressions (?, +, *)
* ? means that the preceding element is optional, there can be zero or one of it.
* + means that there can be one or more of the preceding element.
* * means that there can be zero or more of the preceding element.

## Question 2
What are the characters that can be represented by \w and \b in a regular expression?
* \w means any lette ror digit or underscores.
* \b means the position between a character and a non-character.

## Question 3
Compare between the Map and WeakMap according to the way they save keys and values.
* Map : the key could be of any type, You can iterate throught the elements, you can get its size.
* WeakMap: the key must be an object, If the key is deleted then the value will also be deleted.

## Question 4
Write an example of a string which matches the following pattern:
```js
const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
```
* 15-09-2030

and write another string that violates the following pattern:
```js
const regex = /^(?!.*\bieee\b).+$/i;
````
* ieee
