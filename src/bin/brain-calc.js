#!/usr/bin/env node
import questions from '../index';
import { getRandomValue, getCorrectAnswer } from '../games/brain-calc';

questions(getRandomValue, getCorrectAnswer, 'What is the result of the expression?');
