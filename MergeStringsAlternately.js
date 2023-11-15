/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  var w1 = word1.split("");
  var w2 = word2.split("");
  var result = "";

  for (
    let i = 0;
    i < Math.max(word1.length, word2.length);
    i++) //you can also use word1.length bu this one is more efficient
   {
    if (i < word1.length) {
      result += w1[i];
    }
    if (i < word2.length) {
      result += w2[i];
    }
  }

  return result;
};
