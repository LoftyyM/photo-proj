import dynamic from "next/dynamic";

export const DynamicHeader = dynamic(() => import("../Components/header"), {
  loading: () => <div>Loading header...</div>,
});
export const DynamicFooter = dynamic(() => import("../Components/footer"), {
  loading: () => <div>Loading Footer...</div>,
});
