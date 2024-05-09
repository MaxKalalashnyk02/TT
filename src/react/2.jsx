const CensoredText = ({ badWords, children }) => {
  const isBadWord = (word) => badWords.some(badWord => badWord.toLowerCase() === word.toLowerCase());

  const censorText = (text) => {
    const words = text.split(' ');

    const censoredWords = words.map((word, index) => {
      if (isBadWord(word)) {
        return "*".repeat(word.length);
      } else {
        return word;
      }
    });

    return censoredWords.join(' ');
  };

  return <div>{censorText(children)}</div>;
};

export default CensoredText;
