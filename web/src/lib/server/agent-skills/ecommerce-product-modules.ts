import type { AgentSkill } from "@/lib/auth/store-types";
import config from "./ecommerce-product-modules.json";

export const ECOMMERCE_PRODUCT_MODULES_SKILL: AgentSkill = {
    ...config,
    workspaces: ["image", "canvas"],
    action: "generate",
};
