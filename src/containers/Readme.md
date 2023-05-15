# containers

A container is a statefull components, it usually manages complexe state and uses more than one component:
- A Container do not manage the queries, only modules can.
- A Container is only callable by a modules `src/modules/[ExampleModule]/ExampleModuleComponent.tsx`
- A Container do not  map/parse incoming arrays/object (reserved for the module), it can only provide a way for the module to do that easier.
- A Container can call components or other containers
- A folder `src/containers/__test__/` contains the unit test
