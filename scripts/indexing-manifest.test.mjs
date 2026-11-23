import test from 'node:test';
import assert from 'node:assert/strict';
import { buildIndexingManifest, GSC_8_PRIORITY_QUEUE } from './generate-indexing-manifest.mjs';

test('MedicExpress indexing manifest validates all 30 sitemap URLs and outputs exact 8-URL GSC priority queue', () => {
  const manifest = buildIndexingManifest();

  assert.equal(manifest.host, 'medicexpress.com.co');
  assert.equal(manifest.site, 'https://medicexpress.com.co');
  assert.deepEqual(manifest.sitemaps, ['https://medicexpress.com.co/sitemap.xml']);
  assert.equal(manifest.validationErrors.length, 0, 'Expected 0 sitemap validation errors');
  assert.equal(manifest.summary.validatedSitemapUrls, 30, 'Expected 30 validated sitemap URLs');
  assert.equal(manifest.gscPriority8Queue.length, 8, 'Expected exact 8-URL GSC priority queue');

  for (const item of manifest.gscPriority8Queue) {
    assert.equal(item.inSitemap, true, `Expected ${item.url} to be present in sitemap`);
    assert.ok(item.url.startsWith('https://medicexpress.com.co/'), `Expected canonical HTTPS origin for ${item.url}`);
    assert.ok(item.url.endsWith('/'), `Expected trailing slash on ${item.url}`);
    assert.ok(item.jsonLdCount >= 1, `Expected JSON-LD structured data on ${item.url}`);
  }

  assert.equal(manifest.indexNow.payload.host, 'medicexpress.com.co');
  assert.equal(manifest.indexNow.payload.urlList.length, 30);
  assert.equal(manifest.indexNow.payload.urlList[0], GSC_8_PRIORITY_QUEUE[0].url);
});
