/**
 * Created by CongNguyen on 5/10/2017.
 */
AdminConfig = {
    name: "books",
    collections: {
        Author: {
            icon: "commenting ",
            color: 'red',
            tableColumns: [
                {label: "createdAt", name: 'createdAt'},
                {label: "name", name: 'name'},
                {label: "about", name: 'about'},
            ]
        },
        Category: {
            icon: "book",
            color: 'blue',
            tableColumns: [
                {label: "createdAt", name: 'createdAt'},
                {label: "name", name: 'name'},
                {label: "description", name: 'description'},
            ]
        },
        Books: {
            icon: "book",
            color: 'green',
            tableColumns: [
                {label: "createdAt", name: 'createdAt'},
                {label: "name", name: 'name'},
                {label: "author", name: 'author'},
            ]
        }
    }

};






