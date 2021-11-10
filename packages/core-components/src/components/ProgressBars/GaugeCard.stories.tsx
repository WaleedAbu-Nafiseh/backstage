/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PropsWithChildren } from 'react';
import { GaugeCard } from './GaugeCard';
import Grid from '@material-ui/core/Grid';
import { MemoryRouter } from 'react-router';

const linkInfo = { title: 'Go to XYZ Location', link: '#' };

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <MemoryRouter>
    <Grid container spacing={2}>
      {children}
    </Grid>
  </MemoryRouter>
);

export default {
  title: 'Data Display/Progress Card',
  component: GaugeCard,
};

export const Default = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Progress" progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.57} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.89} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" inverse progress={0.2} />
    </Grid>
  </Wrapper>
);

export const Subhead = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Progress" subheader="With a subheader" progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.57}
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.89}
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        inverse
        progress={0.2}
      />
    </Grid>
  </Wrapper>
);

export const LinkInFooter = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} progress={0.57} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} progress={0.89} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} inverse progress={0.2} />
    </Grid>
  </Wrapper>
);

export const StaticColor = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard getColor={() => '#f00'} title="Red" progress={0.5} />
    </Grid>
    <Grid item>
      <GaugeCard getColor={() => '#0f0'} title="Green" progress={0.5} />
    </Grid>
    <Grid item>
      <GaugeCard getColor={() => '#00f'} title="Blue" progress={0.5} />
    </Grid>
    <Grid item>
      <GaugeCard
        getColor={({ palette }) => palette.status.error}
        title="palette.status.error"
        progress={0.5}
      />
    </Grid>
  </Wrapper>
);
