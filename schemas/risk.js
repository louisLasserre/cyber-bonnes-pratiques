import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

const Risk = list({
  fields: {
    label: text({ validation: { isRequired: true } }),
    goodPractice: relationship({ ref: "GoodPractice.risks", many: true }),
    category: relationship({ ref: "Category.risks", many: false }),
  },
});

export default Risk;
