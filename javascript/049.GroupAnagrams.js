/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = []
    let cache = new Map()
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split('').sort().join('')
        if (cache.has(str)) {
            ans[cache.get(str)].push(strs[i])
        } else {
            ans.push([strs[i]])
            cache.set(str, ans.length - 1)
        }
    }
    return ans
};