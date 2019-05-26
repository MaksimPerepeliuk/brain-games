#!/usr/bin/env node
import questions from '../index';
import { getRandomValue, getCorrectAnswer } from '../games/brain-even';

questions(getRandomValue, getCorrectAnswer, 'Answer "yes" if number even otherwise answer "no".');
