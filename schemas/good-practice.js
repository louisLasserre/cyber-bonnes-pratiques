import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

const GoodPractice = list({
  fields: {
    label: text({ validation: { isRequired: true } }),
    risks: relationship({ ref: "Risk.goodPractice", many: true }),
  },
});

export default GoodPractice;
