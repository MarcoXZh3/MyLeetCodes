# Largest Rectangle in Histogram

\<Hard>

Given `n` non-negative integers representing the histogram's bar height where
the width of each bar is `1`, find the area of largest rectangle in the
histogram.
 
```
   ^
8 -|                      6
7 -|                5   +---+
6 -|              +---+ |   |
5 -|              | ####### |         3
6 -|    2         | ####### |   2   +---+
3 -|  +---+   1   | ####### | +---+ |   |
2 -|  |   | +---+ | ####### | |   | |   |
1 -|  |   | |   | | ####### | |   | |   |
0 -|--------------------------------------->
        1     2     3     4     5     6
```

Above is a histogram where width of each bar is `1`, given
`height = [2, 1, 5, 6, 2, 3]`. The largest rectangle is shown in the shaded
area, which has area = `10`.

Example:

```
Input: [2,1,5,6,2,3]
Output: 10
```
