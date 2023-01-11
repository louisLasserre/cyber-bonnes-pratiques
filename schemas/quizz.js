import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

const Quizz = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    description: text({ validation: { isRequired: false } }),
    questions: relationship({ ref: "Question.quizz", many: true }),
  },
});

export default Quizz;
