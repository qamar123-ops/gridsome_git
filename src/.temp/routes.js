export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Tag.vue")
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: () => import(/* webpackChunkName: "page--src-templates-documentation-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs-vue-components-in-markdown-md" */ "F:\\xampp\\htdocs\\gridsome_git\\docs\\vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\pages\\Blog.vue")
  },
  {
    path: "/what-i-ate-for-breakfast/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/top-5-static-site-generators-in-vue/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/vue-vs-react-comparison/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/mac-pro-2019-review/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/how-to-get-better-at-coding/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/introduction-to-gridsome/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/freelance-vs-full-time-work/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/design-for-developers/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\templates\\Post.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src-pages-docs-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\pages\\Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "F:\\xampp\\htdocs\\gridsome_git\\src\\pages\\404.vue")
  }
]

