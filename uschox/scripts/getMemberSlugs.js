import { getMemberSlugs } from '../lib/db.js';

async function displayMemberSlugs() {
  try {
    const slugs = await getMemberSlugs();
    console.log('Member slugs:');
    slugs.forEach((slug, index) => {
      console.log(`${index + 1}. ${slug}`);
    });
    console.log(`Total members: ${slugs.length}`);
  } catch (error) {
    console.error('Error fetching member slugs:', error);
  }
}

displayMemberSlugs();