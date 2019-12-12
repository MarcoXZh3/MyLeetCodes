const SIZE = 10;


/**
 * Initialize your data structure here.
 */
const Twitter = function() {
  /**
   * Compose a new tweet
   * @param {number}    userId      id of the user
   * @param {number}    tweetId     id of the tweet
   * @return {void}
   */
  this.postTweet = function(userId, tweetId) {
  };

  /**
   * Retrieve the most recent tweet ids in the user's news feed.
   * Each item in the news feed must be posted by users who the user followed or
   * by the user herself. Tweets must be ordered from most recent to least recent.
   * @param {number}    userId      id of the user
   * @return {number[]}             ids of the most recent tweets
   */
  this.getNewsFeed = function(userId) {
  };

  /**
   * Follower follows a followee. If the operation is invalid, it should be a no-op.
   * @param {number}    followerId  id of the follower
   * @param {number}    followeeId  id of the followee
   * @return {void}
   */
  this.follow = function(followerId, followeeId) {
  };

  /**
   * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
   * @param {number}    followerId  id of the follower
   * @param {number}    followeeId  id of the followee
   * @return {void}
   */
  this.unfollow = function(followerId, followeeId) {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0355 - Design Twitter:');

  const twitter = new Twitter();
  console.log(`  const twitter = new Twitter();`);
  twitter.postTweet(1, 5);
  console.log(`  twitter.postTweet(1, 5);`);
  console.log(`  twitter.getNewsFeed(1);  // ${JSON.stringify(twitter.getNewsFeed(1))}`);
  twitter.follow(1, 2);
  console.log(`  twitter.follow(1, 2);`);
  twitter.postTweet(2, 6);
  console.log(`  twitter.postTweet(2, 6);`);
  console.log(`  twitter.getNewsFeed(1);  // ${JSON.stringify(twitter.getNewsFeed(1))}`);
  twitter.unfollow(1, 2);
  console.log(`  twitter.unfollow(1, 2);`);
  console.log(`  twitter.getNewsFeed(1);  // ${JSON.stringify(twitter.getNewsFeed(1))}`);

  if (callback) {
    callback();
  }
};


module.exports = main;
