# modules

Modules contains the logic, modules also use the namespace pattern.
- Module do not interfere with each other.
- A module has a CSS dedicated file, usually called by the name of the module with "CSS" sufix
- Modules are only called in the `src/App.tsx` file
- Modules can call `src/containers` and `src/components` files
