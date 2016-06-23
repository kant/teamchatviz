import React from 'react';
import { App } from 'client/app.js';
import HeartbeatPage from 'client/pages/heartbeat/index.js';
import PeopleLandPage from 'client/pages/people-land/index.js';
import ChannelLandPage from 'client/pages/channel-land/index.js';
import MoodsAndReactionsPage from 'client/pages/moods-and-reactions/index.js';
import { FrequentSpeakers } from 'client/frequent-speakers.js';
import { EmojiTimeline } from 'client/emoji-timeline.js';
import { Main } from 'client/main.js';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';

export default React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="/heartbeat" component={HeartbeatPage} />
        <Route path="/people-land" component={PeopleLandPage} />
        <Route path="/channel-land" component={ChannelLandPage} />
        <Route path="/moods-and-reactions" component={MoodsAndReactionsPage} />
        <Route path="/frequent-speakers" component={FrequentSpeakers} />
        <Route path="/emoji-timeline" component={EmojiTimeline} />
      </Route>
    </Router>;
  }
});
