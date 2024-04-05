import Page from '../models/Page';
import Block from '../models/Block';

const pageResolvers = {
    Page: {
        blocks: (page: { blocks: any; }) => {
            return Block.find({_id: {$in: page.blocks}});
        },
    },
    Query: {
        getPage: (_: any, {id}: any) => {
            return Page.findById(id);
        },
        getPages: () => {
            return Page.find();
        },
    },
    Mutation: {
        createPage: (_: any, {input}: any) => {
            return Page.create(input);
        },
        updatePage: (_: any, {id, input}: any) => {
            return Page.findByIdAndUpdate(id, input, {new: true});
        },
        deletePage: (_: any, {id}: any) => {
            return Page.findByIdAndDelete(id);
        },
    },
};

export default pageResolvers;