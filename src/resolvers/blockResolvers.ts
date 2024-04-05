import Page from '../models/Page';
import Block from '../models/Block';

const blockResolvers = {
    Block: {
        page: (block: { page: any; }) => {
            return Page.findById(block.page);
        },
    },
    Query: {
        getBlock: (_: any, {id}: any) => {
            return Block.findById(id);
        },
    },
    Mutation: {
        createBlock: async (_: any, {pageId, input}: any) => {
            const page = await Page.findById(pageId);
            if (!page) {
                throw new Error('Page not found');
            }

            const block = new Block({
                ...input,
                page: pageId
            });

            await block.save();

            return block;
        },
        // Move block to another page
        moveBlock: async (_: any, {id, pageId}: any) => {
            const page = await Page.findById(pageId);
            if (!page) {
                throw new Error('Page not found');
            }

            const block = await Block.findByIdAndUpdate(
                id, {
                    page: pageId
                }, {
                    new: true
                }
            );
            if (!block) {
                throw new Error('Block not found');
            }

            return block;
        },
        updateBlock: (_: any, {id, input}: any) => {
            return Block.findByIdAndUpdate(id, input, {new: true});
        },
        deleteBlock: (_: any, {id}: any) => {
            return Block.findByIdAndDelete(id);
        },
    },
};

export default blockResolvers;