#!/usr/bin/env node
import questions from '../index';
import { getSeriesNumber, getCorrectAnswer } from '../games/brain-progression';

questions(getSeriesNumber, getCorrectAnswer, 'What number is missing in the progression?');
