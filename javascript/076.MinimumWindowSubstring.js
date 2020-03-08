// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let ans = "",
        left = 0,
        right = 0
    let map = {}
    t.split('').forEach(element => {
        if (map.hasOwnProperty(element)) {
            map[element]++
        } else {
            map[element] = 1
        }
    })

    let count = Object.keys(map).length
    //  <= considered about the last subarray match
    while (right <= s.length) {
        // found a valid substring
        if (!count) {
            let current = s[left]
            if (map.hasOwnProperty(current)){
                map[current]++
            }
            if (map[current] > 0) {
                count++
            }
            if (!ans || right - left < ans.length) {
                ans = s.substring(left, right)
            }
            left++
        } else {
            let current = s[right]
            if (map.hasOwnProperty(current)) {
                map[current]--
            }
            if (map[current] === 0) {
                count--
            }
            right++
        }
    }
    return ans
}