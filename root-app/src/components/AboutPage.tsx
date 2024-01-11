import AboutApp from 'about-app/App';
import { createApp } from 'vue';

import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    const app = createApp(AboutApp);
    app.mount('#vue-app');

    return () => app.unmount();
  }, []);
  return <div id="vue-app"></div>;
};

export default AboutPage;
