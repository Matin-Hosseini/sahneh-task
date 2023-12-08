// const { ref } = Vue;

const userSvgAlphabetLink = (name) => {
  //prettier-ignore
  const persianAlphabet = [ "ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن", "و", "ه", "ی",
  ];

//   const userName = ref(name);
  const userFirstAlphabet = name.charAt(0);
  const targetLetterIndex = persianAlphabet.findIndex(
    (alphabet) => alphabet === userFirstAlphabet
  );

  //+ 1 is because there is a svg with id of 0 which returns "!" sign for undefined problems
  const svgLink = `./assets/svg/alphabets.svg#${targetLetterIndex + 1}`;

  return svgLink;
};

export default userSvgAlphabetLink;
