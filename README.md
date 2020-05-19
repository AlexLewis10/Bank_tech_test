# Bank Account

A simple bank account app in which the user can deposit or withdraw money and get a bank statement.

This project was from week 10 of the course at Makers Academy. The objective of this week is to produce professional quality code. The code should be tested, readable, usable, changeable. It should also have good documentation.

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

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

### User Stories

I converted the requirements and acceptance criteria into user stories to make it easier to work with.

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

Technologies
- JavaScript; language
- Jasmine; test framework
- ESlint; linting

### Linting
To install eslint;
 npx eslint --init


