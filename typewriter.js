const sentence = "hello from the otter sliiiiidde";

let print = process.stdout;

const animateText = (string, seconds = 1) => {
  if (string.length === 0) {
    print.write('\n')
    return;
  }
  // for (const char of sentence) {
  setTimeout( () => {
    print.write(string[0]);
    animateText(string.slice(1), seconds)
  }, (seconds * 1000))
  // }
};

animateText(sentence, .1)