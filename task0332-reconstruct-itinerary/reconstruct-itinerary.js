/**
 * @param {string[][]}    tickets   the ticket list
 * @return {string[]}               the airport list in order
 */
const findItinerary = function(tickets) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0332 - Reconstruct Itinerary:');
  [
    [ ['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO'] ],
    [ ['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL','JFK'], ['ATL','SFO'] ],
  ].forEach( vs => {
    console.log(`  tickets=${JSON.stringify(vs)}`);
    console.log(`  itinerary=${JSON.stringify(findItinerary(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
