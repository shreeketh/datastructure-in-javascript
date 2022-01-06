/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // If any input is empty, just send false
    if (!s || !p) {
        return false
    }

    // not really need splitting, doing as it is good practice
    var pattern = p.split('')
    var patternPointer = 0
    function matchCharacter(char) {
        if (char == pattern[patternPointer]) {
            // Direct matching character
            patternPointer++;
            return true
        } else if (pattern[patternPointer] == '.') {
            // If we face .
            patternPointer++;
            return true
        } else if (pattern[patternPointer + 1] == '*') {
            // If we face * in the next position
            // For .* we should accept everything including empty string
            if (char != pattern[patternPointer + 2] && pattern[patternPointer + 2] != '.') {
                return false
            }
            patternPointer++
            return true
        } else if (pattern[patternPointer] == '*') {
            // If .* comes in accept everything
            if (pattern[patternPointer - 1] == '.') {
                return true
            } else if (pattern[patternPointer - 1] == char) {
                return true
            } else {
                patternPointer++
                if (char != pattern[patternPointer] && pattern[patternPointer] != '.') {
                    return false
                }
                // Skip * and continue
                return matchCharacter(char)
            }
        }

        return false
    }

    // Store result here
    var result = true

    // If pattern doesn't have . or * , just compare strings :p
    if (!p.includes('.') || !p.includes('*')) {
        return (s == p)
    }

    // Match everything
    for (var i = 0; i < s.length; i++) {
        if (!matchCharacter(s[i]) || patternPointer >= p.length + 1) {
            result = false
            break
        }

    }

    // If pattern doesn't complete
    if (patternPointer < p.length - 1) {
        result = false
    }
    return result
};

