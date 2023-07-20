const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  // ...other pre-existing code here
};

const findPassword = async () => {
    const file = await fetch("passwords.txt");
    const text = await file.text();
    return mostFrequentWord(text);
};

findPassword();

try {
    const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
    const poem2FileName = `poems/${mostFrequentWord(poem1)}.txt`;
  } catch (error) {
    console.log("Something went wrong when loading poem1:", error.stack);
    return; // so we don't try to read the other files and cause more errors
  }