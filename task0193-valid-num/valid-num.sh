#!/bin/sh
# Task 0193 - <BASH> Valid Phone Numbers

grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt
