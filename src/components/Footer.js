import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div>
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: '80%' }}
        >
          <CDBBox display="flex" alignItems="center">
            <a
              href="https://falbanese7.github.io/falbanese-react-portfolio/"
              className="d-flex align-items-center p-0 text-dark"
            >
              <span className="ml-4 h5 mb-0 font-weight-bold">
                Francesco Albanese
              </span>
            </a>
          </CDBBox>
          <CDBBox>
            <small className="ml-2">
              &copy; Francesco Albanese, {currentYear}. All rights reserved.
            </small>
          </CDBBox>
          <CDBBox display="flex">
            <a
              href="https://github.com/falbanese7"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="github" />
              </CDBBtn>
            </a>
            <a
              href="https://www.linkedin.com/in/francesco-albanese-jr"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="linkedin" />
              </CDBBtn>
            </a>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}
