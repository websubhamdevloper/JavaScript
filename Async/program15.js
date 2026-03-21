// Write a function that creates an async iterator to fetch paginated data

function fetchPage(pageNum) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        page: pageNum,
        items: [`Item ${pageNum}-1`, `Item ${pageNum}-2`],
        hasMore: pageNum < 3
      };
      resolve(data);
    }, 1500);
  });
}


async function* fetchAllPages() {
    let pageNum = 1;
    let hasMore = true;

    while (hasMore) {
        const data = await fetchPage(pageNum);
        yield data;
        hasMore = data.hasMore;
        pageNum++;
    }
}

(async () => {
    for await (const page of fetchAllPages()) {
        console.log(page);
    }
})();
