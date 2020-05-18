# Bank Account

A simple bank account app in which the user can deposit or withdraw money and get a bank statement.

This project was from week 10 of the course at Makers Academy. The objective of this week is to produce professional quality code. The code should be tested, readable, usable, changeable. It should also have good documentation.

## Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

### User Stories

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

```


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

•• Notes ••
- Have not currently factored in pence because acceptance criteria only uses .00 for decimal places.
- use number.toFixed(2) to convert number into 2 decimals but only to display to user.

## Setup

### Linting
 npx eslint --init


