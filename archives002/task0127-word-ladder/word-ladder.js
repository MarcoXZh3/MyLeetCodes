/**
 * Breadth first search
 * @param {string}    beginWord   the 1st word
 * @param {string}    endWord     the 2nd word
 * @param {string[]}  wordList    the dictionary
 * @return {number}               how many changes needed
 */
const ladderLength0 = function(beginWord, endWord, wordList) {
  // build the map of transfer words
  const dict = {};
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const key = word.substring(0, i) + '*' + word.substring(i + 1);
      if (dict[key]) {
        dict[key].push(word);
      } else {
        dict[key] = [word];
      }
    }
  }

  // BFS by queues
  const queue = [[beginWord, 1]];
  const visited = {};
  visited[beginWord] = true;
  while (queue.length > 0) {
    const cur = queue.shift();
    // every possible transfer word of the current step
    for (let i = 0; i < cur[0].length; i++) {
      const key = cur[0].substring(0, i) + '*' + cur[0].substring(i + 1);
      for (let word of (dict[key] || [])) {
        if (word === endWord) {
          return cur[1] + 1;
        }
        if (!visited[word]) {
          visited[word] = true;
          queue.push([word, cur[1] + 1]);
        }
      }
    }
  }
  return 0;
};


/**
 * Bidirectional breadth first search
 * @param {string}    beginWord   the 1st word
 * @param {string}    endWord     the 2nd word
 * @param {string[]}  wordList    the dictionary
 * @return {number}               how many changes needed
 */
const ladderLength = function(beginWord, endWord, wordList) {
  const visit = (queue, visited1, visited2) => {
    const cur = queue.shift();
    for (let i = 0; i < beginWord.length; i++) {
      const key = cur[0].substring(0, i) + '*' + cur[0].substring(i + 1);
      for (let word of (dict[key] || [])) {
        if (visited2[word]) {
          return cur[1] + visited2[word];
        }
        if (!visited1[word]) {
          visited1[word] = cur[1] + 1;
          queue.push([word, cur[1] + 1]);
        }
      }
    }
    return -1;
  };

  if (!wordList.includes(endWord)) {
    return 0;
  }

  // build the map of transfer words
  const dict = {};
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const key = word.substring(0, i) + '*' + word.substring(i + 1);
      if (dict[key]) {
        dict[key].push(word);
      } else {
        dict[key] = [word];
      }
    }
  }

  // Queues for bidirectional BFS
  const queue1 = [[beginWord, 1]];
  const queue2 = [[endWord, 1]];
  const visited1 = {};
  const visited2 = {};
  visited1[beginWord] = 1;
  visited2[endWord] = 1;
  while (queue1.length > 0 && queue2.length > 0) {
    let re = visit(queue1, visited1, visited2);
    if (re > -1) {
      return re;
    }
    re = visit(queue2, visited2, visited1);
    if (re > -1) {
      return re;
    }
  }
  return 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0127 - Word Ladder:');
  [
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
    ['a', 'c', ['a', 'b', 'c']],
    ['hot', 'dog', ['hot', 'dog']],
    ['qa', 'sq', ['si', 'go', 'se', 'cm', 'so', 'ph', 'mt', 'db', 'mb', 'sb',
                  'kr', 'ln', 'tm', 'le', 'av', 'sm', 'ar', 'ci', 'ca', 'br',
                  'ti', 'ba', 'to', 'ra', 'fa', 'yo', 'ow', 'sn', 'ya', 'cr',
                  'po', 'fe', 'ho', 'ma', 're', 'or', 'rn', 'au', 'ur', 'rh',
                  'sr', 'tc', 'lt', 'lo', 'as', 'fr', 'nb', 'yb', 'if', 'pb',
                  'ge', 'th', 'pm', 'rb', 'sh', 'co', 'ga', 'li', 'ha', 'hz',
                  'no', 'bi', 'di', 'hi', 'qa', 'pi', 'os', 'uh', 'wm', 'an',
                  'me', 'mo', 'na', 'la', 'st', 'er', 'sc', 'ne', 'mn', 'mi',
                  'am', 'ex', 'pt', 'io', 'be', 'fm', 'ta', 'tb', 'ni', 'mr',
                  'pa', 'he', 'lr', 'sq', 'ye']],
  ].forEach( vs => {
    console.log(`  ladder=${ladderLength(vs[0], vs[1], vs[2])}, s1="${vs[0]}", s2="${vs[1]}"`);
    console.log(`  dict=[${vs[2].map(s=>`"${s}"`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
