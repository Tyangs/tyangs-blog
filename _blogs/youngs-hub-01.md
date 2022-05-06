---
title: YoungsHub - 01
date: '2020-05-01T05:35:07.322Z'
---

# YoungsHub 开发小记 - 01
```tsx
  export const getBlogBySlug = (slug: string): BlogInfo => {
    const realSlug = slug.replace(/\.md$/, '');
    const blogPath = path.join(blogsDir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(blogPath, 'utf-8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      slug: realSlug,
      content,
    };
  };
```