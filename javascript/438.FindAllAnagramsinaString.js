/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// O(n^2)
var findAnagrams1 = function (s, p) {
    let ans = []
    if (s.length < p.length) {
        return ans
    }
    let pArr = p.split('')
    let hash = {}
    pArr.forEach((str) => {
        hash[str] = hash.hasOwnProperty(str) ? hash[str] + 1 : 1
    })
    for (let i = 0; i <= s.length - p.length; i++) {
        const subArr = s.slice(i, i + p.length).split('')
        let tmp = Object.assign({}, hash)
        let isMatch = true
        for (let j = 0; j < p.length; j++) {
            if (tmp.hasOwnProperty(subArr[j]) && tmp[subArr[j]] > 0) {
                tmp[subArr[j]]--
            } else {
                isMatch = false
                break
            }
        }
        if (isMatch) ans.push(i)
    }
    return ans
};

// Sliding window O(n)
var findAnagrams2 = function (s, p) {
    var res = [],
        left = 0,
        right = 0,
        count = p.length,
        map = {};

    s = s.split('');

    for (let i = 0; i < p.length; i++) {
        map[p.charAt(i)] ? map[p.charAt(i)]++ : map[p.charAt(i)] = 1
    }


    while (right < s.length) {
        if (map[s[right]] > 0) {
            count--
        }
        map[s[right]]--
        right++
        if (count == 0) {
            res.push(left)
        }
        if (right - left == p.length) {
            // already have a window
            // so every loop, both left and right pointer plus one
            if (map[s[left]] >= 0) {
                count++
            }
            map[s[left]]++
            left++
        }
    }

    return res
};
