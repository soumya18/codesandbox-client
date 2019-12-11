import React from 'react';
import { Link as BaseLink } from '../Link';
import { P } from '../Typography';
import { GitHub, Spectrum, Twitter } from '../icons';
import { Container, Nav, Social } from './elements';

interface IFooterProps {
  Link?: React.ElementType;
}

export const Footer: React.FC<IFooterProps> = ({ Link = BaseLink }) => (
  <Container>
    <Nav>
      <ul>
        <li>
          <P big>Product</P>
        </li>
        <li>
          <P small muted>
            <Link to="/ide">Online IDE</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/embeds">Embed</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/ci">CodeSandbox CI</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/team">Teams</Link>
          </P>
        </li>
        {/* <li>
          <P small muted>
            <a href="">What’s New</a>
          </P>
        </li> */}
      </ul>
      <ul>
        <li>
          <P big>Explore</P>
        </li>
        <li>
          <P small muted>
            <Link to="/explore">Featured Sandboxes</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <a href="/search">Search Sandboxes</a>
          </P>
        </li>
      </ul>
      <ul>
        <li>
          <P big>Use Cases</P>
        </li>
        <li>
          <P small muted>
            <Link to="/prototyping">Prototyping</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/learning">Learning</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/hiring">Hiring</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/onboarding">Onboarding</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/collaboration">Collaboration</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/open-source">Open Source</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/devrel">DevRel</Link>
          </P>
        </li>
      </ul>

      <ul>
        <li>
          <P big>About</P>
        </li>
        <li>
          <P small muted>
            <Link to="/company">Company</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/blog">Blog</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/pricing">Pricing</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/jobs">Careers</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/legal">Legal</Link>
          </P>
        </li>
      </ul>

      <ul>
        <li>
          <P big>Support</P>
        </li>
        <li>
          <P small muted>
            <Link to="/docs">Documentation</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <a href="mailto:hello@codesandbox.io">Contact Support</a>
          </P>
        </li>
        <li>
          <P small muted>
            <a href="https://status.codesandbox.io">Status</a>
          </P>
        </li>
      </ul>
    </Nav>
    <Social>
      <li>
        <a
          title="Go to Github"
          href="https://github.com/codesandbox/codesandbox-client"
        >
          <GitHub />
        </a>
      </li>
      <li>
        <a title="Go to Twitter" href="https://twitter.com/codesandbox">
          <Twitter />
        </a>
      </li>
      <li>
        <a title="Go to Spectrum" href="https://spectrum.chat/codesandbox">
          <Spectrum />
        </a>
      </li>
    </Social>
    <P small muted centered>
      Copyright © {new Date().getFullYear()} CodeSandbox
    </P>
  </Container>
);