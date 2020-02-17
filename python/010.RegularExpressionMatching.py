class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        if not p:return s == ""
        if len(p) == 1:return len(s) == 1 and (s[0] ==p[0] or p[0] =='.')
        if p[1]!="*":
            if not s:return False
            return (s[0] == p[0] or p[0]=='.') and self.isMatch(s[1:],p[1:])
        while s and (s[0]==p[0] or p[0] == '.'):
            if self.isMatch(s,p[2:]):return True
            s = s[1:]
        return self.isMatch(s,p[2:])

sol = Solution()
print(sol.isMatch('aaa', 'a*b'))