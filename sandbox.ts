// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();


async function getLists() {
  const url1 = 'https://a.klaviyo.com/api/lists';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/vnd.api+json',
      revision: '2024-10-15',
      Authorization: 'Klaviyo-API-Key pk_9088750e0561af38bd54645416dc03ae49'
    }
  };

  return async function* (url: string) {
    let next_link: string | undefined = url;
    let items: any[] = [];
    do {
      const response = await fetch(url, options);
      if (response.ok) {
        const body = (await response.json()) as any;
        if (body.data) {
          items = items.concat(body.data);
        }
        next_link = body?.links?.next || undefined;
        console.log("next_link : ", body?.links);
      } else {
        const body = (await response.json()) as any;
        console.error('Error fetching data:', body);
        throw Error(
          `Something went wrong while syncing`
        );
      }
    } while (next_link);
    yield items;
  };
};

async function main() {
  console.log('Testing JD start');

  // Initialize generator
  // const listsGenerator = await getLists();
  // const listsGeneratorResponse = listsGenerator('https://a.klaviyo.com/api/lists');

  // // Iterate over items using for await...of
  // for await (const items of listsGeneratorResponse) {
  //   console.log('Received Klaviyo List:', items);
  // }

  //const url = 'https://a.klaviyo.com/api/lists/Td4vnm/';
  const url = 'https://a.klaviyo.com/api/lists/Td4vnm/profiles?page[size]=20';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/vnd.api+json',
      revision: '2024-10-15',
      Authorization: 'Klaviyo-API-Key pk_9088750e0561af38bd54645416dc03ae49'
    }
  };

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json)))
  .catch(err => console.error(err));

  console.log('Testing JD end');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    //await prisma.$disconnect();
  });