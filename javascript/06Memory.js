// Primitive always stored in Stack Memory.
let myblog = "divyagautamcsds"
let blogss = myblog
blogss = "mynameisdivya";
console.log(blogss)
console.log(myblog)

// Non-Primitive always stored in Heap Memory.
let UserOne = {
    email : "abc@gmail.com",
    upi : "abe@ybnf"
}
let UserTwo = UserOne
UserTwo.email= "yggfj@nhh.com"
console.log(UserOne);
console.log(UserTwo);

