let sentence = "This dinner is bad!";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
regex = "not.*?bad";
sentence.replace()
if (wordNot < wordBad && wordBad !== -1 && wordNot !== -1) {
  let toReplace = sentence.match(regex)[0]
  sentence1 = sentence.replace(toReplace, "good");
  console.log(sentence1);
} else {
  console.log(sentence);
}
