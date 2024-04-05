import Page from '../models/Page';
import Block from '../models/Block';

const pageResolvers = {
    Page: {
        blocks: (page: { blocks: any; }) => {
            return new Promise((resolve, reject) => {
                Block.find({_id: {$in: page.blocks}})
                    .then((res: any) => {
                        resolve(res);
                    },
                    (err: any) => {
                        reject(err);
                    });
            });
        },
    },
    Query: {
        getPage: (_: any, {id}: any) => {
            return new Promise((resolve, reject) => {
                Page.findById(id)
                    .then((res: any) => {
                        resolve(res);
                    } , (err: any) => {
                        reject(err);
                    });
            });
        },
        // Get all pages
        getPages: () => {
            return new Promise((resolve, reject) => {
                Page.find().then((res: any) => {
                    resolve(res);
                }, (err: any) => {
                    reject(err);
                });
            });
        },
    },
    Mutation: {
        createPage: (_: any, {input}: any) => {
            return new Promise((resolve, reject) => {
                Page.create(input).then((res: any) => {
                    resolve(res);
                }, (err: any) => {
                    reject(err);
                });
            });
        },
        updatePage: (_: any, {id, input}: any) => {
            return new Promise((resolve, reject) => {
                Page.findByIdAndUpdate(id, input, {new: true})
                    .then((res: any) => {
                        resolve(res);
                    }, (err: any) => {
                        reject(err);
                    });
            });
        },
        deletePage: (_: any, {id}: any) => {
            return new Promise((resolve, reject) => {
                Page.findByIdAndDelete(id)
                    .then((res: any) => {
                        resolve(res);
                    }, (err: any) => {
                        reject(err);
                    });
            });
        },
    },
};

export default pageResolvers;