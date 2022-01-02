//Define our default eight ball responses
const eightBall = [
    //affirmative answers
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    
    //non-committal answers
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    
    //negative answers
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

//Define some questions for the 8 ball to answer
const questions = [
    "Is my future clear?",
    "Will i be successful?",
    "Will i be great?",
    "Will the new year bring better times?"
];

/**
 * Create a arrow function that will take in the list of questions and responses
 * and generate a random index of each of the arrays. we can then log a random element
 * from each array.
*/
const get8BallResponse = (question, array) => {
    const randomMessageIndex = Math.floor(Math.random() * array.length)
    const randomQuestionIndex = Math.floor(Math.random() * question.length)
    console.log(`Your Question: ${questions[randomQuestionIndex]}`);
    console.log(`Your Answer: ${eightBall[randomMessageIndex]}` + "\n")
}

//Call the function multiple times to test the randomness
get8BallResponse(questions, eightBall);
get8BallResponse(questions, eightBall);
get8BallResponse(questions, eightBall);