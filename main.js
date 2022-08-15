import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({

  title: "PCx3.com",

  author: "Stefan Pejcic",

  avatar: "./ps.jpg",

  avatarClass: "full",

  links: [

    { title: "Email", url: "mailto: stefan@pejcic.rs" },

    { title: "GitHub", url: "https://github.com/stefanpejcic" },

  ],

  background: "#fff",

  middlewares: [

    ga(""),

    redirects({

      "iocp-links.html": "iocp_links",

      "rant.html": "rant",

    }),

  ],

});
