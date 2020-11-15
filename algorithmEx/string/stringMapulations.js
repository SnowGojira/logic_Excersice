//1.查找元音字母
//Input: “hello”  Output: 2
function findVowels(str) {
    //edge case
    if (str === null) return 0;
    //main logic
    let sum = 0;
    let vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            sum++;
        }
    }
    return sum;
}

console.log(findVowels("hello"));

//2.反转字符串
//Input: “hello” Output: “olleh”
function reverseStr(str) {
    return str.split('').reverse().join('');
}
//console.log(reverseStr("hello"));

//3.反转句子
//Input: “Trees are beautiful”
//Output: “beautiful are Trees”
function reverseSentence(str) {
    return str.split(' ').reverse().join(' ');
}
//console.log(reverseSentence("Trees are beautiful"));

//4- 回型文
//Input: “ABCD”, “DABC” (rotate one char to the right)
//Output: true
function rotationString(str) {

}

//5- 去重
//Input: “Hellooo!!”
///Output: “Helo!”
function removeDuplicate(str) {
    let obj = {};
    for (let el of str) {
        obj[el] = true;
    }
    //console.log(obj);
    let string = '';
    for (let a in obj) {
        string += a;
    }
    return string
}

//console.log(removeDuplicate('Hellooo!!'));

//6- 查找重复最多的字母. 
//Input: “Hellooo!!”
//Output: ‘o’
function findMostRepeated(str) {
    let obj = {};
    for (let el of str) {
        if (obj[el]) obj[el]++;
        else if (!obj[el]) obj[el] = 1;
    }
    let max = 0;
    for (let a in obj) {
        if (max < obj[a]) max = obj[a];
    }
    for (let a in obj) {
        if (max === obj[a]) return a;
    }
}

// console.log(findMostRepeated("Hellooo!!"));

//7- Capitalize the first letter of each word in a sentence. Also, remove any 
//extra spaces between words. 
//Input: “trees are beautiful”
//Output: “Trees Are Beautiful”
//Input: “ trees are beautiful ”
//Output: “Trees Are Beautiful”
function capitalizeSentence(str) {
    let array = str.split(' ');
    let sentence = [];
    for (let el of array) {
        if (el) sentence.push(el);
    }
    let sen = sentence.map(str => {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        str = array.join('');
        return str;
    })
    return sen.join(' ');
}

//console.log(capitalizeSentence(" trees are beautiful "));

// 8- Detect if two strings are anagram of each other. A string is an 
// anagram of another string if it has the exact same characters in any 
// order.

function anagram(str1, str2) {
    let obj = {}
    for (let char of str1) {
        obj[char] = true;
    }

    for (let char of str2) {
        if (!obj[char]) return false;
    }

    return true;
}

//console.log(anagram('abcd', 'abdc'));

//9-回形文
function palindrome(str) {

}