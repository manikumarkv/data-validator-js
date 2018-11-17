# data-validator-js


Javascript validations and utility library

Install
----
     npm install --save-dev data-validator-js
Usage
----

## Table of Contents

* [Installation and setup](#installation)
    - [Using npm](#installation)
    - [Setup in TS](#setup)
* [Usage](#usage)
    * [String Utilities](#stringutilities)
        + [IsNullOrEmpty(value: string | null | undefined)](#isnullorempty)
        + [IsValidEmail(value: string | null | undefined)](#isvalidemail)
        + [IsValidString(value: string | null | undefined)](#isvalidstring)
        + [IsValidPhoneNumber(value: string)](#isvalidphonenumber)
        + [IsValidNumber(value: string)](#isvalidnumber)
        + [IsValidAlphaNumeric(value: string)](#isvalidalphanumeric)
        + [IsValidAlphaNumericWithSpecialChars(value: string)](#isvalidalphanumericwithspecialchars)

## Installation

```
npm install --save-dev data-validator-js
```

## Setup

``` Typescript

import { StringUtilities } from "data-validator-js";

```
"StringUtilities" has all the validation methods

## IsNullOrEmpty

### IsNullOrEmpty(value: string | null | undefined): boolean

```Typescript

import { StringUtilities } from "data-validator-js";

let isValidString = StringUtilities.IsNullOrEmpty('test string') // false
isValidString = StringUtilities.IsNullOrEmpty('123') // false
isValidString = StringUtilities.IsNullOrEmpty('') // true
isValidString = StringUtilities.IsNullOrEmpty(' ') // true
isValidString = StringUtilities.IsNullOrEmpty(null) // true

```

## IsValidEmail

### IsValidEmail(value: string | null | undefined): boolean 

```Typescript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValidEmail = StringUtilities.IsValidEmail('test string') // false
isValidEmail = StringUtilities.IsValidEmail('123') // false
isValidEmail = StringUtilities.IsValidEmail('') // false
isValidEmail = StringUtilities.IsValidEmail('xyz123@gmail.com') // true
isValidEmail = StringUtilities.IsValidEmail('xyz@xyx.abc') // true

```

## IsValidString

### IsValidString(value: string | null | undefined): boolean

```Typescript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidString('test string') // true
isValid = StringUtilities.IsValidString('123') // false
isValid = StringUtilities.IsValidString('') // false
isValid = StringUtilities.IsValidString('xyz123@gmail.com') // false
isValid = StringUtilities.IsValidString('xyz@xyx.abc') // false

```

## IsValidPhoneNumber

### IsValidPhoneNumber(value: string): boolean

```Typescript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('test') // false
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('123') // false
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('1234567890') // true
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('') // false
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber(null) // false

```

## IsValidNumber

### IsValidNumber(value: string): boolean

```Typescript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidNumber('test') // false
isValid = StringUtilities.IsValidNumber('123') // true
isValid = StringUtilities.IsValidNumber(1235) // true
isValid = StringUtilities.IsValidNumber('ee1234567890') // false
isValid = StringUtilities.IsValidNumber('') // false
isValid = StringUtilities.IsValidNumber(null) // false

```

#IsValidAlphaNumeric

### IsValidAlphaNumeric(value : string): boolean

```Typescript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidAlphaNumeric('test') // false
isValid = StringUtilities.IsValidAlphaNumeric('12rf3') // true
isValid = StringUtilities.IsValidAlphaNumeric('4545kk') // true
isValid = StringUtilities.IsValidAlphaNumeric('ee1234567890') // true
isValid = StringUtilities.IsValidAlphaNumeric('') // false
isValid = StringUtilities.IsValidAlphaNumeric(null) // false

```
## IsValidAlphaNumericWithSpecialChars

### IsValidAlphaNumericWithSpecialChars(value: string): boolean

```Typescript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('test') // false
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('12rf3') // false
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('4545kk*&') // true
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('ee12345$%^6789*0') // true
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('3454546') // false
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars(null) // false

```