import React, { useEffect, useState } from 'react';

import { Container, Segment } from 'semantic-ui-react';
import { getFooterHTML, getSystemName } from '../helpers';
import {Layout} from "@douyinfe/semi-ui";

const Footer = () => {
  const systemName = getSystemName();
  const [footer, setFooter] = useState(getFooterHTML());
  let remainCheckTimes = 5;

  const loadFooter = () => {
    let footer_html = localStorage.getItem('footer_html');
    if (footer_html) {
      setFooter(footer_html);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainCheckTimes <= 0) {
        clearInterval(timer);
        return;
      }
      remainCheckTimes--;
      loadFooter();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Layout.Content style={{textAlign: 'center'}}>
        {footer ? (
          <div
            className='custom-footer'
            dangerouslySetInnerHTML={{ __html: footer }}
          ></div>
        ) : (
          <div className='custom-footer'>
          联系方式 QQ：1503028
            <a
              href='http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=GhbAO3IUYdcLHoHu0HJ_ddIi5h26gcrx&authKey=WbM9L%2F4Ld%2F%2FYEFXpEdu6BqPKhZsgYHRKHy13%2BdpMf%2FVfJWfU1rtK5Ggv32lSMp%2B8&noverify=0&group_code=817377776'
              target='_blank'
            >
              点击一键加群
            </a>
            
          </div>
        )}
      </Layout.Content>
    </Layout>
  );
};

export default Footer;
