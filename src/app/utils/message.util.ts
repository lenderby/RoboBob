export function evaluateExpression(expression: string): number | undefined {
  const expressionRegex = /^\d+(\.\d+)?((\+|-|\*|\/)\d+(\.\d+)?)*$/;
  if (expressionRegex.test(expression)) {
    return eval(expression);
  }
  return;
}

export function answerGreeting(greeting?: string): string | undefined {
  const preDefinedMessages = [
    'Hello World!',
    'How are you today?',
    'Have a great day!'
  ];
  const randomIndex = Math.floor(Math.random() * preDefinedMessages.length);
  return preDefinedMessages[randomIndex];
}
