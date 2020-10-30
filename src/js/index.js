// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import contentLoaded from "content-loaded";
import SmoothScroll from "./imports/smoothScroll";
const Entities = require('html-entities').AllHtmlEntities;
import moment from "moment";

contentLoaded().then(() => {
    /**
     * Enable search
     */
    try {
    //   let lastRenderArgs;
    //   let renderHTML = ``;
      algoliasearchNetlify({
        appId: ALGOLIA_APP_ID,
        apiKey: ALGOLIA_SEARCH_KEY,
        siteId: ALGOLIA_SITE_ID,
        branch: ALGOLIA_BRANCH,
        analytics: true,                              // Enable search analytics
        autocomplete: {
          hitsPerPage: 5,                             // Amount of results to display
          inputSelector: 'input[type=search]',        // CSS selector of your search input(s)
        },
        color: '#3c4fe0',                             // Main color
        debug: false,                                 // Debug mode (keeps the autocomplete open)
        silenceWarnings: false,                       // Disable warnings (e.g. no search input found)
        poweredBy: true, 
      });
      /* const infiniteHits = instantsearch.connectors.connectInfiniteHits(
        (renderArgs, isFirstRender) => {
          const {
            hits,
            showMore,
            widgetParams
          } = renderArgs;
          const {
            container
          } = widgetParams;
          lastRenderArgs = renderArgs;
          if (isFirstRender) {
            const sentinel = document.createElement('div');
            container.appendChild(document.createElement('ul'));
            container.appendChild(sentinel);
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting && !lastRenderArgs.isLastPage) {
                  showMore();
                }
              });
            });
            observer.observe(sentinel);
            return;
          }
          container.querySelector('ul').innerHTML = hits
            .map(
              (hit) => {
                const entities = new Entities();
                if (hit) {
                //   renderHTML = `<li class="hit-item-single">
                //     <div class="row">
                //       <div class="col-sm-12">
                //         <p class="search-product">
                //           <a class="search-product-link" href="/blog/">Blog</a> &nbsp; > &nbsp; <a class="search-product-link" href=/blog/${hit.categories}>${hit.categories}</a>
                //         </p> 
                //         <h2>
                //           <a class="search-title" href=/blog/${hit.url}>${instantsearch.highlight({ attribute: 'title', hit })}</a>
                //         </h2>
                //         <a class="search-summary-link" href=/blog/${hit.url}>
                //           <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                //         </a>
                //         <span class="search-author" > By &nbsp; ${instantsearch.highlight({ attribute: 'author', hit })}</span>
                //         <span class="search-date">${moment(hit.date).format('LL')}</span> 
                //     </div>
                //   </div>
                // </li>`;
                renderHTML = `<li class="hit-item-single">
                <div class="row">
                  <div class="col-sm-12">
                      <a class="search-title">${instantsearch.highlight({ attribute: 'title', hit })}</a>
                    </h2>
                    <a class="search-summary-link">
                      <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                    </a>
                </div>
              </div>
            </li>`;
                } 
                // else if (hit.product_url != null && hit.created_by != null && hit.created_by != '' && hit.created_date != null && !hit.permalink.includes('all-articles')) {
                //   renderHTML = `<li class="hit-item-single">
                //     <div class="row">
                //       <div class="col-sm-12">
                //         <p class="search-product">
                //           <a class="search-product-link" href="/support/how-to/">How-To</a> &nbsp; > &nbsp; <a class="search-product-link" href=/support/how-to/${hit.product_url}>${hit.product}</a>
                //         </p> 
                //         <h2>
                //           <a class="search-title" href=/support/how-to/${hit.permalink}>${instantsearch.highlight({ attribute: 'title', hit })}</a>
                //         </h2>
                //         <a class="search-summary-link" href=/support/how-to/${hit.permalink}>
                //           <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                //         </a>
                //         <span class="search-author" > By &nbsp; ${instantsearch.highlight({ attribute: 'created_by', hit })}</span>
                //         <span class="search-date">${hit.last_modified_date}</span> 
                //     </div>
                //   </div>
                // </li>`;
                  // } else 
                  else {
                  renderHTML = `<span></span>`
                }
                return entities.decode(renderHTML);
              }
            )
            .join('');
        }
      );
      const supportInfiniteHits = instantsearch.connectors.connectInfiniteHits(
        (renderArgs, isFirstRender) => {
          const {
            hits,
            showMore,
            widgetParams
          } = renderArgs;
          const {
            container
          } = widgetParams;
          lastRenderArgs = renderArgs;
          if (isFirstRender) {
            const sentinel = document.createElement('div');
            container.appendChild(document.createElement('ul'));
            container.appendChild(sentinel);
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting && !lastRenderArgs.isLastPage) {
                  showMore();
                }
              });
            });
            observer.observe(sentinel);
            return;
          }
          container.querySelector('ul').innerHTML = hits
            .map(
              (hit) => {
                const entities = new Entities();
                if (hit) {
                //   renderHTML = `<li class="hit-item-single">
                //     <div class="row">
                //       <div class="col-sm-12">
                //         <p class="search-product">
                //           <a class="search-product-link" href="/support/how-to/">How-To</a> &nbsp; > &nbsp; <a class="search-product-link" href=/support/how-to/${hit.product_url}>${hit.product}</a>
                //         </p> 
                //         <h2>
                //           <a class="search-title" href=/support/how-to/${hit.permalink}>${instantsearch.highlight({ attribute: 'title', hit })}</a>
                //         </h2>
                //         <a class="search-summary-link" href=/support/how-to/${hit.permalink}>
                //           <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                //         </a>
                //         <span class="search-author" > By &nbsp; ${instantsearch.highlight({ attribute: 'created_by', hit })}</span>
                //         <span class="search-date">${hit.last_modified_date}</span> 
                //     </div>
                //   </div>
                // </li>`;
                renderHTML = `<li class="hit-item-single">
                <div class="row">
                  <div class="col-sm-12">
                    <h2>
                      <a class="search-title">${instantsearch.highlight({ attribute: 'title', hit })}</a>
                    </h2>
                    <a class="search-summary-link">
                      <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                    </a>
                </div>
              </div>
            </li>`;
                } else {
                  renderHTML = `<span></span>`
                }
                return entities.decode(renderHTML);
              }
            )
            .join('');
        }
      );
      const renderStats = (renderOptions, isFirstRender) => {
        const {
          nbHits,
          widgetParams
        } = renderOptions;
  
        if (isFirstRender) {
          return;
        }
  
        let count = '';
        if (nbHits > 1) {
          count += `<p class="results-p">${nbHits} results found</p>`;
        } else if (nbHits === 1) {
          count += `<p>1 result found</p>`;
        } else {
          count += `<p class="no-results-p1">No results found</p>
          <p class="no-results-p2">It seems we can’t find any results based on your search.</p>`;
        }
        widgetParams.container.innerHTML = `${count}`;
      };
      const algoliaClient = algoliasearch(ALGOLIA_NETLIFY_BLOG_APP_ID, ALGOLIA_NETLIFY_BLOG_SEARCH_KEY);
      const searchClient = {
        search(requests) {
          if (requests.every(({
              params
            }) => !params.query)) {
            return Promise.resolve({
              results: requests.map(() => ({
                hits: [],
                nbHits: 0,
                nbPages: 0,
              })),
            });
          }
          return algoliaClient.search(requests);
        },
      };
      // Create the custom widget
      const customStats = instantsearch.connectors.connectStats(renderStats);
      const search = instantsearch({
        indexName: ALGOLIA_NETLIFY_BLOG_INDEX,
        searchClient: searchClient,
        searchFunction(helper) {
          const hitsContainer = document.querySelector('#hits');
          const paginationContainer = document.querySelector('#pagination');
          const statsContainer = document.querySelector('#stats');
          hitsContainer.style.display = helper.state.query === '' ? 'none' : '';
          paginationContainer.style.display = helper.state.query === '' ? 'none' : '';
          statsContainer.style.display = helper.state.query === '' ? 'none' : '';
          helper.search();
        },
      });
      search.addWidgets([
        instantsearch.widgets.searchBox({
          container: '#searchbox',
          placeholder: '',
          autofocus: true,
          showLoadingIndicator: true,
          searchAsYouType: true,
          wrapInput: false,
          magnifier: false,
          reset: false,
          poweredBy: false,
          escapeHTML: true
        }),
        instantsearch.widgets.configure({
          attributesToHighlight: [
            'content:160',
            'title',
            'author'
          ],
          attributesToRetrieve: [
            '*'
          ]
        }),
        infiniteHits({
          container: document.querySelector('#hits')
        }),
        customStats({
          container: document.querySelector('#stats'),
        })
      ]);
      search.start(); */
    } catch (err) {
      console.warn(err)
    }
    /**
     * Activate smooth scrolling for the entire
     * website for hash links
     */
    /* SmoothScroll(); */
  })