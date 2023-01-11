import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

const Question = list({
  fields: {
    text: text({ validation: { isRequired: true } }),
    quizz: relationship({ ref: "Quizz.questions", many: false }),
    choices: relationship({ ref: "Choice.question", many: true }),
    goodPractice: relationship({ ref: "GoodPractice", many: false }),
  },
});

export default Question;
