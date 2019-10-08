# Trapping Rain Water

\<Hard>

Given `n` non-negative integers representing an elevation map where the width of
each bar is `1`, compute how much water it is able to trap after raining.

```
   ^
3 -|                              #
2 -|              #  ~~~ ~~~ ~~~  #   #  ~~~  #
1 -|      #  ~~~  #   #  ~~~  #   #   #   #   #   #
0 -|------------------------------------------------->
      0   1   2   3   4   5   6   7   8   9  10  11
```

The above elevation map is represented by array
`[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`. In this case, `6` units of rain water
(`~` section) are being trapped.

Example:

```
Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
```
