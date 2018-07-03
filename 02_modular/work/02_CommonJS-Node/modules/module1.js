const prefix = 'http://loacalhost:3000/';

const newsUrl = prefix + 'news';
const commentsUrl = prefix + 'comments';

/*
  暴露模块中的内容，exports
  一个一个的暴露
 */
exports.newsUrl = newsUrl;
exports.commentsUrl = commentsUrl;