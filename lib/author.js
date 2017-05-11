/**
 * Created by CongNguyen on 5/10/2017.
 */

Author= new Mongo.Collection('author');
Author.attachSchema(new SimpleSchema({
    createdAt: {
        type: String,
        label: "Created At",
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
        label: 'Name Author ',
        autoform: {
            afFieldInput: {
                label: "notice",
                type: "text",
                defaultValue: " PAULA HAWKINS",

                // rows: 1,
            }
        },
    },
    about: {
        type: String,
        label: 'About Author ',
        autoform: {
            afFieldInput: {
                label: "notice",
                type: "text",
                defaultValue: " PAULA HAWKINS worked as a journalist for fifteen years before turning her hand to fiction. Born and brought up in Zimbabwe, Paula moved to London in 1989 and has lived there ever since. Her first thriller, The Girl on the Train, has been a global phenomenon, selling almost 20 million copies worldwide. Published in over forty languages, it has been a No.1 bestseller around the world and was a No.1 box office hit film starring Emily Blunt. Into the Water is her second stand-alone thriller.show more",
                // rows: 1,
            }
        },
    },



}));

