// https://leetcode.com/problems/queue-reconstruction-by-height/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    let ans = []
    // from tall to short
    people.sort((p1, p2) => p1[0] === p2[0] ? p1[1] - p2[1] : p2[0] - p1[0])
    for (let i = 0; i < people.length; i++) {
        const person = people[i]
        // insert the position according to its second array element
        ans.splice(person[1], 0, person)
    }
    return ans
};
