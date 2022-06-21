import { Response } from 'express';
import {
  catchAsync,
  getGlobalArticlesQuery,
  shallowCopy,
} from '@assignment/utils';
import { Article, User } from '@assignment/models';
import { IAuthRequest, Types_Methods_Articles } from '@assignment/types';
import {
  getErrorResponse,
  getFeedArticlesPipeline,
  getFormattedArticle,
} from '@assignment/actions';

type IGetGlobalArticlesRequest = {
  query: Types_Methods_Articles;
} & IAuthRequest;

interface IUpdateArticlePayload {
  title?: string;
  description?: string;
  body?: string;
}

class ArticlesController {
  getGlobal = catchAsync(
    async (req: IGetGlobalArticlesRequest, res: Response) => {
      const { query, username } = req;
      
      const findQuery = getGlobalArticlesQuery(query);

      const articlesRes = await Article.find(findQuery)
        .skip(query.offset)
        .limit(query.limit)
        .sort({ createdAt: -1 });

      const articles = [];

      articlesRes.forEach((item) => {
        const clonedItem = shallowCopy(item);
        const article = getFormattedArticle({ ...clonedItem, username });

        articles.push(article);
      });

      const articlesCount = await Article.countDocuments(findQuery)
        .skip(query.offset)
        .limit(query.limit);

      const globalArticlesRes = {
        articles,
        articlesCount,
      };

      res.status(200).json(globalArticlesRes);
    }
  );

  getFeed = catchAsync(async (req, res) => {
    const { username, query } = req;

    const followedUsersArticles = await User.aggregate(
      getFeedArticlesPipeline(username)
    )
      .skip(query.offset * 1 || 0)
      .limit(query.limit * 1 || 20)
      .sort({ createdAt: -1 });

    if (!followedUsersArticles.length) {
      return res.status(200).json({ articles: [], articlesCount: 0 });
    }

    const clonedArticles = shallowCopy(followedUsersArticles[0].articles);
    const formattedArticles = clonedArticles.map((article) =>
      getFormattedArticle({ ...article, username })
    );

    res.status(200).json({
      articles: formattedArticles,
      articlesCount: formattedArticles.length,
    });
  });

  getArticle = catchAsync(async (req, res) => {
    const {
      params: { slug },
      username,
    } = req;

    const articleRes = await Article.findOne({ slug });

    if (articleRes === null) {
      throw getErrorResponse(422, 'No article has been found');
    }

    const clonedArticle = shallowCopy(articleRes);
    const article = getFormattedArticle({ ...clonedArticle, username });

    res.status(200).json({ articles: [article], articlesCount: 1 });
  });

  updateArticle = catchAsync(async (req, res) => {
    const {
      body: { title, description, body },
      params: { slug },
      username,
    } = req;

    const updatePayload: IUpdateArticlePayload = {};
    if (title) updatePayload.title = title;
    if (description) updatePayload.description = description;
    if (body) updatePayload.body = body;

    const articleRes = await Article.findOneAndUpdate(
      { authorUsername: username, slug },
      updatePayload,
      { new: true }
    );

    if (articleRes === null) {
      throw getErrorResponse(
        422,
        'No article has been found with the provided credentials'
      );
    }

    const clonedArticle = shallowCopy(articleRes);

    const article = getFormattedArticle({ ...clonedArticle, username });
    res.status(200).json(article);
  });

  create = catchAsync(async (req: IAuthRequest, res: Response) => {
    const { title, description, body, tagList } = req.body;
    const { username } = req;

    const slug = `${title.split(' ').join('-')}-1`;

    const newArticle = new Article({
      slug,
      authorUsername: username,
      title,
      description,
      body,
      tagList,
      favorites: [],
    });

    try {
      const savedArticle = await newArticle.save();

      const clonedArticle = shallowCopy(savedArticle);

      const article = getFormattedArticle({ ...clonedArticle, username });
      res.status(201).json(article);
    } catch (err) {
      if (err.code === 11000 && err.keyValue.slug) {
        res.status(422).json({
          message: 'An article with the provided title is already exist',
        });
      }
    }
  });

  deleteArticle = catchAsync(async (req, res) => {
    const {
      params: { slug },
      username,
    } = req;

    const deleteRes = await Article.findOneAndDelete({
      slug,
      authorUsername: username,
    });

    if (deleteRes === null) {
      throw getErrorResponse(
        422,
        'No article has been found with the provided credentials'
      );
    }

    res.status(200).json({ message: 'OK' });
  });
}

const controller = new ArticlesController();

export default controller;
