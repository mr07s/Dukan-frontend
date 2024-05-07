import RevenueCard from "../../src/components/revenueCard.jsx";

export default {
  component: RevenueCard,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  //   render: () => (
  //     <RevenueCard
  //       primary
  //       label="Button"
  //       title="Revenue Card"
  //       showWorning=""
  //       orderCount="15"
  //       amount="3000"
  //       count="15"
  //     />
  //   ),

  args: {
    label: "Button",
    primary: true,
    title: "Revenue Card",
    showWorning: "",
    orderCount: "15",
    amount: "3000",
    count: "15",
  },
};
export const Secondary = {
  //   render: () => (
  //     <RevenueCard
  //       className="bg-green"
  //       primary
  //       label="Button"
  //       title="Revenue Card"
  //       showWorning=""
  //       orderCount="15"
  //       amount="3000"
  //       count="15"
  //     />
  //   ),
  args: {
    label: "Button",
    primary: true,
    color: "bg-green-500",
    title: "Revenue Card",
    showWorning: "",
    orderCount: "15",
    amount: "3000",
    count: "15",
  },
};
