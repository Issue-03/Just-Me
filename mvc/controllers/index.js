const data = require('../../posts_data');

const postData = data.postData;

const recentPostsNo = 5;

const getHomePage = function (req, res) {

    const templateData = {
        title: 'Just Me - My Awesome Blog',
        posts: postData,
        active: 'index',
        categoricalData: data.categoricalData
    }

    res.render('index', templateData);
}

const getBlogPost = function ({ params }, res) {
    let post = postData.find((val) => val.id == params.postid)

    if (!post)
        res.render('404', { title: '404 Page' });

    const templateData = {
        title: post.title,
        post: post,
        uniqueTags: data.uniqueTags,
        recentPosts: postData.slice(0, recentPostsNo),
        categoricalData: data.categoricalData
    }

    res.render('post', templateData);
}

const getFilteredList = function ({ query }, res) {

    let filteredPosts = postData.filter((val) => {
        return val.category == query.category || val.tags.includes(query.tag);
    });

    const templateData = {
        title: 'Just Me - Filtered',
        active: query.category,
        posts: filteredPosts,
        categoricalData: data.categoricalData
    }

    res.render('filter', templateData);
}

const getAboutPage = function (req, res) {

    const templateData = {
        title: 'About Me',
        active: 'about',
        categoricalData: data.categoricalData
    }

    res.render('about', templateData);
}

const getContactPage = function (req, res) {

    const templateData = {
        title: 'Contact',
        active: 'contact',
        categoricalData: data.categoricalData
    }

    res.render('contact', templateData);
}

const get404 = function (req, res) {

    const templateData = {
        title: '404 Page',
        uniqueTags: data.uniqueTags,
        recentPosts: postData.slice(0, recentPostsNo),
        categoricalData: data.categoricalData
    }

    res.render('404', templateData);
}

const redirect404 = function (req, res) {
    res.render('404');
}



module.exports = {
    getHomePage,
    getBlogPost,
    getFilteredList,
    getAboutPage,
    getContactPage,
    get404,
    redirect404,
}
