# Two Sum

\<Easy>

Given an array of integers, return indices of the two numbers such that they
add up to a specific target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```


# Solutions

Hint: hash map -- trade speed with space

1. Brutal force with two-level nested iterations -- slowest;
2. Create hash map (1st iteration) and then search `num2` (2nd iteration,
   `target - num1`) -- faster;
3. Create hash map while searching (1 iteration only): return immediately if
   found, otherwise insert key-value pair.
