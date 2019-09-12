const buildGraph = function(beginWord, endWord, graph, dict) {
  const queue = [beginWord];
  const visited = {};
  let toVisit = {};
  toVisit[beginWord] = 1;
  let finished = false;
  while (queue.length > 0) {
    for (let k in toVisit) {
      visited[k] = 1;
    }
    toVisit = {};
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const word = queue.shift();
      for (let child of getNextLevel(word, dict)) {
        if (child === endWord) {
          finished = true;
        }
        if (!visited[child]) {
          if (graph[word]) {
            graph[word].push(child);
          } else {
            graph[word] = [child];
          }
        }
        if (!visited[child] && !toVisit[child]) {
          queue.push(child);
          toVisit[child] = 1;
        }
      }
    }
    if (finished) {
      break ;
    }
  }
};

const getNextLevel = function(word, dict) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const re = [];
  for (let i = 0; i < word.length; i++) {
    const char0 = word.charAt(i);
    for (let j = 0; j < letters.length; j++) {
      const char1 = letters.charAt(j);
      if (char0 === char1) {
        continue ;
      }
      const next = word.substring(0, i) + char1 + word.substring(i + 1);
      if (dict[next]) {
        re.push(next);
      }
    }
  }
  return re;
};


const dfs = function(cur, endWord, graph, path, res) {
  path.push(cur);
  if (cur === endWord) {
    res.push(path.slice());
  } else if (graph[cur]) {
    for (let next of graph[cur]) {
      dfs(next, endWord, graph, path, res);
    }
  }
  path.pop();
};


/**
 * BFS to find the shortest distance and stave to map
 * DFS to output paths with the same shortest distance from map
 * @param {string}    beginWord   the 1st word
 * @param {string}    endWord     the 2nd word
 * @param {string[]}  wordList    the dictionary
 * @return {string[][]}           all shortest solutions
 */
const findLadders = function(beginWord, endWord, wordList) {
  const res = [];
  const graph = {};
  const dict = {};
  for (let word of wordList) {
    dict[word] = 1;
  }
  buildGraph(beginWord, endWord, graph, dict);
  dfs(beginWord, endWord, graph, [], res);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0126 - Word Ladder II:');
  [
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
  ].forEach( vs => {
    console.log(`  s1="${vs[0]}", s2="${vs[1]}", dict=[${vs[2].map(s=>`"${s}"`).join(', ')}]`);
    findLadders(vs[0], vs[1], vs[2]).forEach( (e, i, a) => {
      console.log(`  ${i+1}/${a.length}: [${e.map(x=>`"${x}"`)}]`);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
