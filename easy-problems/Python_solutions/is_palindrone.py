# O(n time) , O(1) space
# compare each character starting at begining and the end of the string
# then compare each char 1 inward


def isPalindrome(string):
    p1 = 0
    p2 = len(string) - 1

    while p1 < p2:
        if string[p1] != string[p2]:
            return False
        p1 += 1
        p2 -= 1
    return True
