# Container With Most Water

\<Medium>

Given `n` non-negative integers `a1`, `a2`, ..., `an`, where each represents a
point at coordinate `(i, ai)`. `n` vertical lines are drawn such that the two
endpoints of line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which
together with x-axis forms a container, such that the container contains the
most water.

Note: You may not slant the container and n is at least 2.

```
   ^
8 -|         #                             #
7 -|         # ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ # ~ ~ ~ ~ ~ #
6 -|         #     #                       #           #
5 -|         #     #           #           #           #
4 -|         #     #           #     #     #           #
3 -|         #     #           #     #     #     #     #
2 -|         #     #     #     #     #     #     #     #
1 -|   #     #     #     #     #     #     #     #     #
0 -|-------------------------------------------------------->
   0   1     2     3     4     5     6     7     8     9
```

The above vertical lines (by `"#"`) are represent `[1, 8, 6, 2, 5, 4, 8, 3, 7]`.
In this case, the max area of water (under `"~~~"`) the container can contain is
`49`.


Example:

```
Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49
```
