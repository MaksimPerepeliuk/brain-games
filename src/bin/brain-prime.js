#!/usr/bin/env node
import questions from '../index';
import { getRandomValue, getCorrectAnswer } from '../games/brain-prime';

questions(getRandomValue, getCorrectAnswer, 'Answer "yes" if given number is prime. Otherwise answer "no".');
