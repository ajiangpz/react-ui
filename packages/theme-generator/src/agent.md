Purpose
- Provide a concise checklist the agent must follow when editing this repo (react-ui), especially theme-generator.

Working Rules
- Stay within this repository; do not touch sibling repos unless explicitly asked.
- Preserve existing user edits; never revert unrelated changes.
- Keep changes minimal and targeted; avoid refactors unless requested.
- Use English identifiers/comments; keep comments sparse and meaningful.
- Default to TypeScript/TSX style used in the file; match existing formatting.

Safety & Quality
- Do not introduce console logging into production code; remove debug logs unless user asks. If a log already exists from the user, leave it unless asked otherwise.
- Avoid changing public APIs or CSS variable names unless required by the task; note any such changes to the user.
- When adding CSS variables, ensure they are defined in all required theme sheets (light/dark/common) and follow the `--td-*` naming.
- Keep regex simple and well-scoped; no overly broad patterns.

Process
- Before coding: read the relevant file(s) fully; search before adding new utilities.
- Apply changes with `apply_patch` when reasonable; batch related edits in one patch.
- After edits: check for lint/type issues on touched files (read_lints) and fix if trivial.
- Summarize what changed, why, and where; mention any follow-up steps or tests that were not run.

Testing
- If changes affect UI behavior, suggest running the relevant pages locally; specify any commands if known.

Communication
- Be concise and factual; highlight risks or open questions. Avoid redundant explanations.
