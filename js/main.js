'use strict';

const titleClickHandler = function (event) {
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    event.preventDefault();
    const clickedElement = this;
    clickedElement.classList.add('active');
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {
    let linkHTML;
    let html = '';

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = 'optArticleSelector';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let i = 0;
    for (let article of articles) {
        /* get the article id */
        const articleId = article.getAttribute('id');
        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        /* get the title from the title element and create HTML of the link */
        if (i === 0) {
            linkHTML = '<li><a href="#' + articleId + '" class="active" ><span>' + articleTitle + '</span></a></li>';
        } else {
            linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        }
        html = html + linkHTML;
        i++;
    }
    /* insert link into titleList */
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}

generateTitleLinks();

