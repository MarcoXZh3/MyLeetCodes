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


    def guessNumber0(self, n: int) -> int:
        low = 1
        high = n
        while low <= high:
            mid = (high + low) // 2
            res = self.guess(mid)
            if res == 0:
                return mid
            elif res < 0:
                high = mid - 1
            else:
                low = mid + 1
        return -1


    def guessNumber(self, n: int) -> int:
        low = 1
        high = n
        while low <= high:
            mid1 = low + (high - low) // 3
            mid2 = high - (high - low) // 3
            res1 = self.guess(mid1)
            res2 = self.guess(mid2)
            if res1 == 0:
                return mid1
            if res2 == 0:
                return mid2
            elif res1 < 0:
                high = mid1 - 1
            elif res2 > 0:
                low = mid2 + 1
            else:
                low = mid1 + 1
                high = mid2 - 1
        return -1


if __name__ == '__main__':
    print('Task 0374 - Guess Number Higher or Lower:')
    for vs in [
        [10, 6],
    ]:
        sol = Solution(vs[1])
        print('  n={0}, pick={1}, guess={2}'.format(vs[0], vs[1], sol.guessNumber(vs[0])))
