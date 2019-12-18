class Solution:
    def __init__(self, pick):
        self.pick = pick


    def guess(self, n: int) -> int:
        if (self.pick < n):
            return -1
        elif (self.pick > n):
            return 1
        else:
            return 0


    def guessNumber(self, n: int) -> int:
        pass


if __name__ == '__main__':
    print('Task 0374 - Guess Number Higher or Lower:')
    for vs in [
        [10, 6],
    ]:
        sol = Solution(vs[1])
        print('  n={0}, pick={1}, guess={2}'.format(vs[0], vs[1], sol.guessNumber(vs[0])))
