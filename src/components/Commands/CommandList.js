import React from 'react';

function CommandList() {
  return (
    <div className="container">
      <h1>ChitandaBot Commands</h1>
      <ul>
        <li>!play &lt;song name or link&gt;: play a song from YouTube</li>
        <li>!skip: skip the current song</li>
        <li>!stop: stop playing music and clear the queue</li>
        <li>!recommend &lt;anime genre&gt;: recommend a random anime based on the specified genre</li>
      </ul>
    </div>
  );
}

export default CommandList;
