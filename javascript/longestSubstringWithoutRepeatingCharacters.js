class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
    let maxLength=0
    for(let i=0;i<s.length;i++){
        let seen = new Set()
        for(let j=i;j<s.length;j++){
            if(seen.has(s[j])) break
            seen.add(s[j])
            maxLength=Math.max(maxLength,(j-i+1))
        }
    }
    return maxLength


    }
}
