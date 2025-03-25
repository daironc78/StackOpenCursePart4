const { test, describe } = require("node:test");
const assert = require("node:assert");

/**
 * UNIT TESTS: Testing the listHelper function.
 */
const listHelper = require("../methods/list-helper");

describe("dummy returns", () => {
  test("dummy returns one", () => {
    const blogs = [];
    const result = listHelper.dummy(blogs);
    assert.strictEqual(result, 1);
  });
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0
    }
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test("when list has empty blog, equals the likes of that", () => {
    const result = listHelper.totalLikes([]);
    assert.strictEqual(result, 0);
  });
});

describe("favorite blog", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f6",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 11,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f7",
      title: "React is the best",
      author: "Dairon Castro",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 4,
      __v: 0
    }
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.favoriteBlog(listWithOneBlog);
    assert.deepStrictEqual(result, {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    });
  });
  
  test("when list has empty blog", () => {
    const result = listHelper.favoriteBlog([]);
    assert.deepStrictEqual(result, {});
  });
});

describe("favorite author blogger", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f6",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 11,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f7",
      title: "React is the best",
      author: "Dairon Castro",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 4,
      __v: 0
    }
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.mostBlogs(listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      blogs: 2
    });
  });
});

describe("favorite author likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f6",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 11,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f7",
      title: "React is the best",
      author: "Dairon Castro",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 4,
      __v: 0
    }
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.mostLikes(listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 23
    });
  });
});