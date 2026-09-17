import type {
  SectionConfig,
  YextComponentConfig,
} from "@yext/visual-editor";

type TestComponentProps = {};

export const TestComponent: YextComponentConfig<TestComponentProps> = {
  label: "Test Component",
  fields: {},
  defaultProps: {},
  render: () => (
    <section className="px-6 py-12 text-center">
      <p>Test component</p>
    </section>
  ),
};

export const config: SectionConfig = {
  id: "TestComponent",
  displayName: "Test Component",
  description: "A simple component for testing section library revisions.",
  pageSetTypes: ["ENTITY"],
};
