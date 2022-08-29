/**
 * Barrel file that re-exports all user accessible values
 */

// Export the GlobalInstaller, for user to install into their entire Vue app.
export * from "./GlobalInstaller";

// Named export for users to import the component from this entry point file directly,
// So that they can explicitly define the component import when using inside their SFCs,
// instead of injecting this as a global component available to the entire app.
export * from "./FullscreenLoader.vue";
