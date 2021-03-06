# Bank Account

A simple bank account app in which the user can deposit or withdraw money and get a bank statement.

This project was from week 10 of the course at Makers Academy. The objective of this week is to produce professional quality code. The code should be tested, readable, usable, changeable. 

This is the first attempt at this challenge, for the updated and improved version see bank-tech-test-2.

## Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User Stories

I converted the requirements and acceptance criteria into user stories to break requirements down and to give myself an order to work through.

```
As a user,
So that I can deposit money,
I would like to be able to add money to my account

As a user,
So that I can withdraw money,
I would like to be able to take money from my account

As a user,
So that I can review all of my transactions,
I would like to be able view my transactions on a bank statement which includes the date, debit/credit and balance.

As a user,
So that I can understand my bank statement better,
I would like my bank statement to list transactions in order, with the newest being first and oldest last.

```
I then sketched out a map to give myself a high level understanding of how the methods would fit together and what order the program would execute different functions in.

I decided that there would be four main functions. Two would take arguments from the user for either a deposit or a withdrawal. The return of these functions would then passed to the next primary function which would add each transaction as an array, into an array of arrays. Finally in the fourth key method, I iterated over this transaction History array in order to return a statement to the user.

Other functions in the program would deal with formatting where appropriate.

## End Result
![](/images/workingprogram.png)

## Next Steps
- Separate code into different classes where possible.
- Call format date in the same place as adding decimal places?

## Technologies
- JavaScript; language
- Jasmine; test framework
- ESlint; linting
- Karma, Istanbul; code coverage

## Running the app
Simply clone the repository to your local machine.

## To Run
```
npm install
```

### Testing
To execute tests
```
open SpecRunner.html
```










