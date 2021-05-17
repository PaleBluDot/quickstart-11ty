const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

module.exports = async () => {
  const pageID = '7b60c853-60d8-4506-ab35-c8968b64c163';
  const databaseID = 'db9b983b-bf19-4420-ae79-9448c971a0d8';
  const listUsers = await notion.users.list();
  const getPage = await notion.pages.retrieve({ page_id: pageID });
  const getBlocks = await notion.blocks.children.list({
    block_id: pageID,
    page_size: 50,
  });

  return {
    userName: listUsers.results[0].name,
    userEmail: listUsers.results[0].person.email,
    pageTitle: getPage.properties.Name.title[0].plain_text,
    blockType: getBlocks.results[0],
    blockName: getBlocks.results[0].heading_2.text[0].plain_text,
  };
};
