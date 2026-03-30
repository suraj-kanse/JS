In JavaScript, there are three main ways to reserve space in memory-

-- const (Constant): Use this for values that should never change once they are set. If you try to overwrite a const value later, JavaScript will throw a strict error.
-- let: Use this for values that might change or update later on. For example, a user might decide to change their email address or update their password.
-- var: The old way of declaring variables. Never use this anymore.

Why Should We Stop Using var?
In older JavaScript code, everyone used var. But it had a major flaw: it doesn't respect "Block Scope".
A block scope is just the area between curly braces {}. If one programmer created a var accountPassword at the top of a file, and another programmer accidentally created another var accountPassword inside an if statement block, the second one would overwrite the first one everywhere! This caused massive, hard-to-track bugs. let and const were introduced to fix this block scope issue perfectly.
