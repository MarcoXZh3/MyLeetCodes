# Longest Valid Parentheses

\<Hard>

Given a string containing just the characters `'('` and `')'`, find the length
of the longest valid (well-formed) parentheses substring.

Example 1:

```
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
```

Example 2:

```
Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
```

## Solution 1: Using Stack

- `'('` triggers push while `')'` triggers pop;
- length of valid substring equals to index of the current `')'` subtracting
  index before its matching `'('`, thus we need to count the indexes;
- specially, index before the first (`0`) is `-1`;
- popping of an empty stack means invalid, thus and reset counting of the index;


## Solution 2: Dynamic Programming

Maintain a list `dp` where each element at index `i`, i.e. `dp[i]`, preserves
the length of the max valid substring until `s[i]`. Two cases are to be noted:
- `...()` - this case satisfies: `dp[i] = dp[i-2] + 2`;
- `...))` and `s[i-dp[i-1]-1]` is `'('` - this case satisfies:
  `dp[i] = dp[i-dp[i-1]-2] + dp[i-1] + 2` (see below).

```
Case 1:                     #  Case 2, with x = i - dp[i-1] - 1:
...   dp[i-2]     dp[i]     #  ...  dp[x-1]                    dp[i]
        |     +~ 2 ~+       #         |         +~ dp[i-1] ~+    |
...     .     (     )       #  ...    .    (    .    ...    )    )
       i-2    i-1   i       #        x-1   x   x+1         i-1   i
```

Note:
- the above `'.'` means anything, i.e. either `'('` or `')'`;
- specially, the `'.'` at `x+1` must be `'('` so that it matches the `')'` at
  `i-1`.


## Solution 3: Bi-Directional Count without Extra Space

- count how many `'('` and how many `')'` separately;
- once the two counts found, a valid substring is found;
- at any time, if more `')'` found than `''`, an invalid substring if found, so
  reset both counters;
- bi-directional makes sure cases like `(()` can still be counted correctly.
