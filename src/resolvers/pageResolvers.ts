import Page from '../../models/Page';
import Block from '../../models/Block';

const pageResolvers = {
    Page: {
        blocks: (page: { blocks: any; }) => {
            return Block.find({_id: {$in: page.blocks}});
        },
    },
    Query: {
        getPage: (_, { id }) => {
            return Page.findById(id);
        },
    },
};

export default pageResolvers;