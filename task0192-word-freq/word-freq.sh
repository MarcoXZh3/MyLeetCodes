#!/bin/sh
# Task 0192 - <BASH> Word Frequency


# `cat`: read the textual file as string
# `tr -s`: split into words, 1 word per each line
# `sort`: sort the words/lines
# `uniq -c`: count how many time each unique word occures
# `sort -r`: sort by occurances, in descending order
# `awk '{ print $2, $1 }'`: format the output
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -r | awk '{ print $2, $1 }'
