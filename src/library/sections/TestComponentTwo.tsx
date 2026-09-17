import type {
  SectionConfig,
  YextComponentConfig,
} from "@yext/visual-editor";

type TestComponentTwoProps = {};

export const TestComponentTwo: YextComponentConfig<TestComponentTwoProps> = {
  label: "Test Component Two",
  fields: {},
  defaultProps: {},
  render: () => (
    <section className="px-6 py-12 text-center">
      <p>Test component two</p>
    </section>
  ),
};

export const config: SectionConfig = {
  id: "TestComponentTwo",
  displayName: "Test Component Two",
  description: "A second simple component for testing section library revisions.",
  pageSetTypes: ["ENTITY"],
};
