#!/usr/bin/env node
import questions from '../index';
import { getRandomValue, getCorrectAnswer } from '../games/brain-gcd';

questions(getRandomValue, getCorrectAnswer, 'Find the greatest common divisor of given numbers.');
