import { list } from "@keystone-6/core";

import { relationship, text, checkbox } from "@keystone-6/core/fields";

const Choice = list({
  fields: {
    text: text({ validation: { isRequired: true } }),
    quizz: relationship({ ref: "Quizz.questions", many: false }),
    question: relationship({ ref: "Question.choices", many: false }),
    isCorrect: checkbox(),
  },
});

export default Choice;
