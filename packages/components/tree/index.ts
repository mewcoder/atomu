import _Tree from "./src/tree.vue";
import { withInstall } from "atomu-utils";

const Tree = withInstall(_Tree);

export default Tree;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ATree: typeof Tree;
  }
}
