function compress(value) {
    // First case came in my mind what if func received empty string
    // Handle edge case for empty input
    if (!value) {
        console.log('')
        return;
    }
    // To count the each character of the string i need to iterate on string value and count 
    // for that I need a hash table
    // Store character frequencies
    let hash = {}
    let result = '';

    // Count each character's occurrences
    for (const char of value) {
        hash[char] = (hash[char] || 0) + 1;
    }

    // After that I was thinking to concat the key and value of the hash obj into final result
    // Build compressed string from character-count pairs
    for (const [char, count] of Object.entries(hash)) {
        result += `${char}${count}`;
    }
    console.log(result)
    return result;
}

function decompress(value) {
    // Same for decompress Handle edge case for empty input
    if (!value) {
        console.log('')
        return;
    }
    result = ''
    // The first approach was for a single digit count but when I pass a15 the func not worked correctly
    // Then I handled for multi digits
    // Traverse the string to extract character and its count
    let i = 0;
    while (i < value.length) {
        const char = value[i];
        i++;

        let count = '';
        // This is the part where I handled the multi digits to check next character is Number or Character
        while (i < value.length && !isNaN(value[i])) {
            count += value[i];
            i++;
        }

        // Expand the character according to its count
        result += char.repeat(Number(count));
    }
    console.log(result)
    return result
}

compress('aaabb');
compress('abc');
compress('');
compress('aaaaaaaaaaaaaaaaabbzzzzzzzzzz');
decompress('a3b2');
decompress('a1b1c1');
decompress('');
decompress('a15b2');
decompress('a100b2');
