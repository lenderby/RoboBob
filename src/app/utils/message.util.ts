export function evaluateExpression(expression: string): string | undefined {
  const expressionRegex = /^\d+(\.\d+)?((\+|-|\*|\/)\d+(\.\d+)?)*$/;
  if (expressionRegex.test(expression)) {
    const answer =  eval(expression).toString();
    return `${expression} = ${answer}`;
  }
  return; // not a maths expression
}

export function answerGreeting(greeting: string): string | undefined {
  const greetings = [
    'hi',
    'hello',
    'good morning',
    'hey'
  ]
  if (!greetings.includes(greeting)) {
    return; // not a greeting
  }
  const preDefinedMessages = [
    'Hello World!',
    'Hey, how can I help?'
  ];
  const randomIndex = Math.floor(Math.random() * preDefinedMessages.length);
  return preDefinedMessages[randomIndex];
}

export function answerQuestionAboutRoboBob(question: string): string | undefined {
  const questionsAndAnswers = [
    {
      question: 'what is your name',
      answer: 'My name is RoboBob'
    },
    {
      question: 'what can you do',
      answer: 'I can answer questions about myself, and do simple maths'
    },
    {
      question: 'what do you do',
      answer: 'I can answer questions about myself, and do simple maths'
    },
    {
      question: 'what maths',
      answer: 'I can do addition, subtraction, multiplication, and division. Eg. 2*10.5+1'
    },
    {
      question: 'who built you',
      answer: 'I was built by Luke Enderby'
    },
    {
      question: 'who made you',
      answer: 'I was built by Luke Enderby'
    }
  ]

  for (const qa of questionsAndAnswers) {
    if (question.toLowerCase().includes(qa.question.toLowerCase())) {
      return qa.answer;
    }
  }

  return; // not a question about RoboBob
}
