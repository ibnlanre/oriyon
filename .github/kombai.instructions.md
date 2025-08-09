**Project Guidelines**

1. **Tech Stack**

   - Build the application using **React** and **Tailwind CSS**.
   - Ensure the design is **fully mobile-responsive**.
   - For additional UI needs, use **Mantine Components v8**.

2. **File & Folder Conventions**

   - Use **kebab-case** for **all** files and folders, including React components.
   - Organize the project into the following structure:

     - `components/` → All reusable components.
     - `app/` → All pages/routes.
     - `theme/` → Theme configuration.
     - `hooks/` → Custom hooks.
     - `utils/` → Utility/helper functions.
     - `constants/` → Constant values.
     - `public/` → Public assets.
     - `styles/` → Global and shared styles.
     - `types/` → TypeScript types and interfaces.

3. **Code Style & Practices**

   - **Exports**:
     - Always use **named exports**—no default exports.
     - Avoid `export * from ...` syntax.
     - Avoid re-exporting through index files (barrel exports). Do not create index files for that purpose.
   - **Imports**:
     - Import directly from the source file, leveraging TypeScript's path mapping.
     - Avoid **barrel imports** from index files.
     - Avoid `import * as ...`; instead, import specific members verbatim.
   - **Functions**: Prefer **function declarations** over arrow functions.
   - **Types**: Use **TypeScript interfaces** for React props.
   - **SVG Components**: Always give meaningful names to SVG-based components (e.g., `SearchIcon`, not `Component`).
   - **Accessibility**: Ensure all components meet accessibility standards (ARIA labels, semantic HTML).
   - **Styling**:
     - Use Tailwind utility classes over custom CSS where possible.
     - Extract repeated styles into `styles/` if needed.
   - **Testing**: Write unit tests for key components and utilities where applicable.
   - **Performance**: Avoid unnecessary re-renders; use memoization/hooks wisely.
   - **Documentation**: Document complex components and utilities with JSDoc comments.
