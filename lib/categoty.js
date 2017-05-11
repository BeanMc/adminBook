/**
 * Created by CongNguyen on 5/10/2017.
 */

Category=new Mongo.Collection('category');
Category.attachSchema(new SimpleSchema({
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
                defaultValue: " Fictions, Highlights, Coming soon",
                // rows: 1,
            }
        },
    },
    description: {
        type: String,
        label: 'description ',
        autoform: {
            afFieldInput: {
                type: "text",
                defaultValue: " Best Reads... ",
                // rows: 1,
            }
        },
    },





}));