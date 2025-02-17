# compress_and_decompress

The goal is to create a method that compress a string by reducing sequences of repeating characters into the character followed by the number of times it repeats consecutively.

Task: In your own words, describe the key parts of your solution and the reasoning behind your approach. You can use comments in your code to explain your thought process. 
Input: The input string will contain only lowercase letters. It might be empty.Output :
"aaabb" → "a3b2"
"abc" → "a1b1c1"
"" → ""

Optionally: Add decompressing method, which reconstructs the original string.
Input: string will contain characters followed by a number indicating how many times the character repeats consecutively. 
Output:
"a3b2" → "aaabb"
"a1b1c1" → "abc"
"" → ""