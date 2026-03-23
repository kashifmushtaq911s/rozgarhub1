import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "fetch_depts.js",
      "departments.json",
      "lint_report.txt",
      "package-lock.json"
    ]
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
