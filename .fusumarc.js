module.exports = {
  meta: {
    url: 'https://20yy-mm-dd-xxx-slide.github.io',
    name: 'SLIDE_NAME',
    author: 'kaave',
    description: 'slide description',
    thumbnail: 'https://20yy-mm-dd-xxx.github.io/thumbnail.jpg',
    siteName: 'siteName',
    sns: ['twitter'],
    repositoryUrl: 'https://github.com/kaave/20yy-mm-dd-xxx-slide',
  },
  slide: {
    loop: false,
    sidebar: true,
    targetBlank: true,
    showIndex: false,
    isVertical: false,
    code: {
      languages: ['javascript', 'typescript', 'markup', 'scss', 'css', 'json'],
      plugins: ['line-numbers'],
      theme: 'tomorrow',
    },
    chart: false,
    math: false,
  },
  extends: {
    js: '',
    css: './slides/styles.css',
  },
  build: {
    ssr: true,
  },
};
