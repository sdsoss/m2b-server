import Page from '../models/Page';
import Block from '../models/Block';

const blockResolvers = {
    Block: {
        page: (block: { page: any; }) => {
            return new Promise((resolve, reject) => {
                Page.findById(block.page)
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
        getBlock: (_: any, {id}: any) => {
            return new Promise((resolve, reject) => {
                Block.findById(id)
                    .then((res: any) => {
                        resolve(res);
                    },
                    (err: any) => {
                        reject(err);
                    });
            });
        },
    },
    Mutation: {
        createBlock: (_: any, {pageId, input}: any) => {

            return new Promise((resolve, reject) => {
                Page.findById(pageId)
                    .then((page: any) => {
                        if (!page) {
                            throw new Error('Page not found');
                        }

                        const block = new Block({
                            ...input,
                            page: pageId
                        });

                        block.save().then((res: any) => {
                            resolve(res);
                        }, (err: any) => {
                            reject(err);
                        });
                    },
                    (err: any) => {
                        reject(err);
                    });
            });
        },
        // Move block to another page
        moveBlock: (_: any, {id, pageId}: any) => {
            return new Promise((resolve, reject) => {
                Page.findById(pageId)
                    .then((page: any) => {
                        if (!page) {
                            throw new Error('Page not found');
                        }

                        Block.findByIdAndUpdate(id, {page: pageId}, {new: true})
                            .then((res: any) => {
                                resolve(res);
                            }, (err: any) => {
                                reject(err);
                            });
                    }, (err: any) => {
                        reject(err);
                    });
            });
        },
        updateBlock: (_: any, {id, input}: any) => {
            return new Promise((resolve, reject) => {
                Block.findByIdAndUpdate(id, input, {new: true})
                    .then((res: any) => {
                        resolve(res);
                    }, (err: any) => {
                        reject(err);
                    });
            });
        },
        deleteBlock:  (_: any, {id}: any) => {
            return new Promise((resolve, reject) => {
                Block.findByIdAndDelete(id)
                    .then((res: any) => {
                        resolve(res);
                    }, (err: any) => {
                        reject(err);
                    });
            });
        },
    },
};

export default blockResolvers;