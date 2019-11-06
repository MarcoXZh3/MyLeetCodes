# Peeking Iterator

\<Medium>

Given an `Iterator` class interface with methods: `next()` and `hasNext()`,
design and implement a `PeekingIterator` that support the `peek()` operation --
it essentially `peek()` at the element that will be returned by the next call to
`next()`.

Example:

Assume that the iterator is initialized to the beginning of the list: `[1,2,3]`:
1. Call `next()` gets you `1`, the first element in the list.
2. Now you call `peek()` and it returns `2`, the next element. Calling `next()`
   after that still return `2`.
3. You call `next()` the final time and it returns `3`, the last element.
4. Calling `hasNext()` after that should return `false`.

Follow up: how would you extend your design to be generic and work with all
types, not just integer?
