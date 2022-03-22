const string= "Привет! как дела?";
const vowels= ["а", "е", "ё", "и", "о", "и", "э", "ю", "я"]
const getVovels= stringToFilter => {
  let extractedVowels="";
  for (let i=0; i<stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();
    if(vowels.includes(currentLetter)) {
      extractedVowels=extractedVowels + currentLetter;
    }
  }
  return extractedVowels;
}

console.log(getVovels(string));