import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { registerSW } from 'virtual:pwa-register';

import './script/pages/app-home';
import './script/components/header';
import './script/components/header-home';
import './script/components/nav';
import './script/components/nav-home';
import './script/components/pwa';
import './script/components/icon-w3c';
import './script/components/icon-link';
import './script/components/icon-mac';
import './script/components/icon-win';
import './script/components/icon-lin';
import './script/components/icon-and';
import './script/components/icon-ios';
import './script/components/icon-des';
import './script/components/icon-mob';
import './script/components/icon-chr';
import './script/components/icon-saf';
import './script/components/icon-edg';
import './script/components/icon-fir';
import './script/components/icon-ope';
import './script/components/icon-viv';
import './script/components/icon-webdev';
import './script/components/footer';
import './script/components/footer-home';
import './styles/global.css';

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          { path: '/', component: 'app-home' },
          {
            path: '/2022',
            children: [
              { path: '/', 
                component: 'app-2022',
                action: async () => {
                  await import('./script/pages/app-2022.js');
                }
              },
              { path: '/:topic',
                component: 'app-2022',
                action: async () => {
                  await import('./script/pages/app-2022.js');
                }
              }
            ]
          },
          {
            path: '/2021',
            children: [
              { path: '/', 
                component: 'app-2021',
                action: async () => {
                  await import('./script/pages/app-2021.js');
                }
              },
              { path: '/:topic',
                component: 'app-2021',
                action: async () => {
                await import('./script/pages/app-2021.js');
                }
              }
            ]
          },
          {
            path: '/about',
            component: 'app-about',
            action: async () => {
              await import('./script/pages/app-about.js');
            },
          },
          {
            path: '/blog',
            children: [
              { path: '/', 
                component: 'app-blog',
                action: async () => {
                  await import('./script/pages/app-blog.js');
                }
              },
              { path: '/:article',
                component: 'app-blog',
                action: async () => {
                await import('./script/pages/app-blog.js');
                }
              }
            ]
          },
          {
            path: '/sample',
            component: 'app-sample',
            action: async () => {
              await import('./script/pages/app-sample.js');
            },
          },
          {
            path: '/sample/notification',
            component: 'sample-n',
            action: async () => {
              await import('./script/pages/sample-n.js');
            },
          },
          {
            path: '/sample/url-protocol-handler',
            component: 'sample-uph',
            action: async () => {
              await import('./script/pages/sample-uph.js');
            },
          },
          {
            path: '/sample/contact-picker',
            component: 'sample-c',
            action: async () => {
              await import('./script/pages/sample-c.js');
            },
          },
          {
            path: '/sample/generic-sensor',
            component: 'sample-gs',
            action: async () => {
              await import('./script/pages/sample-gs.js');
            },
          },
          {
            path: '/sample/app-shortcuts',
            component: 'sample-as',
            action: async () => {
              await import('./script/pages/sample-as.js');
            },
          },
          {
            path: '/sample/badging',
            component: 'sample-b',
            action: async () => {
              await import('./script/pages/sample-b.js');
            },
          },
          {
            path: '/sample/eyedropper',
            component: 'sample-ed',
            action: async () => {
              await import('./script/pages/sample-ed.js');
            },
          },
          {
            path: '/sample/window-controls-overlay',
            component: 'sample-wco',
            action: async () => {
              await import('./script/pages/sample-wco.js');
            },
          },
          {
            path: '/sample/web-share',
            component: 'sample-ws',
            action: async () => {
              await import('./script/pages/sample-ws.js');
            },
          },
          {
            path: '/sample/local-font-access',
            component: 'sample-lfa',
            action: async () => {
              await import('./script/pages/sample-lfa.js');
            },
          },
          {
            path: '/sample/file-handling',
            component: 'sample-fh',
            action: async () => {
              await import('./script/pages/sample-fh.js');
            },
          },
          {
            path: '/sample/media-player',
            component: 'sample-mp',
            action: async () => {
              await import('./script/pages/sample-mp.js');
            },
          },
          {
            path: '/sample/file-system-access',
            component: 'sample-fsa',
            action: async () => {
              await import('./script/pages/sample-fsa.js');
            },
          },
          {
            path: '/tutorial',
            component: 'app-tutorial',
            action: async () => {
              await import('./script/pages/app-tutorial.js');
            },
          },
          {
            path: '/code-of-conduct',
            component: 'app-coc',
            action: async () => {
              await import('./script/pages/app-coc.js');
            },
          },
          {
            path: '/privacy',
            component: 'app-privacy',
            action: async () => {
              await import('./script/pages/app-privacy.js');
            },
          },
        ],
      } as any,
    ]);
    registerSW({ immediate: true });
  }

  render() {
    return html`
      <main id="routerOutlet">
      </main>
    `;
  }
}
