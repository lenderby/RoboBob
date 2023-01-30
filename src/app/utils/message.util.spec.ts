import { evaluateExpression, answerGreeting, answerQuestionAboutRoboBob } from './message.util';

describe('evaluateExpression', () => {
  it('should return result of a valid mathematical expression', () => {
    const expression = '1+1';
    const result = evaluateExpression(expression);
    expect(result).toBe(`${expression} = 2`);
  });

  it('should return undefined for an invalid mathematical expression', () => {
    const expression = '1+a';
    const result = evaluateExpression(expression);
    expect(result).toBe(undefined);
  });
});

describe('answerGreeting', () => {
  it('should return a pre-defined message for a valid greeting', () => {
    const greeting = 'hi';
    const result = answerGreeting(greeting);
    expect(result).toEqual(jasmine.any(String));
  });

  it('should return undefined for an invalid greeting', () => {
    const greeting = 'wassup';
    const result = answerGreeting(greeting);
    expect(result).toBe(undefined);
  });
});

describe('answerQuestionAboutRoboBob', () => {
  it('should return a pre-defined answer for a valid question about RoboBob', () => {
    const question = 'what is your name';
    const result = answerQuestionAboutRoboBob(question);
    expect(result).toBe('My name is RoboBob');
  });

  it('should return undefined for an invalid question about RoboBob', () => {
    const question = 'what is your favourite colour';
    const result = answerQuestionAboutRoboBob(question);
    expect(result).toBe(undefined);
  });
});
