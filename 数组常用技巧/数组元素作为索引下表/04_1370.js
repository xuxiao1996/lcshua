var sortString = function(s) {
    let ans = '';
    let freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charAt(i).charCodeAt() - 97] += 1;
    }
    let max = 0;
    for (let i = 0; i < 26; i++) {
        max = freq[i] > max ? freq[i] : max;
    }
    while (max) {
        for (let i = 0; i < 26; i++) {
            if (freq[i] !== 0) {
                ans += String.fromCharCode(i + 97);
                freq[i] -= 1;
            }
        }
        max--;
        if (!max) {
            continue;
        }
        for (let i = 25; i >= 0 ; i--) {
            if (freq[i] !== 0) {
                ans += String.fromCharCode(i + 97);
                freq[i] -= 1;
            }
        }
        max--;
    }
    return ans;

};

var sortString1 = function(s) {
    const counts = new Array(26).fill(0);
    for (let c of s) {
        counts[c.charCodeAt() - 'a'.charCodeAt()]++;
    }

    let res = '';
    while (res.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (counts[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt());
                counts[i]--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            if (counts[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt());
                counts[i]--;
            }
        }
    }

    return res;
};

sortString('aaaabbbbccccdddd')
