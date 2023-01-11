import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

const Category = list({
  fields: {
    label: text({ validation: { isRequired: true } }),
    risks: relationship({ ref: "Risk.category", many: true }),
  },
});

export default Category;
