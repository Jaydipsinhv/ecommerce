require('dotenv').config();
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

async function main() {
  try {
    const { setup } = await import('../index.js');
    console.log('setting up server');
    await setup();
  } catch (err) {
    console.error('Error while setting up server: ', err);
    process.exit(1);
  }
}

main();
