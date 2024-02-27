import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './../components/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'UI-Button',
    component: Button,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        size: {
            control: '',
            options: ['x-small', 'small', 'normal', 'big', 'x-big']
        },
        onClick: { action: 'clicked' }
    },
    args: { title: 'the button' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Title1: Story = {
    args: {
        title: 'Title1'
    }
};

export const Title2: Story = {
    args: {
        title: 'Title2'
    }
};
