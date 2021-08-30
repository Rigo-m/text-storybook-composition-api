import NuxtLogo from "./NuxtLogo";

// story config
export default {
  title: `Test`,
  component: NuxtLogo,
};

const Template = (args, { argTypes }) => ({
  components: { NuxtLogo },
  props: Object.keys(argTypes),
  template: `<NuxtLogo v-bind="$props" />`,
});

export const Standard = Template.bind({});
