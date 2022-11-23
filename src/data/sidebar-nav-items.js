export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Assign",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/assign",
    },
    {
      title: "Add New Document",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/prepare-document",
    },
    {
      title: "Review Document",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
     }
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
