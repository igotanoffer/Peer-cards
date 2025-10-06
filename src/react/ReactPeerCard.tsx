import React from 'react';
import type { Peer } from '../types/Peer';

export function ReactPeerCard({ peer }: { peer: Peer }) {
    return (
        <div className="react-peer-card">
            <div>{peer.name}</div>
        </div>
    );
}
