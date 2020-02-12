// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

// Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

// Example 1:

// Input: "eceba"
// Output: 3
// Explanation: tis "ece" which its length is 3.
// Example 2:

// Input: "ccaabbb"
// Output: 5
// Explanation: tis "aabbb" which its length is 5.

var lengthOfLongestSubstringTwoDistinct1 = function (s) {
    if (s.length < 2) {
        return s.length
    }
    let max = 0
    let hash = {} // store the count
    let i = 0
    let j = 0
    while (i < s.length && j < s.length) {
        hash[s.charAt(i)] = hash[s.charAt(i)] ? hash[s.charAt(i)] + 1 : 1
        while (Object.entries(hash).length > 2) {
            if (hash[s.charAt(j)] > 1) {
                hash[s.charAt(j)]--
            } else {
                delete hash[s.charAt(j)]
            }
            j++
        }
        max = Math.max(max, i - j + 1)
        i++
    }
    return max
}

var lengthOfLongestSubstringTwoDistinct2 = function (s) {
    let hash = {} // store the index
    let max = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        hash[i] = hash.hasOwnProperty(i) ? hash[i] + 1 : 1
        i++
        if (Object.entries(hash).length > 2) {
            let left = s.length
            for (let key in hash) {
                left = Math.min(left, hash[key])
            }
            delete hash[left]
            start = left + 1
        }
        max = Math.max(max, i - start)
    }
    return max
}
