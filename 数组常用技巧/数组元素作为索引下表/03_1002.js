var commonChars = function(words) {
    const res = [];
    let minFreq = new Array(26).fill(0);
    for (let i = 0; i < words[0].length; i++) {
        minFreq[words[0].charAt(i).charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    for (let i = 1; i < words.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = 0; j < words[i].length; j++) {
            freq[words[i].charAt(j).charCodeAt() - 'a'.charCodeAt()] += 1;
        }
        for (let j = 0; j < 26; j++) {
            minFreq[j] = minFreq[j] < freq[j] ? minFreq[j] : freq[j];
        }
    }
    for (let i = 0; i < minFreq.length; i++) {
        for (let j = 0; j < minFreq[i]; j++) {
            res.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return res;
};

var commonChars1 = function(A) {
    let minfreq = new Array(26).fill(0);
    for (let i = 0; i < A[0].length; i++) minfreq[A[0].charCodeAt(i) - 97]++;

    for (let j = 1; j < A.length; j++) {

        let freq = new Array(26).fill(0);
        for (let i = 0; i < A[j].length; i++) freq[A[j].charCodeAt(i) - 97]++;
        for (let i = 0; i < 26; i++) {
            minfreq[i] = Math.min(minfreq[i], freq[i]);
        }

    }

    let res = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < minfreq[i]; j++) {
            res.push(String.fromCharCode(i + 97));
        }
    }

    return res;
};

commonChars(["bella","label","roller"]);
