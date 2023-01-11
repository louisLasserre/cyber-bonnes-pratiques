var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core7 = require("@keystone-6/core");

// schemas/bad-practice.js
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");
var import_access = require("@keystone-6/core/access");
var BadPractice = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    title: (0, import_fields.text)({ validation: { isRequired: true } }),
    slug: (0, import_fields.text)({ isIndexed: "unique", isFilterable: true }),
    content: (0, import_fields.text)()
  }
});

// schemas/category.js
var import_core2 = require("@keystone-6/core");
var import_fields2 = require("@keystone-6/core/fields");
var Category = (0, import_core2.list)({
  fields: {
    label: (0, import_fields2.text)({ validation: { isRequired: true } }),
    goodPractices: (0, import_fields2.relationship)({ ref: "GoodPractice.category", many: true }),
    risks: (0, import_fields2.relationship)({ ref: "Risk.category", many: true })
  }
});

// schemas/good-practice.js
var import_core3 = require("@keystone-6/core");
var import_fields3 = require("@keystone-6/core/fields");
var GoodPractice = (0, import_core3.list)({
  fields: {
    label: (0, import_fields3.text)({ validation: { isRequired: true } }),
    category: (0, import_fields3.relationship)({ ref: "Category.goodPractices", many: false }),
    risks: (0, import_fields3.relationship)({ ref: "Risk.goodPractice", many: true })
  }
});

// schemas/question.js
var import_core4 = require("@keystone-6/core");
var import_fields4 = require("@keystone-6/core/fields");
var Question = (0, import_core4.list)({
  fields: {
    text: (0, import_fields4.text)({ validation: { isRequired: true } }),
    quizz: (0, import_fields4.relationship)({ ref: "Quizz.questions", many: false }),
    choices: (0, import_fields4.relationship)({ ref: "Choice.question", many: true }),
    goodPractice: (0, import_fields4.relationship)({ ref: "GoodPractice", many: false })
  }
});

// schemas/quizz.js
var import_core5 = require("@keystone-6/core");
var import_fields5 = require("@keystone-6/core/fields");
var import_access2 = require("@keystone-6/core/access");
var Quizz = (0, import_core5.list)({
  access: import_access2.allowAll,
  fields: {
    title: (0, import_fields5.text)({ validation: { isRequired: true } }),
    description: (0, import_fields5.text)({ validation: { isRequired: false } }),
    questions: (0, import_fields5.relationship)({ ref: "Question.quizz", many: true })
  }
});
var quizz_default = Quizz;

// schemas/risk.js
var import_core6 = require("@keystone-6/core");
var import_fields6 = require("@keystone-6/core/fields");
var Risk = (0, import_core6.list)({
  fields: {
    label: (0, import_fields6.text)({ validation: { isRequired: true } }),
    goodPractice: (0, import_fields6.relationship)({ ref: "GoodPractice.risks", many: true }),
    category: (0, import_fields6.relationship)({ ref: "Category.risks", many: false })
  }
});

// keystone.ts
var keystone_default = (0, import_core7.config)({
  db: { provider: "sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true
  },
  lists: { Quizz: quizz_default }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
