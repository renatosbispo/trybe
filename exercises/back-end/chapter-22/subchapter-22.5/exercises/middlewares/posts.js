const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is post #1',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is post #2',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'This is post #3',
  },
];

const single = {
  exists(req, res, next) {
    const { id } = req.params;

    if (!posts.some(({ id: postId }) => parseInt(id) === postId)) {
      res.status(404).json({ message: 'Post not found.' });
    }

    next();
  },
  retrieve(req, res) {
    const { id } = req.params;

    res
      .status(200)
      .json(posts.find(({ id: postId }) => parseInt(id) === postId));
  },
};

module.exports = {
  single,
};
