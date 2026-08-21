# TendaUI Architecture Notes

This document records the engineering decisions that are most useful to understand, review, and discuss in interviews. The project references TDesign React for part of its component implementation; the goal here is to make TendaUI-specific engineering decisions explicit.

## 1. Repository architecture

The repository uses a pnpm-based Monorepo. Major responsibilities are separated into packages:

- `packages/components`: component source code
- `packages/tendaui-react`: public React package metadata and release output
- `packages/tendaui-icons`: icons
- `packages/utils`: shared utilities
- `packages/tendaui-docs`: Storybook and component documentation
- `packages/tendaui-site`: showcase site
- `packages/theme-generator`: theme-related tooling

Why not keep everything under `src/components`?

1. Packages have different release and dependency boundaries.
2. Documentation and site code should not become runtime dependencies of the component package.
3. Icons and utilities can evolve independently.
4. Workspace dependencies make local development possible without publishing intermediate packages.

## 2. React component state design

A component library must support both controlled and uncontrolled usage where appropriate.

Example:

```tsx
<Input value={value} onChange={setValue} />
<Input defaultValue="hello" />
```

`useControlled` centralizes this behavior so components do not repeatedly implement the same state rules.

Important rules:

- Controlled mode: the prop value is the source of truth.
- Uncontrolled mode: the hook owns internal state.
- `onChange` is still emitted in both modes.
- Falsy defaults such as `false`, `0`, and `""` must not be treated as missing values.

## 3. Complex components

The most valuable components to study are not simple visual wrappers but components with state coordination.

### Form

The Form family is split into modules such as `Form`, `FormItem`, `FormList`, hooks, and context. This allows responsibilities such as field registration, value propagation, validation, and list operations to evolve independently.

Key questions to keep reviewing:

- How are fields registered and unregistered?
- How are initial values applied?
- How does validation propagate?
- Which state changes should rerender the whole form versus a single field?
- How should `FormList` address dynamic field identity?

### Select / Popup / Dialog

These components introduce additional concerns:

- controlled open/close state
- keyboard interactions
- focus management
- Portal rendering
- positioning
- click-outside behavior
- cleanup of global side effects

These are better engineering exercises than adding many simple components.

## 4. TypeScript strategy

TypeScript is used for public component APIs and internal reusable abstractions.

Focus areas:

- Props should express valid component states instead of relying on comments.
- Generic APIs should preserve the user's value type when practical.
- Public types should be exportable without leaking unnecessary internal implementation types.
- Reusable hooks should avoid `any` where a generic can preserve information.

Future work should pay particular attention to Form value typing and component event signatures.

## 5. Build system

The public package is built with Rollup.

Current strategy:

- scan component entry files
- produce ESM output
- externalize React and package dependencies
- emit Source Maps
- build component styles separately
- preserve component-oriented output paths for on-demand imports

The build currently has Rollup-level tree shaking disabled. Therefore TendaUI should describe the current capability as **ESM + component-level imports**, not claim that full tree-shaking optimization has already been completed.

A future build-specific task can benchmark and enable tree shaking after verifying that style side effects remain correct.

## 6. Testing strategy

The repository uses Vitest and React Testing Library, with Playwright available for E2E scenarios.

Testing priority should follow risk rather than component count:

1. shared hooks such as `useControlled`
2. Form state and validation
3. Select / Popup interaction behavior
4. Dialog / Drawer side effects and accessibility behavior
5. stable behavior of basic component Props and events

Copied upstream tests are useful as regression coverage, but TendaUI-specific changes should have TendaUI-specific tests.

## 7. CI and release

The repository already contains GitHub Actions workflows for documentation deployment and package publishing, and uses Lerna / Changesets for version management.

The desired lifecycle is:

```text
change -> test -> build -> version -> publish -> deploy docs
```

Release automation should remain separate from normal pull-request validation so that ordinary code review cannot accidentally publish packages.

## 8. Interview / review checklist

For every important implementation, be able to answer:

- What problem does it solve?
- Why is this abstraction necessary?
- What alternative designs were considered?
- What are the performance implications?
- What are the failure or edge cases?
- How is the behavior tested?
- Which part came from upstream TDesign and which part was changed locally?

If an implementation cannot be explained at this level, it should not be presented as an original project highlight yet.

## Current improvement priorities

### P0

- Keep README and package names consistent with the actual repository.
- Preserve third-party attribution.
- Add tests around locally changed shared hooks.
- Avoid claims that are not backed by the current build configuration.

### P1

- Deepen Form tests and document its state flow.
- Review Select / Popup controlled state and side effects.
- Add pull-request CI after confirming the existing test suite is stable.
- Benchmark bundle output before changing tree-shaking behavior.

### P2

- Improve accessibility coverage.
- Improve type inference for complex components.
- Expand components only when they add a new engineering problem worth studying.
