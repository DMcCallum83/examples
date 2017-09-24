// pass by value
function change(b) {
    b=2;
};

var a =1;
change(a);
console.log(a); 

/*
    a is a primitive, and when it's passed to the function
    b became a copy of a's value in a new memory address. so when
    we copy a, change the new value, then log a, it's value remains 
    unchanged, because b's value is in a different memory address
*/

// -----------------------------------------------------------------//

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
};

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

/*
    c is an object so not primitive.  we set c.prop1 to an object and pass
    it to changeObj().  d is a copy of c and points to the same memory 
    location, changes d.prop1 (and therefore c.prop1) as well as adding 
    d.prop2.

    When we log c now because it was passed by reference we see prop1 as
    a function as it was changed in d.
*/