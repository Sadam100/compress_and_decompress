function compress(value) {
    if (!value) {
        console.log('')
        return;
    }
    let hash = {}
    let result = '';

    for (const char of value) {
        hash[char] = (hash[char] || 0) + 1;
    }

    for (const [char, count] of Object.entries(hash)) {
        result += `${char}${count}`;
    }
    console.log(result)
    return result;
}

function decompress(value) {
    if (!value) {
        console.log('')
        return;
    }
    result = ''
    let i = 0;
    while (i < value.length) {
        const char = value[i];
        i++;

        let count = '';
        while (i < value.length && !isNaN(value[i])) {
            count += value[i];
            i++;
        }

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
