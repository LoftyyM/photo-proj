import dynamic from "next/dynamic";

export const DynamicHeader = dynamic(() => import("./header"), {
  loading: () => <div>Loading header...</div>,
});
export const DynamicFooter = dynamic(() => import("./footer"), {
  loading: () => <div>Loading Footer...</div>,
});
