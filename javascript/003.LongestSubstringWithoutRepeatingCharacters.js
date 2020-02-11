// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
    var len = s.length;
    if (len < 2) {
        return len;
    }
    var start = 0;
    var ans = 0;
    for (var i = 1; i < len; i++) {
        var item = s[i];
        var index = s.lastIndexOf(item, i - 1);
        if (index > -1) {
            ans = Math.max(ans, i - start);
            start = Math.max(start, index + 1);
        }
    }
    ans = Math.max(ans, len - start);
    return ans;
};

// two pointers
var lengthOfLongestSubstring2 = function (s) {
    if (s.length < 2) {
        return s.length
    }
    let max = 0;
    let cache = new Array(26).fill(0);
    for (let i = 0, j = 0; i < s.length; i++) {
        j = (cache[s.charAt(i)] > 0) ? Math.max(j, cache[s.charAt(i)]) : j
        // store the position next to this duplicate item
        // so j will be the pointer from the start of new subarray
        cache[s.charAt(i)] = i + 1
        max = Math.max(max, i - j + 1)
    }
    return max
};

// sliding window
var lengthOfLongestSubstring3 = function (s) {
    if (s.length < 2) {
        return s.length
    }
    let max = 0;
    let cache = new Map()
    let i = 0
    let j = 0
    while (i < s.length && j < s.length) {
        if (!cache.has(s.charAt(j))) {
            cache.set(s.charAt(j), true)
            j++
            max = Math.max(max, j - i)
        } else {
            cache.delete(s.charAt(i))
            i++
        }
    }
    return max
};