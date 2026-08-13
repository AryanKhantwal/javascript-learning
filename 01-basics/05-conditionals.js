// if
let age = 22;

if (age >= 18) {
    console.log("Adult");
}

// if...else
let number = 10;

if (number > 0) {
    console.log("Positive");
} else {
    console.log("Negative or Zero");
}

// if...else if...else
let marks = 82;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("C");
}

// Nested if
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Need a license");
    }
}