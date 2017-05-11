/**
 * Created by CongNguyen on 5/10/2017.
 */

Books= new Mongo.Collection('books');
Image = new FS.Collection('image', {
    stores: [new FS.Store.GridFS('image', {})]
});

Books.attachSchema(new SimpleSchema({
    createdAt:{
        type:String,
        label:"created At",
        autoform: {
            afFieldInput: {
                type: 'datetime-local',
                defaultValue: new Date(),
                readonly: true,
                class: 'form-admin',

            }
        },
    },
    name: {
        type: String,
        label: 'Name category ',
        autoform: {
            afFieldInput: {
                type: "text",
                defaultValue: " Good Night Stories for Rebel Girls sd Gos for Rebel Girls",
                // rows: 1,
            }
        },
    },
    paperBack:{
        type: String,
        label: 'Paper Back',
        autoform: {
            afFieldInput: {
                type: "text",
                defaultValue: " English,Vietnamese",
                // rows: 1,
            }
        },
    },
    author:{
        type: String,
        label: "Author",
        autoform: {
            afFieldInput: {
                type: 'select',
                options: function () {
                    return Author.find().fetch().map(function (data) {
                        return {
                            value: data._id,
                            label: data.name,
                        }
                    })
                },
            },
        },
    },
    category:{
        type: [String],
        label: "category",
        autoform: {
            afFieldInput: {
                type: "selectize",
                multiple: true,
                options: function () {
                    return Category.find().fetch().map(function (data) {
                        return {
                            value: data._id,
                            label: data.name,
                        }
                    })
                },
                selectizeOptions: {
                    hideSelected: true,
                    plugins: {
                        "remove_button": {}
                    }
                }
            },
        },
    },
    price:{
        type: Number,
        label: 'price',
    },
    discount:{
        type: Number,
        label: 'Discount',
    },
    savePrice:{
        type: Number,
        label: 'savePrice',
    },
    productDetails:{
        type: [String],
        label: 'Product Details',
    },
    reviewText:{
        type: String,
        label: 'Review ',
        autoform: {
            afFieldInput: {
                type: "text",
                defaultValue: "Wondering if Into the Water could be as good as The Girl on the Train? It's better. A triumph. Paula Hawkins does it again! Into the Water is a moody and chilling thriller that will have you madly turning the pages. A gripping, compulsive read! Fans of Paula Hawkins' The Girl on the Train rejoice: her second novel Into the Water is even better. A brilliantly plotted and fast-paced juggernaut of a read that hurtles to a heart-stopping conclusion. It's like PD James wrote an episode of The Wire... A twisting whodunit that leaves you both gratified and surprised (also the best kind)... Not just a brilliant thriller but also a furious feminist howl...' Stylist 'The prose is powerful and richly descriptive. As the threads of the plot mesh together and the tension builds it develops into a brooding and complex read that deserves to make a splash in its own right:",
                // rows: 1,
            }
        },
    },
    reviewQuote:{
        type: String,
        label: 'Review ',
        autoform: {
            afFieldInput: {
                type: "text",
                defaultValue:"Wondering if Into the Water could be as good as The Girl on the Train",
                // rows: 1,
            }
        },
    },
    Image:{
        type: String,
        label: 'Choose Image',
        optional: true,
        autoform: {
            afFieldInput: {
                type: "fileUpload",
                collection: "Image",
                label: 'Choose Image'
            },
        },
    }








}));

